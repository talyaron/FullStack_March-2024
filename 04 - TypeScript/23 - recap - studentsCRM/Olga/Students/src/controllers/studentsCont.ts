import { Student, students } from "../models/studentModel";
import { renderStudents } from "../views/studentsView";

export function addStudent(event: any) {
  try {
    event.preventDefault();
    const studentElement = document.querySelector(
      ".students-list"
    ) as HTMLDivElement;
    const name = event.target.studentName.value;
    students.push(new Student(name));
    renderStudents(studentElement);
    event.target.reset();
    console.log(students);
  } catch (error) {
    console.error(error);
  }
}

export function editName(event: any) {
  try {
    const studentElement = document.querySelector(
      ".students-list"
    ) as HTMLDivElement;
    const student = students.find(
      (student) => student.id === event.target.id
    ) as Student;
    student.edit = true;
    
    renderStudents(studentElement);
  } catch (error) {
    console.error(error);
  }
}

// export function saveName(event: any) {
//   try {
//     const studentElement = document.querySelector(
//       ".students-list"
//     ) as HTMLDivElement;
//     renderStudents(studentElement);
//   } catch (error) {
//     console.error(error);
//   }
// }

export function addSubject(event: any) {
    try {
        event.preventDefault();
        const studentElement = document.querySelector('.students-list') as HTMLDivElement;
        console.log(studentElement);
        const student = students.find(student => student.id === event.target.id) as Student;
        const subject = event.target.subject.value;
        const grade = event.target.grade.value;
        student.addGrades(subject, grade);
        renderStudents(studentElement);
        console.log("It's working");
    } catch (error) {
        console.error(error);
    }
}
