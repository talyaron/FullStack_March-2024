// total price of array(?) of items, for each item double item.price by item.quantity  *only items and the quantity that was moved to the cart.

class cartItem{
    id:string;
    name: string;
    price: number;
    quantity:number;

    constructor (id:string, name:string, price:number, quantity:number){
        this.id=id,
        this.name=name,
        this.price=price
        this.quantity=quantity
    }
}

const bags:cartItem[] = [
    new cartItem("1","bag",150,5),
    new cartItem("2","bag2",30,10),
    new cartItem("3","bag3",65,7),
    new cartItem("4","bag4",50,2),
    new cartItem("5","bag5",100,6)];


    console.log(bags);
    
    
    function getTotalPrice(bags :cartItem[],) {
        let sum=0 
        try {
            bags.forEach ( cartItem => {sum+= cartItem.price }  )
            return sum
        } catch (error) {
            console.error(error);
            return []
        }
    }
    console.log(getTotalPrice(bags));
    
    
    // if the items in the cart were : 
    // from bag2 - 7 items, from bag5 - 2 items and from bag3 - 4 items.  