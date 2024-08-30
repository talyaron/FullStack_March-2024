import Item from "./FoodItem";

export class Category{
    id: string;
    name:string;

    constructor(name:string, id?: string){
        this.id = id ?? crypto.randomUUID();
        this.name = name;
    }
}