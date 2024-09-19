const tasksRouter = require('express').Router();


class Task {
    name: string;
    id: string;
    description: string;
    constructor(name: string, description: string, id?: string) {
        this.name = name;
        this.description = description
        this.id = id ?? crypto.randomUUID();
    }
}

const tasks: Task[] = [
    new Task('Task 1', 'This is the first task', '1'),
    new Task('Task 2', 'This is the second task', '2'),
    new Task('Task 3', 'This is the third task', '3'),
    new Task('Task 4', 'This is the fourth task', '4'),
]

tasksRouter.get('/all-tasks', (req: any, res: any) => {
    res.json(tasks);
});


tasksRouter.get('/task/:id', (res: any, req: any) => {
    const { id } = req.params;
    console.log(id)
    const task = tasks.find(task => task.id === id)
    if (task) {
        res.json(task);
    } else {
        res.send({'error':'Task not found'});
    }

});


tasksRouter.post('/add-task', (req:any, res:any) => {
    const {name, description} = req.body;
    if(!name || !description){
        res.status(400).send({'error':'Name and description are required'});
    }
    const task = new Task(name, description);
    tasks.push(task);
    res.send({done:'Task added successfully', tasks: tasks});
});

module.exports = tasksRouter;