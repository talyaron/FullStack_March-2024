class Task {
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

const tasks: Task[] = [];

function handleAddTask(ev: any){
    ev.preventDefault();                              //prevents the default form submission//
    try {
        const description = ev.target.description.value;      //retrieved the task description from the form input//

        tasks.push(new Task(description));                //Creates a new Task object with the description and adds it to the tasks array.//
        renderList(tasks);                          //Calls the renderList function to update the view with the new list of tasks.//
        console.log(tasks);                      //Logs the updated tasks array to the console.//
        ev.target.reset();                       //Resets the form input fields.//
    } catch (error) {
       console.error(error); 
    }
}



function renderList(tasks:Task[]){
    try {
       
        let html = '<ol>';
        tasks.forEach(task => {
            html += `<li>
            ${task.edit?
                `<input type="text" value="${task.description}">`
                :
                `<span class=${task.done?"done":"not-done"} onclick="handleDone('${task.id}')">${task.description}</span>`
            }            
            <button onclick="handleDelete('${task.id}')">Delete</button>
            <button onclick="handleEdit('${task.id}')">Edit</button>
            </li>`;
        });
        html += '</ol>';

        const list = document.querySelector('#list');
        if(!list) throw new Error('List not found');

        list.innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}


function handleDelete(id:string){
    try {
        const index = tasks.findIndex(task => task.id === id);
        if(index === -1) throw new Error('Task not found');
        tasks.splice(index, 1);
        renderList(tasks);
    } catch (error) {
        console.error(error);
    }
}

function handleDone(id:string){
    try {
        const task = tasks.find(task => task.id === id);
        if(!task) throw new Error('Task not found');

        task.done = !task.done;
        console.log(tasks);
        renderList(tasks);
    } catch (error) {
        console.error(error);
    }
}

function handleEdit(id:string){
    try {
        const task = tasks.find(task => task.id === id);
        if(!task) throw new Error('Task not found');

        task.edit = !task.edit;
        console.log(tasks);
        renderList(tasks);
    } catch (error) {
        console.error(error);
    }
}