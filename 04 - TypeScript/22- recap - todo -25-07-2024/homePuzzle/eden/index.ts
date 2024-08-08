class students {
  name: string;
  id: string;
  grades: number[];
  constructor(name: string) {
    this.name = name;
    this.id = `id-${crypto.randomUUID()}`;
    this.grades = [];
  }
}

const student1 = new students;

function student2 {
  name: string;
  id: string;
  grades: number[];
  constructor(name: string) {
    this.name = name;
    this.id = `id-${crypto.randomUUID()}`;
    this.grades = [];
  }
}

const student3 = new student2;

function student4 {
  name: string;
  id: string;
  grades: number[];
  constructor(name: string) {
    this.name = name;
    this.id = `id-${crypto.randomUUID()}`;
    this.grades = [];
  }
}

function renderStudent(student: students) {
  console.log(`Name: ${student.name}, ID: ${student.id}`);

  for (const grade of student.grades) {
    console.log(`Grade: ${grade}`);
  }}

renderStudent(student1);

renderStudent(student2);

renderStudent(student3);

function addGrade(student: students, grade: number) {
  student.grades.push(grade);

  console.log(`Grade added: ${grade}`);}

  addGrade(student1, 85);
  addGrade(student2, 90);
  addGrade(student3, 78);