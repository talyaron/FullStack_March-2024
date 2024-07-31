export class Student {
    id: string;
    name: string;
    grades: Subject[];


    constructor(name: string) {
        this.name = name;
        this.id = crypto.randomUUID();
        this.grades = [];
    }
    addSubject(subject: string, score: number) {
        if (!this.grades) this.grades = [];
        this.grades.push({ subject: subject, score: score, id: crypto.randomUUID()});
    }

}


export interface Subject {
    subject: string;
    score: number;
    id: string;
}


export const students: Student[] = [];
