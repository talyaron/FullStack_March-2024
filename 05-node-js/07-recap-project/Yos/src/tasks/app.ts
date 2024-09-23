function main() {
  // get all tasks from the server
  getAllTasks();
}

async function getAllTasks(): Promise<Task[] | null | undefined> {
  try {
    // get all tasks from the server
    const tasks = await getTaskData(`/api/tasks/all-tasks`);
    if (tasks === null) {
      throw new Error("No tasks found");
    }
    console.log(tasks);
    renderAllTasks(tasks!);
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getTaskData(url: string): Promise<Task[] | null> {
  try {
    const req = await fetch(url);
    const tasks = await req.json();
    return tasks;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function renderAllTasks(tasks: Task[]) {
  const tasksDiv = document.getElementById("tasks") as HTMLDivElement;
  let tasksHtml = "";
  tasks.forEach((task) => {
    tasksHtml += `
        <div class="task">
        <h2>${task.name}</h2>
        <p>${task.description}</p>
        <div class="actions">
        <button class="btn btn-danger" onclick="handleDeleteClick(event)" id="delete-${task.id}">Delete</button>
        <button class="btn btn-warning" onclick="handleEditClick(event)" id="edit-${task.id}">Edit</button>
        </div>
        </div>
        `;
  });
  tasksDiv.innerHTML = tasksHtml;
}

function handleGetAllTasks() {
  main();
}

async function handleDeleteClick(event: any) {
  try {
    const id = event.target.id.split("-")[1];
    console.log(id);
    await deleteTask(id);
  } catch (error) {
    console.log(error);
  }
}

async function deleteTask(id: string) {
  try {
    const req = await fetch("/api/tasks/delete-task", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const res = await req.json();
    if (res.error) {
      throw new Error(res.error);
    }
    renderAllTasks(res.tasks);
  } catch (error) {
    console.error(error);
  }
}

async function handleEditClick(event: any) {
  try {
    const id = event.target.id.split("-")[1];
    console.log(id);
    // render the edit form
    renderEditForm(id);
    // await handleEditTask(id);
  } catch (error) {
    console.log(error);
  }
}

async function renderEditForm(id: string) {
  try {
    const task = await getTaskData(`/api/tasks/task?id=${id.trim()}`);

    console.log(task);
  } catch (error) {
    console.error(error);
  }
}

async function handleEditTask(task: Task) {
  try {
    const req = await fetch(`/api/tasks/edit-task/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    const res = await req.json();
    if (res.error) {
      throw new Error(res.error);
    }
    console.log(res.tasks);
    renderAllTasks(res.tasks);
  } catch (error) {
    console.error(error);
  }
}

function handleAddTask(event: any) {
  try {
    event.preventDefault();
    const form = event.target;
    const name = form.task.value;
    const description = form.description.value;
    const task: UserTask = { name: name, description: description };
    addTask(task);
    form.reset();
    const ditElement = document.getElementById(
      "add-task-message"
    ) as HTMLDivElement;
    renderSuccussMessage(ditElement, "Task added successfully");
  } catch (error) {
    console.log(error);
  }
}

interface UserTask {
  name: string;
  description: string;
}

function renderSuccussMessage(divElement: HTMLDivElement, message: string) {
  divElement.innerHTML = message;
  setTimeout(() => {
    divElement.innerHTML = "";
  }, 3000);
}

async function addTask(task: UserTask) {
  try {
    console.log(task);
    if (!task.name || !task.description) {
      throw new Error("Name and description are required");
    }
    const req = await fetch("/api/tasks/add-task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const res = await req.json();
    if (res.error) {
      throw new Error(res.error);
    }
    renderAllTasks(res.tasks);
  } catch (error) {
    console.error(error);
  }
}
