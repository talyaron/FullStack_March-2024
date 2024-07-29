class Student {
  name: string;
  id: string;
  grades: Grade[];
  constructor(name: string) {
    this.name = name;
    this.id = `id-${crypto.randomUUID()}`;
    this.grades = [];
  }
  addGrade (grade:number, subject:string){
    this.grades.push(new Grade(grade,subject))
  }
}
class Grade{
    grade: number;
    subject: string;
    id: string;
    constructor(grade:number, subject:string){
        this.grade = grade;
        this.subject = subject;
        this.id = `id-${crypto.randomUUID()}`;
    }
}
const students: Student[] = [];
