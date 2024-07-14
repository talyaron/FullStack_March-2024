
export interface Product {
    id: string;
    name: string;
    img: string;
    description: string;
    price: number;

}


export interface CartItem extends Product {
    quantity: number;
}

export interface UserCart {
    items: CartItem[];
}