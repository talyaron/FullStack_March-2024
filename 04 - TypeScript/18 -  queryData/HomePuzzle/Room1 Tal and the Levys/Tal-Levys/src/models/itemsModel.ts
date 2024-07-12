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
new Item("1","bag",50,5,"https://m.media-amazon.com/images/I/81PtF30TLUL._AC_UY1100_.jpg"),
new Item("2","bag2",52,2,"https://images.thdstatic.com/productImages/6379bb9b-7816-45d9-88d5-1ac1f8925a40/svn/the-home-depot-food-storage-bags-hdrubag-th-4f_600.jpg"),
new Item("3","bag3",53,3,"https://i.pinimg.com/736x/8e/ce/47/8ece4770dfe1b15cd92324ceac6a1a1f.jpg"),
new Item("4","bag4",54,4,"https://www.evocsports.com/media/23/32/76/1629365056/401407100-GEAR-BAG-35.jpg"),
new Item("5","bag5",55,5,"https://m.media-amazon.com/images/I/61Rb+rv0lNL._AC_UY1100_.jpg")];

//export function addToUserCart() 