import { items } from "../../main";
import { cart } from "../../model/cart";
import { Item,items } from "../../model/items";
import { renderItem } from "../../view/itemView";

export function addToUserCart(id:string) {
  try {
    //check if quantity is greater than 0
    console.log("id",id);
    // const itemBuy = items.filter(
    //   (item) => item.id === this.parentNode.id && item.quantity > 0
    // );
    // if (itemBuy.length) {
    //   //add item to cart and remove quantity from inventory
    //   const cartItemsCntr: number = cart.length - 1;
    //   cart[cartItemsCntr].addItemToCart(itemBuy);
    //   itemBuy[0].reduceQuantity();
    //   //render page
    //   renderItem(items);

    //   console.log(
    //     `Cart : ${cart[cartItemsCntr].charge} and ${itemBuy[0].quantity}`
    //   );
    // } else {
    //   console.log("item not available");
    // }
  } catch (error) {
    console.error(error);
  }
}

export function emptyFromUseCart(this: HTMLElement) {
  try {
    debugger;
    let cartItemId: string;
    let itemToUpdate: Item[];
    //add quantity to items
    cart.forEach((cartItem) => {
      for (let i = 0; i < cartItem.itemId.length; i++)
        cartItemId = cartItem.itemId[i];
        itemToUpdate = items.filter((item) => item.id === cartItemId);
        itemToUpdate.forEach(f=>f.addQuantity());

    });
    console.log(cart);
    //clear cart
    // cart.length = 0;
    //render screen
    renderItem(items);
  } catch (error) {
    console.error(error);
  }
}
