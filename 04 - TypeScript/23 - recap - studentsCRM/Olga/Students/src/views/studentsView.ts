import { addStudent, addSubject } from "../controllers/studentsCont";
import { Student, students } from "../models/studentModel";

import './dist/students.css'

export function renderStudents(element: HTMLDivElement): void {
    try {
        let html = '';
        students.forEach(student => {
            html += renderStudent(student);
        });
        element.innerHTML = html;
        students!.forEach(element => {
            const form = document.querySelector<HTMLFormElement>(`#${element.id}`);
            if (form) form.addEventListener('submit', addSubject);
        });
    } catch (error) {
        console.error(error);
    }
}



export function renderStudent(student: Student): string | undefined {
    try {
        const studentHtml = `
            <div class="student">
                <div class="student-name">
                    ${student.edit ? `<input class='edit' name="studentName" type="text" value="${student.name}"><button class="save">Save name</button>` : `<span class="student-name">${student.name}</span><button class="edit">Edit name</button>`}
                </div>
                <form class='subject-grades' id="${student.id}"> 
                
                    <input class='name' name="subject" type="text" placeholder="enter subject" required>
                    <input class='name' name="grade" type="number" placeholder="enter grade" min="1" max="100" required>
                    <button class="subject" type="submit">Add Subject</button>
                </form>
            ${student.grades.length > 0 ? renderGrades(student) : ''}
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
            <h1>Students</h1>
            <div class='form'><form  id='form'> 
                <input class='name' name="studentName" type="text" placeholder="enter student name" required>
                <button class="add" type="submit">Add Student</button>
            </form></div>`;
        element.innerHTML = form;

        const formElement = document.querySelector('#form') as HTMLFormElement;
        if (formElement) formElement.addEventListener('submit', addStudent)

    } catch (error) {
        console.error(error);
        return undefined;
    }
}

function renderGrades(student: Student): string | undefined {
    try {
        let studentHtml = '<div class="grades-list">';
            
        student.grades.forEach(grade => {
            studentHtml += `<p>${grade.subject}: ${grade.score}</p>`
        })

        studentHtml += `
        </div>
            <div>
                <p class="avg-grade">Avg Grade: ${student.getAverageGrade()}</p>
            </div>`;
        return studentHtml;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}
