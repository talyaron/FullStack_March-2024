import { Student, students } from "../models/student";
import { renderStudent, renderStudents } from "../views/students";


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

export function handleGrades(event:any,id:string){
    try {

        let student=students.find(student=>student.id===id) as Student;
        event.preventDefault();
        if(!event)throw new Error("poop");
        
    const grade=event.target.grade.value;
    const subject=event.target.subject.value;
   if(student){
    student.addGrades(subject, grade);
   }
   renderStudent(student);
   
   event.target.reset();
} catch (error) {
        console.error(error);
}
}