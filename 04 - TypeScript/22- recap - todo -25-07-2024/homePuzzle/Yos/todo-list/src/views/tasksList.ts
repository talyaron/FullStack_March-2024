import { Task, tasksList } from "../models/task";
import './dist/taskList.css'
import { handleDeleteTask , handleEditTask, handleUpdateTask} from "../controllers/handleAddTask";


export function renderTasksList(listElement: HTMLDivElement): void | undefined {
    try {
        //render the tasks into the screen
        let tasksHtml = '';
        tasksList.forEach(task => tasksHtml += renderTask(task)!);
        listElement.innerHTML = tasksHtml;
        addClickListenerEvent();



    } catch (error) {
        console.error(error);
        return undefined;
    }
}

function addClickListenerEvent():void {
    const deleteList = document.querySelectorAll<HTMLButtonElement>('.delete')
    const editList = document.querySelectorAll<HTMLButtonElement>('.edit')
    const updateTask = document.querySelectorAll<HTMLButtonElement>('.update')
    
    if (deleteList) {
        deleteList.forEach(item => item.addEventListener('click', handleDelete))
    }
    if (editList) {
        editList.forEach(item => item.addEventListener('click', handleEdit))
    }
    if (updateTask) {
        updateTask.forEach(item => item.addEventListener('click', handleUpdate))
    }
}

function handleDelete(event: Event): void {
    const id = event.target?.id;
    console.log('delete', id);
    handleDeleteTask(id);

}
function handleEdit(event: Event): void {
    const id = event.target?.id;
    console.log('edit', event.target?.id);
    handleEditTask(id)
    addClickListenerEvent();

}

function handleUpdate(event:Event):void{
    const id = event.target.id;
    const eventData = event.target;
    console.log('update', id);
    handleUpdateTask(id, eventData);

}

function renderTask(task: Task): string | undefined {
    try {
        //task div element
        const taskElement = `
            <div class='task' id=a${task.id}>
                <h3 class='name'>${task.name}</h3>
                <p class='desc'>${task.description}</p>
                <p class='done'>${task.done}</p>
                <button class='delete' id=${task.id}>Delete</button>
                <button class='edit' id=${task.id} >Edit</button>
            </div>
        `;
        return taskElement;

    } catch (error) {
        console.error(error);
        return undefined;
    }

}


export function handleEditHtmlTag(ele: HTMLDivElement, task: Task) {
    try {

        let div = `<input class='name' value=${task.name}>
                   <input class='desc' value=${task.description}> 
                   <input class='done' value=${task.done} > 
                   <button class="delete" id="${task.id}">Delete</button>
                   <button class="update" id="${task.id}">Update</button>
                   `
        ele.innerHTML = div;

    } catch (error) {
        console.error(error);
    }
}