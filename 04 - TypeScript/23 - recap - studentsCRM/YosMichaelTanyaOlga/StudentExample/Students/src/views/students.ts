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
                <div class='subjects'><form  id='subject-grades' onsubmit="handleGrades(event,${student.id})"> 
                <input class='name' name="subject" type="text" placeholder="enter subject" required>
                <input class='name' name="grade" type="number" placeholder="enter grade" required>
                <button class="subject" type="submit">subject and grade</button>
            </form></div>
            <div class="grades-list">
            <p>${student.grades}</p>
            </div>
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
            <div class='form'><form  id='form'> 
                <input class='name' name="studentName" type="text" placeholder="enter student name" required>
                <button class="add" type="submit">Add Student</button>
            </form></div>`;
        element.innerHTML = form;
        console.log('form', form);
        const formElement = document.querySelector('#form') as HTMLFormElement;
        if (formElement) formElement.addEventListener('submit', addStudent)

    } catch (error) {
        console.error(error);
        return undefined;
    }
}


