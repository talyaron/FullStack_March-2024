import { tasks } from "../model/taskModel";
import { renderTasksList } from "../view/taskView";

export function handleDoneTask(id: string) {
  try {
    const task = tasks.find((task) => task.id === id);
    const index = tasks.indexOf(task!);
    if (task!.edit === false) {
      task!.done = !task!.done;

      tasks.splice(index, 1);
      if (task!.done === true) {
        tasks.push(task!);
      } else {
        tasks.unshift(task!);
      }
      const list = document.querySelector<HTMLDivElement>("#list")!;
      renderTasksList(list, tasks);
    }
  } catch (error) {
    console.error(error);
  }
}

export function handleDeleteTask(id: string) {
  try {
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    console.log(tasks, "index -", index);
    const list = document.querySelector<HTMLDivElement>("#list")!;
    renderTasksList(list, tasks);
  } catch (error) {
    console.error(error);
  }
}

export function handleEditTask(id: string) {
  try {
    const task = tasks.find((task) => task.id === id);
    if (task!.done === false) {
      task!.edit = !task!.edit;
      const list = document.querySelector<HTMLDivElement>("#list")!;
      renderTasksList(list, tasks);
    }
  } catch (error) {
    console.error(error);
  }
}
