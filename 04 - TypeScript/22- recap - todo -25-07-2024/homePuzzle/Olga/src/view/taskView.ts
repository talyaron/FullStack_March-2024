import { Task } from "../model/taskModel";

export function renderTasksList(element: HTMLDivElement, tasks: Task[]) {
    try {
        const html = tasks
            .map((task) => {
                return renderTask(task);
            })
            .join("");
        element.innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}

function renderTask(task: Task) {
  try {   

    const html = `
    ${task.edit?
      `<div class="task" id=${task.id}><input type="text" value="${task.description}">`
      :
      `<div class="task" id=${task.id}><dev class=${task.done ? "done" : "not-done"}>${task.description}</dev>`
    }
    
    
    <button class="doneButton">Done</button>
    <button class="deleteButton">Delete</button>
    <button class="editButton">Edit</button></div>`;
    return html;
  } catch (error) {
    console.error(error);
  }
}