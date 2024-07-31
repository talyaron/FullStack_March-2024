import { Student, students } from "../models/student";
import { renderStudents } from "../views/students";
import { renderAllSubjects, renderFormSubject } from "../views/subject";


export function addStudent(event: any) {
    try {
        event.preventDefault();
        const name = event.target.studentName.value;
        students.push(new Student(name));
        renderStudents();
        event.target.reset();

    } catch (error) {
        console.error(error);
    }
}


export function addSubjectForm(event: any): void {
    try {
        const id = event.target.id;
        console.log('addSubject', event.target.id);
        const studentElement = document.getElementById(`a${id}`) as HTMLDivElement;
        let subjects = '';

        students.forEach(student => {
            if(student.id === id) {
                subjects += renderAllSubjects(student.grades);
            }
        
        });
        // const subjects = renderAllSubjects();
        const addSubjectInput = renderFormSubject(id);

        studentElement.innerHTML += subjects + addSubjectInput;

        //add event listener to the delete and add subject buttons
        const addnewSubject = document.querySelectorAll('#add-subject-form'); 

        if (addnewSubject)
            addnewSubject.forEach(button => button.addEventListener('submit', addSubject));

    } catch (error) {
        console.error(error);
    }
}


export function deleteStudent(event: any): void {
    try {
        const id = event.target.id;
        const studentElement = students.findIndex(student => student.id === id);
        students.splice(studentElement, 1);
        console.log('student deleted', id);
        renderStudents();
    } catch (error) {
        console.error(error);
    }
}


export function addSubject(event: any): void {
    try {
        // console.dir('addSubject', event);
        event.preventDefault();
        const id = event.target.id.id;
        const subject = event.target.subject.value;
        const grade = event.target.grade.value;
        console.log("subject", subject, "grade", grade, "id", id);

        if (subject === undefined || subject === null || subject === '' || grade === undefined || grade === null || grade === '') {
            throw new Error('subject or grade is undefined');
        }
        const student = students.find(student => student.id === id);
        console.log('student', student);
        if (student) {
            student.addSubject(subject, parseInt(grade));
            renderStudents();
        }
        event.target.reset();
    } catch (error) {
        console.error(error);
    }
}