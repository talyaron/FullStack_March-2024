class Product{
    id:number;
    name:string;
    type:string;
    price:number;
    inventory:number;



    constructor(name:string,type:string,price:number,inventory:number){
        this.name=name;
        this.type=type;
        this.price=price;
        this.id=makeId();
        this.inventory=inventory;
    }
   updateInventory(addedQuantity:number){
    this.inventory+=addedQuantity;
   }

   }

function makeId():number{
    return Math.floor(Math.random()*1000000);
}

const products:Product[]=[new Product("kettle","electronics",50,20)];

const root = document.querySelector('#product') as HTMLElement;

function renderProduct(product:Product):string|undefined{
    try {
    const html= `<div class="product" style=><h3>${product.name}</h3></div>`;
    return html;

    } catch (error) {
        
}
}

function renderProducts(products:Product[],element:HTMLElement|null){
    let html='';
    try {
        if(!element)
            throw new Error("no root");
            
        products.forEach(Product => {
           html+= renderProduct(Product);
            
        });element.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
    
}

renderProducts(products,root);
