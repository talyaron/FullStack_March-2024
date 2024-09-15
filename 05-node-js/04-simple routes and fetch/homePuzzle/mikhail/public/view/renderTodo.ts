import { todo } from "../model/todo";
import { todos } from "../model/todos";

export function renderToDo(array:todo[]){
    const root =document.querySelector('#app');
    let html=`
    <div class="windows">
    <div class="head">
    <form >
    <input id="title" placeholder="enter title" />
    <input id="description" placeholder="description" />
    <button id="submit" type="submit">
    </form>
    </div>
    <div class="leftPanel""><ol>`
    array.forEach(todo => {
        
    if(todo.progress==="new"){
        html+=`<li>
        <h4>${todo.title}</h4>
        <p>${todo.description}</p>
        </li>`
    }
    });
    
    html+=`
    </ol> </div>
    <div class="middlePanel"">`
    
    array.forEach(todo => {
        
    
        if(todo.progress==="inProgress"){
            html+=`<li>
            <h4>${todo.title}</h4>
            <p>${todo.description}</p>
            </li>`
        }
        });
    html+=`</div>
    <div class="rightPanel""> `
    array.forEach(todo => {
        
    
        if(todo.progress==="finished"){
            html+=`<li>
            <h4>${todo.title}</h4>
            <p>${todo.description}</p>
            </li>`
        }
        });
        html+=`
    </div>
    </div>`
}