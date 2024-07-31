import { Student, students } from "../model/student";
import { renderStudents } from "../view/studentView";

export function handleAddEvent(event:any){
    event.preventDefault();
    if(!event)
        throw new Error("something wrong");
    const inputName:string = event.target.studentName.value;
    addStudent(inputName)
    renderStudents();
}

function addStudent(name:string){
    const std = new Student(name);
    students.push(std);
}

export function handleRenderStudent(event:any){
    console.dir(event.target);
}

export function viewStudentHandler(id:string){
    alert("this is working!")
}