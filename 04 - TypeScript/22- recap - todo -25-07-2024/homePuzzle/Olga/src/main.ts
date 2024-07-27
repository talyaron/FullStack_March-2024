import './style.scss'
import { renderTasksList } from './view/taskView'
import { renderForm } from './view/formView'
import { tasks } from './model/taskModel'
import { handleDeleteTask, handleDoneTask } from './controller/taskCont'

const list = document.querySelector<HTMLDivElement>('#list')!
const form = document.querySelector<HTMLFormElement>('#form')!

renderTasksList(list, tasks);
renderForm(form);


handleDoneTask();

// handleDeleteTask();

document.addEventListener('click', (event) => {
    console.log(event.target);
})
