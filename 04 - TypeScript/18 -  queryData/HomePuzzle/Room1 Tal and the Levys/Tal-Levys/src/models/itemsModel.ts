export class Item{
    id:string;
    name:string;
    price:number;
    quantity:number;
    img:string;
    
    constructor(id:string, name:string, price:number, quantity:number, img:string){
            this.id = id,
            this.name = name,
            this.price = price,
            this.quantity = quantity,
            this.img = img
        }
}
export const items:Item[] = [
new Item("1","bag",50,5,""),
new Item("2","bag2",52,2,""),
new Item("3","bag3",53,3,""),
new Item("4","bag4",54,4,""),
new Item("5","bag5",55,5,"")];

export function addToUserCart() 