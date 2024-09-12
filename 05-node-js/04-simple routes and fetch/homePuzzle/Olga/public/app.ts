// import { Task } from "../src/models/taskModel";

// Model
class Task {
  id: string;
  name: string;
  isCompleted: boolean;

  constructor(name: string) {
    this.id = `id-${crypto.randomUUID()}`;
    this.name = name;
    this.isCompleted = false;
  }

  complete() {
    this.isCompleted = true;
  }
}

let tasks: Task[] = [];

// View

function renderTask(task: Task) {
  try {
    if (!taskList) throw new Error("Task list not found");
    const tasksListHTML = document.querySelectorAll("li");
    let idList: string[] = [];
    tasksListHTML.forEach((element) => {
      idList.push(element.id);
    });
    if (idList.includes(task.id)) return;
    const li = document.createElement("li");
    li.textContent = task.name;
    li.setAttribute("id", task.id);
    console.log("renderTask", task.name, task.id);
    const removeButton = document.createElement("button");
    removeButton.textContent = "Delete";
    removeButton.addEventListener("click", () => {
      taskList.removeChild(li);
      deleteTaskFromDB(task.id);
    });
    li.appendChild(removeButton);
    taskList.appendChild(li);
  } catch (error) {
    console.error(error);
  }
}

// Controllers

const taskList = document.querySelector("#task-list") as HTMLUListElement;
const addTaskButton = document.querySelector("#add-task") as HTMLButtonElement;
const newTaskInput = document.querySelector("#new-task") as HTMLInputElement;
const getTasksButton = document.querySelector("#get-tasks") as HTMLButtonElement;

// document.addEventListener("DOMContentLoaded", () => {
//   if (tasks.length === 0) {
//     taskList.innerHTML = "You have no tasks";
//   }
// })

addTaskButton.addEventListener("click", () => {
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    const task = new Task(taskText);
    tasks.push(task);
    renderTask(task);
    newTaskInput.value = "";
    addTaskToDB(task);
  }
});

getTasksButton.addEventListener("click", fetchTasks);

async function fetchTasks() {
  const response = await fetch("/getTasks");
  const tasks = (await response.json()) as Task[];

  tasks.forEach((task) => {
    renderTask(task);
  });
}

async function addTaskToDB(task: Task) {
  await fetch("/addTask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
}

async function deleteTaskFromDB(taskId: string) {
  await fetch(`/tasks/${taskId}`, {
    method: "DELETE",
  });
}
