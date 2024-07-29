import { Task, tasks } from "../model/taskModel";
import { renderTasksList } from "./taskView";

export function renderForm(element: HTMLFormElement) {
  try {
    const html = `
        <form id="${crypto.randomUUID()}">
        <input type="text" name="task"" placeholder="Description of the task" required/> <button type="submit">Add</button>
        </form>`;
    element.innerHTML = html;

    element.addEventListener("submit", handleAddTask);
  } catch (error) {
    console.error(error);
  }
}

function handleAddTask(event: Event) {
  try {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const description = form.task.value;
    const task = new Task(description);
    tasks.push(task);
    localStorage.setItem(task.id, JSON.stringify(task));
    console.log(task.id);
    renderTasksList(document.querySelector<HTMLDivElement>("#list")!, tasks);
    form.reset();

  } catch (error) {
    console.error(error);
  }
}
