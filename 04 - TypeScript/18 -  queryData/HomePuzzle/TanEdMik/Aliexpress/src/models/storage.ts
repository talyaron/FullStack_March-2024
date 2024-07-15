import { Product } from './product';

const productArray = [new Product("https://www.ikea.com/ca/en/images/products/vattentaet-kettle-stainless-steel-black__0713344_pe729450_s5.jpg?f=s", "Kettle", "electronics", 50, 20),
    new Product("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtySMPd0pbo5jRYrSpvl0iDsaXYdBZTAtqvLD-2cVEImuMj6q4", "Cattle", "Livestock", 500, 5),
    new Product("https://www.cookwithmanali.com/wp-content/uploads/2021/04/Veg-Cutlet-500x500.jpg", "Cutlet", "Food", 5, 15),
    new Product("https://www.ikea.com/ca/en/images/products/sedlig-20-piece-cutlery-set-stainless-steel__0713291_pe729401_s5.jpg", "Cutlery", "Dining", 25, 10)
];
export function getStoredProducts(): Product[] {
    const storedProducts = localStorage.getItem('products');
    if (!storedProducts) {
        return productArray;
    }
    return JSON.parse(storedProducts).map((product: any) => new Product(product.image, product.name, product.type, product.price, product.inventory, product.quantity));
}
export function getStoredCart(): Product[] {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart).map((product: any) => new Product(product.image, product.name, product.type, product.price, product.inventory, product.quantity)) : [];
}
export function updateLocalStorage(products: Product[], cart: Product[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('products', JSON.stringify(products));
}
