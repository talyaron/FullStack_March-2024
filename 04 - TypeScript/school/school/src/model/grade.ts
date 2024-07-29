export class Grade{
    id:string
    subject:string
    grade:number

    constructor(subject:string,grade:number){
        this.id = crypto.randomUUID();
        this.subject = subject;
        this.grade = grade;
    }
}