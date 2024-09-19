class Todo {
  id: string;
  progress: string;
  title: string;
  description: string;

  constructor(title: string, description: string) {
    this.progress = "new";
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
  }

  setDescription(description: string) {
    this.description = description;
  }

  setTitle(title: string) {
    this.title = title;
  }
  
  setProgress(progress: string) {
    this.progress = progress;
  }
}

// Clock function to display current time
const clock = document.getElementById("clock");
setInterval(() => {
  if (clock) {
    clock.textContent = new Date().toLocaleTimeString();
  }
}, 1000);

// Function to handle the form submission and todo list
function handleList() {
  const form = document.querySelector('#form') as HTMLFormElement;
  const tasks: Todo[] = [];

  form.addEventListener('submit', (event) => {
    try {
      event.preventDefault();  // Prevent form submission from reloading the page
      
      // Access the form elements properly
      const task = form.elements.namedItem('task') as HTMLInputElement;
      const description = form.elements.namedItem('description') as HTMLInputElement;

      // Create a new todo object
      const _task = new Todo(task.value, description.value);
      
      // Push to tasks array and render the list
      tasks.push(_task);
      addToDB(_task);
      renderToDo(tasks);

      form.reset();

    } catch (error) {
      console.error(error);
    }
  });

  // Initial render
  renderToDo(tasks);
}

async function addToDB(task:Todo){
  try {
    const response = await fetch("/api/add-task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task) //passing the data (in JSON format)
    });
    if(!response.ok) throw new Error("Error adding student");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
// Function to render the todo list based on progress
function renderToDo(array: Todo[]) {
  const root = document.querySelector("#app") as HTMLDivElement;
  if (!root) return;

  let html = `
  <div class="windows">
    <div class="leftPanel">
      <ul>`;

  // Render "new" tasks
  array.forEach((todo) => {
    if (todo.progress === "new") {
      html += `
        <li>
          <select data-id="${todo.id}" class="select-progress">
          <option value="none" >Progress</option>
            <option value="new" >New</option>
            <option value="inProgress" >In Progress</option>
            <option value="Done" >Done</option>
          </select>
          <h4>${todo.title}</h4>
          <p>${todo.description}</p>
          <button data-id="${todo.id}" class="delete-button">Delete</button>  
        </li>`;
    }
  });

  html += `
      </ul>
    </div>
    <div class="middlePanel">
      <ul>`;

  // Render "inProgress" tasks
  array.forEach((todo) => {
    if (todo.progress === "inProgress") {
      html += `
        <li>
          <select data-id="${todo.id}" class="select-progress">
          <option value="none" >Progress</option>
            <option value="new" >New</option>
            <option value="inProgress" >In Progress</option>
            <option value="Done" >Done</option>
          </select>
          <h4>${todo.title}</h4>
          <p>${todo.description}</p>
          <button data-id="${todo.id}" class="delete-button">Delete</button>
        </li>`;
    }
  });

  html += `
      </ul>
    </div>
    <div class="rightPanel">
      <ul>`;

  // Render "finished" tasks
  array.forEach((todo) => {
    if (todo.progress === "Done") {
      html += `
        <li>
          <select data-id="${todo.id}" class="select-progress">
          <option value="none" >Progress</option>
            <option value="new" >New</option>
            <option value="inProgress">In Progress</option>
            <option value="Done" >Done</option>
          </select>
          <h4>${todo.title}</h4>
          <p>${todo.description}</p>
          <button data-id="${todo.id}" class="delete-button">Delete</button>
        </li>`;
    }
  });

  html += `
      </ul>
    </div>
  </div>`;

  // Inject HTML into root element
  root.innerHTML = html;

  // Add event listeners for select elements
  const selects = document.querySelectorAll('.select-progress');
  selects.forEach((select) => {
    select.addEventListener('change', (event) => {
      const selectElement = event.target as HTMLSelectElement;
      const todoId = selectElement.getAttribute('data-id');
      const newProgress = selectElement.value;

      // Find the task by id and update its progress
      const todo = array.find(todo => todo.id === todoId);
      if (todo) {
        todo.setProgress(newProgress);
        console.log(`Updated task progress to: ${newProgress} for ID: ${todoId}`);
        
        // Re-render the list with updated progress
        renderToDo(array);
      }
    });
  });
  const deleteButtons = document.querySelectorAll('.delete-button');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const buttonElement = event.target as HTMLButtonElement;
      const todoId = buttonElement.getAttribute('data-id');

      // Find the index of the task by id and remove it from the array
      const taskIndex = array.findIndex(todo => todo.id === todoId);
      if (taskIndex !== -1) {
        array.splice(taskIndex, 1);  // Remove the task from the array
        console.log(`Deleted task with ID: ${todoId}`);

        // Re-render the list after deletion
        renderToDo(array);
      }
    });
  });
}



// Call the handleList function to initialize
handleList();
