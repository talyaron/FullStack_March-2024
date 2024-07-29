class Task {
  name: string;
  id: string;
  done: boolean;

  constructor(name: string) {
    this.name = name;
    this.id = `id-${crypto.randomUUID()}`;
    this.done = true;
  }
}

const tasks: Task[] = [];

function handleNewTask(ev: Event) {
  const target = ev.target as HTMLFormElement;
  ev.preventDefault();
  try {
    const newTask = new Task(target.description.value);
    tasks.push(newTask);
    renderList(tasks);
  } catch (error) {
    console.error(error);
  }
}

function renderList(tasks: Task[]) {
  try {
    let html = "<ol>";
    tasks.forEach((task) => {
      html += `<li>
      <span class=${task.done?"done":"not-done"} onclick="handleDone('${task.id}')">${task.name}</span>
      <button onclick="handleDelete('${task.id}')">Delete</button>
      <button>Edit</button>
      </li>`;
    });
    html += "</ol>";

    const list = document.querySelector("#list");
    if (!list) throw new Error("List not found");

    list.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function handleDelete(id: string) {
  try {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) throw new Error("Task not found");
    tasks.splice(index, 1);
    renderList(tasks);
  } catch (error) {
    console.error(error);
  }
}

function handleDone(id:string) {
  try {
    const task = tasks.find(task=> task.id === id);
    if(!task) throw new Error("Task not found");
    
    task.done = !task.done;
    renderList(tasks);
    console.log(tasks);
    
  } catch (error) {
    console.error(error);
    
  }
}


