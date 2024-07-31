export class Student{
    id:string;
    name:string;
    grades:Grade[] = [];
    edit: boolean = false;

    constructor(name:string){
        this.name = name;
        this.id = `id-${crypto.randomUUID()}`;
    }
    addGrades(subject:string, score:number){
        this.grades.push(new Grade(subject,score));
    }

    getAverageGrade(){
        let total = 0;
        this.grades.forEach(grade => {
            total += +grade.score;
        });
        return (total / this.grades.length).toFixed(2);
    }
}


export interface Subjects{
    subject:string;
    score:number;
}

export class Grade{
    id:string;
    subject:string;
    score:number;
    constructor(subject:string, score:number){
        this.subject = subject;
        this.score = score;
        this.id = crypto.randomUUID();
    }
}


export const students:Student[] = [];
