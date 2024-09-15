import { todo } from "./todo";

export class todos{
    title:string;
    array:todo[];

    constructor (array:todo[],title:string){
        this.title=title
        this.array=array;
    }


}