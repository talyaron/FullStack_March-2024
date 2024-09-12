// import express from 'express';
// import { Task } from './models/taskModel';
const express = require('express')
const app = express()
const port = 3000

class Task {
  id: string
  name: string
  isCompleted: boolean
  constructor(name: string) {
    this.id = `id-${crypto.randomUUID()}`
    this.name = name
    this.isCompleted = false
  }
  complete() {
    this.isCompleted = true
  }
}

const tasks: Task[] = []

app.use(express.json());
app.use(express.static('public'));

app.get('/getTasks', (req:any, res:any) => {
  res.json(tasks);
});

app.post('/addTask', (req:any, res:any) => {
  const task = req.body;
  console.log(task.name, task.id);
  if (task && task.name) {
    tasks.push(task);
    console.log("Server", task.name, task.id);
    res.status(201).json(task);
  } else {
    res.status(400).json({ error: 'Invalid task data' });
  }
});

app.delete('/tasks/:id', (req:any, res:any) => {
  const taskId = req.params.id;
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  if (taskIndex > -1) {
    tasks.splice(taskIndex, 1);
    res.status(200).json({ message: 'Task deleted' });
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})