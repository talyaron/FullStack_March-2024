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