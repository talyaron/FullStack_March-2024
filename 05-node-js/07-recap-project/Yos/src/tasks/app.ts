function main() {
    // get all tasks from the server
    getAllTasks();
}


async function getAllTasks() {
    try {
        // get all tasks from the server
        const req = await fetch('/api/tasks/all-tasks');
        const tasks = await req.json();
        console.log(tasks);
        renderAllTasks(tasks);

    } catch (error) {
        console.log(error);
    }
}

function renderAllTasks(tasks: Task[]) {
    const tasksDiv = document.getElementById('tasks') as HTMLDivElement;
    let tasksHtml = "";
    tasks.forEach(task => {
        tasksHtml += `
        <div class="task">
        <h2>${task.name}</h2>
        <p>${task.description}</p>
        </div>
        `;
    });
    tasksDiv.innerHTML = tasksHtml;
}


function handleGetAllTasks() {
    main();
}


function handleAddTask(event: any) {
    try {
        event.preventDefault();
        const form = event.target;
        const name = form.task.value;
        const description = form.description.value;
        const task: UserTask = { name: name, description: description }
        addTask(task);
        form.reset();

    } catch (error) {
        console.log(error);
    }
}

interface UserTask {
    name: string;
    description: string;
}

async function addTask(task: UserTask) {
    try {
        console.log(task);
        if (!task.name || !task.description) {
            throw new Error('Name and description are required');
        }
        const req = await fetch('/api/tasks/add-task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
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