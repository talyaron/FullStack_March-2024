const express = require('express')
// const Task = require('.../models/taskModel');
import { Task } from './models/taskModel';
const app = express()
const port = 3000

const tasks: typeof Task[] = []

app.use(express.json());
app.use(express.static('public'));

// Маршрут для получения всех задач
app.get('/', (req:any, res:any) => {
  res.json(tasks);
});

// Маршрут для добавления новой задачи
app.post('/', (req:any, res:any) => {
  const task = req.body;
  if (task && task.name) {
    task.id = tasks.length + 1;
    tasks.push(task);
    res.status(201).json(task); // Возвращаем новую задачу
  } else {
    res.status(400).json({ error: 'Invalid task data' });
  }
});

// // Маршрут для удаления задачи по ID
// app.delete('/tasks/:id', (req:any, res:any) => {
//   const taskId = parseInt(req.params.id, 10);
//   const taskIndex = tasks.findIndex(t => t.id === taskId);
//   if (taskIndex > -1) {
//     tasks.splice(taskIndex, 1);
//     res.status(200).json({ message: 'Task deleted' });
//   } else {
//     res.status(404).json({ error: 'Task not found' });
//   }
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})