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


module.exports = tasksRouter;