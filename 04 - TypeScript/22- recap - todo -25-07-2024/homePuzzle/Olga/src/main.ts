import './style.scss'
import { renderTasksList } from './view/taskView'
import { renderForm } from './view/formView'
import { tasks } from './model/taskModel'
import { handleDeleteTask, handleDoneTask, handleEditTask, handleSaveTask } from './controller/taskCont'

const list = document.querySelector<HTMLDivElement>('#list')!
const form = document.querySelector<HTMLFormElement>('#form')!

renderTasksList(list, tasks);
renderForm(form);


document.addEventListener('click', (event) => {
    if (event.target instanceof HTMLButtonElement) {
        if (event.target.classList.contains('deleteButton')) {
            handleDeleteTask(event.target.parentElement!.id);
        }
        if (event.target.classList.contains('doneButton')) {
            handleDoneTask(event.target.parentElement!.id);
        }
        if (event.target.classList.contains('editButton')) {
            handleEditTask(event.target.parentElement!.id);
        }
        if (event.target.classList.contains('editSave')) {
            handleSaveTask(event.target.parentElement!.id);
        }
    }
})


document.addEventListener('click', (event) => {
    console.log(event.target);
})
