import { Product } from "../Model/Product";

export class ProductController {
  private products: Product[] = [];

  constructor() {
    this.products.push(new Product(1, 'Dress', 20.99, 'Summer Dress', 'Clothes', 100,'Dress1.jpg'));
    this.products.push(new Product(2, 'Purse', 30.00, 'Leather Handbags', 'Bags', 50,'bag1.jpg'));
    this.products.push(new Product(3, 'Shoes', 10.00, 'Sandals', 'Footwear', 70,'shoes1.jpg'));
    this.products.push(new Product(4, 'iPhone', 1000.00, 'phone', 'electronics', 150,'iphone.jpg'));
    this.products.push(new Product(5, 'Dress', 25.99, 'Summer Dress', 'Clothes', 100,'Dress2.jpg'));
    this.products.push(new Product(6, 'Purse', 35.00, 'Leather Handbags', 'Bags', 50,'bag2.jpg'));
    this.products.push(new Product(7, 'Shoes', 20.00, 'Sandals', 'Footwear', 70,'shoes2.jpg'));
    this.products.push(new Product(8, 'iPhone', 1500.00, 'phone', 'electronics', 150,'iphone2.jpg'));
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}