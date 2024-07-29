import { handleAddEvent, handleRenderStudent } from "../controllers/handleAddEvent";
import { htmlTag } from "../general/general";
import { students } from "../model/student";

//first rendering the form
export function renderForm(){
    try {
        const id:string = "s"+crypto.randomUUID();
        const html:string=`<form id="${id}" >
        <input type="text" name="studentName">
        <input type="submit" value="add">
        </form>`;
        const div=htmlTag("#app");
        div.innerHTML=html;
        div.addEventListener('submit',handleAddEvent);
    } catch (error) {
        console.error(error);
    }
}

export function renderStudents(){
    try {
        let html = `<div><ul>`;
        students.forEach(element => {
            html+=`<li><a href="#" id="${element.id}">${element.name}</a></li>`;
        });
        html+= `</ul></div>`;
        const div=htmlTag("#list");
        div.innerHTML = html;
        div.addEventListener('',handleRenderStudent);
    } catch (error) {
        console.error(error);
    }
}