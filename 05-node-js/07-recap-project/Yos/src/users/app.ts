import './dist/styles.css';


async function main() {
    // get all users from the server
    const users = await getDataFromServer('/api/users/all-users');
    renderUsers(users);

}

async function getDataFromServer(url:string) {
    // get all users from the server
    try {
        const req = await fetch(url);
        const data = await req.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);

    }
}


function renderUsers(users:User[]) {
    const usersDiv = document.getElementById('users') as HTMLDivElement;
    let htmlDiv = "";
    users.forEach(user => {
        htmlDiv += `
        <div class="user">
        <h2>${user.name}</h2>
        <p>${user.age}</p>
        <p>${user.title}</p>
        </div>
        `;
        usersDiv.innerHTML = htmlDiv;
    });
}


function handleGetAllUsers() {
    main();
}

async function handleGetAllTasks() {
    const tasks = await getDataFromServer('/api/tasks/all-tasks');
    console.log(tasks);
    renderTasks(tasks);
}

function renderTasks(tasks:Task[]){
    const tasksDiv = document.getElementById('tasks') as HTMLDivElement;
    let tasksHtml = "";
    tasks.forEach(task => {
        tasksHtml += `
        <div class="task">
        <h2>${task.name}</h2>
        <p>${task.description}</p>
        <p>${task.id}</p>
        </div>
        `;
    })
    tasksDiv.innerHTML = tasksHtml;

}