import { todo } from "../model/todo";
import { todos } from "../model/todos";
import { renderToDo } from "../view/renderTodo";
export function handleList(array:todo[]){
    
    
        renderToDo(array);
   
}