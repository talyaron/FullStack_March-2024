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
      localStorage.setItem(task!.id, JSON.stringify(task!));
    }
  } catch (error) {
    console.error(error);
  }
}

export function handleDeleteTask(id: string) {
  try {
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    localStorage.removeItem(id);
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

export function handleSaveTask(id: string) {
  try {
    const task = tasks.find((task) => task.id === id);
    if (task!.edit === true) {
      const description = document.querySelector<HTMLInputElement>("#edit-input");
      task!.description = description!.value;
      task!.edit = !task!.edit;
      localStorage.setItem(task!.id, JSON.stringify(task!));
      const list = document.querySelector<HTMLDivElement>("#list")!;
      renderTasksList(list, tasks);
    }
  } catch (error) {
    console.error(error);
  }
}
