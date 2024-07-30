import { Student, students } from "../models/student";
import { renderStudents } from "../views/students";


export function addStudent(event: any) {
    try {
        event.preventDefault();
        const studentElement = document.querySelector('.students-list') as HTMLDivElement;
        const name = event.target.studentName.value;
        students.push(new Student(name));
        renderStudents(studentElement);
        event.target.reset();

    } catch (error) {
        console.error(error);
    }
}


export function addSubject(event: any) {
    try {
       const id = event.target.id;
        console.log('addSubject', event.target.id);
        const studentElement = document.getElementById(`a${id}`) as HTMLDivElement;
        console.log('studentElement', studentElement);

    } catch (error) {
        console.error(error);
    }
}