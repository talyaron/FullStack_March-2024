class Task {
    id: string;
    task: string;
    description: string;
    done: boolean;
    constructor(task: string, description: string, done: boolean) {
        this.id = `id-${crypto.randomUUID()}`;
        this.task = task;
        this.description = description;
        this.done = done;
    }
    toggleDone() {
        this.done = !this.done;
    }
}

const tasks: Task[] = [];

const form = document.querySelector('#the-form')!;
form.addEventListener('submit', (event) => {
    try {


        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const task = form.task.value;
        const description = form.description.value;
        const _task = new Task(task, description, false);
        tasks.push(_task);
        renderTasks();

        //send to DB
    } catch (error) {
        console.error(error);
    }
});

function renderTasks() {
    try {
       
        const tasksElement = document.querySelector('#tasks');
        if (!tasksElement) throw new Error('Tasks element not found');
        let html = '';
        tasks.forEach(task => {
            html += `
            <div class="task">
                <h2>${task.task}</h2>
                <p>${task.description}</p>
                <button onclick="toggleDone('${task.id}')">${task.done ? 'Undone' : 'Done'}</button>
                 <button onclick="handleDelete()">Delete</button>
            </div>
        `;
            
        });
        tasksElement.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}