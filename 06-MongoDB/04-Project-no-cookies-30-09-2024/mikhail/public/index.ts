class game{
        id: String;
        name: String;
        price: Number;
        imageURL: String;
        genre: String;
        cart: Boolean;
        owned: Boolean;

        constructor(id:string,name:string,price:number,imageURL:string,genre:String,cart:boolean,owned:boolean){
            this.id=id;
            this.name=name;
            this.price=price;
            this.imageURL=imageURL;
            this.genre=genre;
            this.cart=cart;
            this.owned=owned;
        }

}
