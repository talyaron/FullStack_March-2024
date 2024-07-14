import { Product, UserCart, CartItem } from './types';

    class Cart {
        private cart: UserCart = { items: [] };

        addProduct(product: Product, quantity: number): void{
            const existingItem = this.cart.items.find(item => item.id === product.id);
            if(existingItem) {
                existingItem.quantity += quantity;
            } else {
                this.cart.items.push({...product, quantity });
            }
        }

        getTotalPrice(): number {
            return this.cart.items.reduce((total, item) => total + item.price* item.quantity, 0);

        }

        getCart(): UserCart {
          return this.cart;
        }
        
        emptyCart(): void {
         this.cart.items = [];
        }
    }

    export default Cart;