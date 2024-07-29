export class Task {
    description: string;
    id: string;
    done: boolean;
    edit: boolean;
  
    constructor(description: string) {
      this.description = description;
      this.id = `id-${crypto.randomUUID()}`;
      this.done = false;
      this.edit = false;
    }
  }
  
  export const tasks: Task[] = [];
  
  function handleAddTask(ev: Event) {
    ev.preventDefault();
    try {
      const target = ev.target as HTMLFormElement;
      const description = (target.elements.namedItem('description') as HTMLInputElement).value;
      tasks.push(new Task(description));
      console.log(tasks);
      target.reset();
      renderList(tasks);
    } catch (error) {
      console.error(error);
    }
  }
  
  function renderList(tasks: Task[]) {
    try {
      let html = '<ol>';
      tasks.forEach(task => {
        html += `<li>
          ${task.edit ?
            `<input type="text" value="${task.description}" data-id="${task.id}" class="edit-input">`
            :
            `<span class="${task.done ? "done" : "not-done"}" data-id="${task.id}" onclick="handleDone('${task.id}')">${task.description}</span>`
          }            
          <button data-id="${task.id}" onclick="handleDelete('${task.id}')">Delete</button>
          <button data-id="${task.id}" onclick="handleEdit('${task.id}')">Edit</button>
          </li>`;
      });
      html += '</ol>';
  
      const list = document.querySelector('#list');
      if (!list) throw new Error('List not found');
  
      list.innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }
  
  function handleDelete(id: string) {
    try {
      const index = tasks.findIndex(task => task.id === id);
      if (index === -1) throw new Error('Task not found');
      tasks.splice(index, 1);
      renderList(tasks);
    } catch (error) {
      console.error(error);
    }
  }
  
  function handleDone(id: string) {
    try {
      const task = tasks.find(task => task.id === id);
      if (!task) throw new Error('Task not found');
  
      task.done = !task.done;
      console.log(tasks);
      renderList(tasks);
    } catch (error) {
      console.error(error);
    }
  }
  
  function handleEdit(id: string) {
    try {
      const task = tasks.find(task => task.id === id);
      if (!task) throw new Error('Task not found');
  
      if (task.edit) {
        const input = document.querySelector(`.edit-input[data-id="${task.id}"]`) as HTMLInputElement;
        task.description = input.value;
      }
      task.edit = !task.edit;
      console.log(tasks);
      renderList(tasks);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Attach event handlers globally
  (window as any).handleDelete = handleDelete;
  (window as any).handleDone = handleDone;
  (window as any).handleEdit = handleEdit;
  
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#taskForm');
    if (form) {
      form.addEventListener('submit', handleAddTask);
    }
  });
  