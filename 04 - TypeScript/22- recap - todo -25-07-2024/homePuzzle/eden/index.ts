class student {
  name: string;
  grades: number[];
  id: string;
  constructor(name: string) {
    this.name = name;
    this.id = `id-${crypto.randomUUID()}`;
  }
}

const students: Student[] = [];

class grade {
  grade: number;
  subject: string;
  constructor(grade: number, subject: string) {
    this.grade = grade;
    this.subject = subject;
  }
}

const grades: Grade[] = [];
