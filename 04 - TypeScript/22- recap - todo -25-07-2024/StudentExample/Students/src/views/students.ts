import { addStudent, addSubject } from "../controllers/students";
import { Student, students } from "../models/student";

import './dist/students.css'

export function renderStudents(element: HTMLDivElement): void {
    try {
        let html = '';
        students.forEach(student => {
            html += renderStudent(student);
        });
        element.innerHTML = html;

        //add event listener to the add subject buttons
        const addSubjectButtons = document.querySelectorAll('[name="add-subject"]');
        // const formElement = document.querySelector('#form') as HTMLFormElement;
        if (addSubjectButtons)
             addSubjectButtons.forEach(button => button.addEventListener('click', addSubject))




    } catch (error) {
        console.error(error);
    }
}



export function renderStudent(student: Student): string | undefined {
    try {
        const studentHtml = `
            <div class="student" id="a${student.id}">
                <h2>${student.name}</h2>
                <p>${student.id}</p>
                <div class="buttons buttons__add"><button name="add-subject" id="${student.id}">Add Subject</button></div>
                <div class="buttons buttons__delete"><button name="delete-student" id="${student.id}">Delete Student</button></div>
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