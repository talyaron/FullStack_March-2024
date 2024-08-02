class Grade {
  grade: number;
  subject: string;
  constructor(grade: number, subject: string) {
    this.grade = grade;
    this.subject = subject;
  }

}


class Student {
  name: string;
  id: string;
  grades: Grade[];
  constructor(name: string) {
    this.name = name;
    this.id = `id-${crypto.randomUUID()}`;
    this.grades = [];//added//
  }

  addGrade(grade: Grade) {
    this.grades.push(grade);//added//

  }
}
const students: Student[] = [];


function handleAddStudent(ev: Event) {
  ev.preventDefault();
  try {
    const form = ev.target as HTMLFormElement;//added//
    const studentName = form.student.value;//added//
    students.push(new Student(studentName));//added student//
    console.log(students)
    renderStudents(students);
    form.reset();
  } catch (error) {
    console.error(error);
  }
}
//added//
function handleAddGrades(ev: Event) {
  ev.preventDefault();
  try {
    const form = ev.target as HTMLFormElement;
    const gradeValue = Number(form.grade.value);
    const subject = form.subject.value;
    const studentId = form.id;

    const student = students.find(student => student.id === studentId);
    if (!student) throw new Error("Student not found");

    student.addGrade(new Grade(gradeValue, subject));

    const html = renderGradesList(student.grades)
    const studentGrades = document.querySelector(`#grades-${studentId}`) as HTMLDivElement;
    if (!studentGrades) throw new Error("Grades Element not found");
    studentGrades.innerHTML = html;

    form.reset();
  } catch (error) {
    console.error(error);
  }
}
//added//
function renderGradesList(grades: Grade[]): string {
  if (grades.length === -1) return "No grades yet.";
  let html = "<ul>";
  grades.forEach(grade => {
    html += `<li>${grade.subject}: ${grade.grade}</li>`;
  });
  html += "</ul>";
  return html;
}
//changed//
function renderStudents(students: Student[]) {
  try {
    let html = "<ol>";
    students.forEach(student => {
      html += `<li class = "student"> 
          <h3>${student.name}</h3>
          <div id="grades-${student.id}"></div>
          <form id='${student.id}' onsubmit = "handleAddGrades(event)">          
          <input type="number" name="grade" placeholder="Grade">
          <input type="text" name="subject" placeholder="Subject" required>
          <button  type="submit">Add Grade</button>
          </form>
          </li>`;
    });
    html += "</ol>";
    const studentList = document.querySelector("#studentsList") as HTMLDivElement;
    if (!studentList) throw new Error("List not found");
    studentList.innerHTML = html;

    students.forEach(student => {
      try {
        const html = renderGradesList(student.grades);
        const studentGrades = document.querySelector(`#grades-${student.id}`) as HTMLDivElement;
        if (!studentGrades) throw new Error("Grades Element not found");
        studentGrades.innerHTML = html;
      } catch (error) {

        console.error(error);
      }
    });
  } catch (error) {
    console.error(error);
  }
}


//   requires name of student (in the first input)
//   doesn't add a new ul and li