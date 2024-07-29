import { addStudent } from "../controllers/students";
import { Student, students } from "../models/student";

import './dist/students.css'

export function renderStudents(element: HTMLDivElement): void {
    try {
        let html = '';
        students.forEach(student => {
            html += renderStudent(student);
        });
        element.innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}



export function renderStudent(student: Student): string | undefined {
    try {
        const studentHtml = `
            <div class="student">
                <h2>${student.name}</h2>
            </div>
        `;
        return studentHtml;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}


export function renderStudentForm(element: HTMLDivElement): void | undefined {
    try {
        const form = `
            <form class='form' id='form'> 
                <input class='name' type="text" placeholder="enter student name">
                <button class="add" type="submit">Add Student</button>
            </form>`;
        element.innerHTML = form;
        console.log('form', form);
        // const formElement = document.querySelector('#form') as HTMLFormElement;
        // if (formElement) formElement.addEventListener('submit', addStudent)

    } catch (error) {
        console.error(error);
        return undefined;
    }
}