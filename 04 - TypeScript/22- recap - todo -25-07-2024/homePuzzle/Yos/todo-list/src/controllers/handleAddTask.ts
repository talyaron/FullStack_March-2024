import { tasksList, Task } from "../models/task";
import { handleEditHtmlTag, renderTasksList } from "../views/tasksList";



export function handleAddTask(name: string, desc: string): void | undefined {
    try {
        const task = new Task(name, desc);
        tasksList.push(task);
        console.log(tasksList, task)
        renderListOfTasks();

    } catch (error) {
        console.error(error);
        return undefined;
    }
}

function renderListOfTasks() {
    //render tasks list
    const list = document.querySelector<HTMLDivElement>('#tasksList')!;
    if (list) {
        console.log('list', list);
        renderTasksList(list);
    }
}

export function handleDeleteTask(id: string) {
    try {
        const task = tasksList.findIndex(task => task.id === id);
        console.log('task num', task);
        tasksList.splice(task, 1);
        console.log('deleted')
        renderListOfTasks();


    } catch (error) {
        console.error(error);
    }
}

export function handleEditTask(id: string): void {
    try {
        const task = tasksList.find(task => task.id === id);
        const taskDiv = document.getElementById(`a${id}`) as HTMLDivElement;
        const formData = JSON.stringify(taskDiv);
        handleEditHtmlTag(taskDiv, task!);
        console.log('taskDiv', taskDiv);
        console.log('edit', task);
        console.log('json', formData)
    } catch (error) {
        console.error(error);
    }
}


export function handleUpdateTask(id: string, event: any): void {
    try {
        const task = tasksList.find(task => task.id === id);
        const taskDiv = document.getElementById(`a${id}`) as HTMLDivElement;
        console.log('taskDiv', taskDiv);
        console.log('name', event.name);
        // console.log('task', task);
        // console.log('event', event.target);
        // task.name = event.name;
        // task.description = event.desc;
        // task.done = event.done;
        // renderListOfTasks();

    } catch (error) {
        console.error(error);
    }
}