import { Grade } from "./grade";

export class Student{
    id:string
    name:string
    grades:Grade[]

    constructor(name:string){
        this.id = crypto.randomUUID();
        this.name = name;
        this.grades=[];
    }
}

export const students:Student[]=[];