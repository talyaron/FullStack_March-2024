class Student {
  name: string;
  id: string;
  grades: Grade[];
  constructor(name: string) {
    this.name = name;
    this.id = `id-${crypto.randomUUID()}`;
  }
}

const students: Student[] = [];

class Grade {
  grade: number;
  subject: string;
  constructor(grade: number, subject: string) {
    this.grade = grade;
    this.subject = subject;
  }
}

const grades: Grade[] = [];

function handleAddStudent(ev: any) {
  ev.preventDefault();
  try {
    const form = ev.target.student.value;
    students.push(new Student(form));
    renderStudents(students);
    ev.target.reset();
  } catch (error) {
    console.error(error);
  }
}

function renderStudents(students: Student[]) {
  try {
    let html = "<ol>";
    students.forEach((student) => {
      html += `<li class = "student"> 
        ${student.name}
        <form onsubmit="handleAddGrades(event)">
        <input type = "number" name ="grade" placeholder = "Grade">
        <input type = "string" name ="subject" placeholder = "Subject">
        <button type = "submit" id= "addGrade">Add grade</button>
        </li>`;

      const AddGradeButton = studentList.querySelector(
        '#addGrade'
      ) as HTMLElement;
      AddGradeButton.addEventListener("click", handleAddGrades);
    });
    html += "</ol>";

    const studentList = document.querySelector(
      "#studentsList"
    ) as HTMLDivElement;
    if (!studentList) throw new Error("List not found");
    studentList.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function handleAddGrades(event: any) {
  event.preventDefault();
  try {
    const grade = event.target.grade.value;
    const subject = event.target.subject.value;
    grades.push(new Grade(grade, subject));
    console.log(grades);
    
  } catch (error) {
    console.error(error);
  }
}

