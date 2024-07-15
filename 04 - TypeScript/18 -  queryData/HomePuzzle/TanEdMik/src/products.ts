class Product{
    id:number;
    name:string;
    type:string;
    price:number;
    inventory:number;
    img:string;



    constructor(name:string,type:string,price:number,inventory:number,img:string){
        this.name=name;
        this.type=type;
        this.price=price;
        this.id=makeId();
        this.inventory=inventory;
        this.img=img;
    }
   updateInventory(addedQuantity:number){
    this.inventory+=addedQuantity;
   }

   }

function makeId():number{
    return Math.floor(Math.random()*1000000);
}

const products:Product[]=[new Product("kettle","electronics",50,20,"https://m.media-amazon.com/images/I/615mdbIlDpL._AC_UF894,1000_QL80_.jpg")];

const root = document.querySelector('#product') as HTMLElement;

function renderProduct(product:Product):string|undefined{
    try {
    const html= `<div class="card one">
    <div class="product">
    <img class="product-img" src="${product.img}" alt="${product.name}">
    <p class="card-writing">${product.name}</p>
    <h3 class="card-writing">${product.price}$</h3>
    <p class="card-writing">in stock : ${product.inventory}</p>
    <div class="buttons" style="margin-bottom:10px;">
    <button>Add to cart</button>
    <button>Remove from cart</button>
    </div>
    </div>
    </div>`;
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
