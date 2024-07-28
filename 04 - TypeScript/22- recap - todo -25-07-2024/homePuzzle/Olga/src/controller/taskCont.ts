import { tasks } from "../model/taskModel";
import { renderTasksList } from "../view/taskView";

export let doneButtons: HTMLButtonElement[] = [];

export function handleDoneTask() {
  try {
    

    doneButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.parentElement!.id;
        const task = tasks.find((task) => task.id === id);
        task!.done = !task!.done;
        const list = document.querySelector<HTMLDivElement>("#list")!;
        renderTasksList(list, tasks);
      });
    });
  } catch (error) {
    console.error(error);
  }
}

export function handleDeleteTask() {
  try {
    const deleteButtons =
      document.querySelectorAll<HTMLButtonElement>(".deleteButton");

    deleteButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.parentElement!.id;
        const index = tasks.findIndex((task) => task.id === id);
        tasks.splice(index, 1);
        console.log(tasks, 'index -', index);
        const list = document.querySelector<HTMLDivElement>("#list")!;
        renderTasksList(list, tasks);
      });
    });
  } catch (error) {
    console.error(error);
  }
}
