// import { Item, ItemCategory } from '../models/Item';
import { renderFooter } from '../views/FooterView';
import { renderHeader } from '../views/HeaderView';
import { renderHomePage } from '../views/HomeView';
import { Cart } from "../models/Cart";
import { getAllItems } from './ItemsController';

const cart: Cart = getCart() ?? new Cart();

export function getCart(): Cart | undefined {
  const  { cartId, userId, items, totalPrice } = JSON.parse(localStorage.getItem('cart') || '{}')
  const cart: Cart = new Cart(cartId, userId, items, totalPrice );
  return cart
}



export function homePage() {
  const allItems = getAllItems();
  renderHeader();
  renderHomePage(cart, allItems);
  renderFooter();
}


