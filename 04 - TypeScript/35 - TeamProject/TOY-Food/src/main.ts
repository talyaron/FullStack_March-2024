import './styles/main.scss';
import { renderHeader } from './views/HeaderView';
import { renderFooter } from './views/FooterView';
import { renderHomePage } from './views/HomeView';
import { Cart } from './models/Cart';
import { Item, ItemCategory } from './models/Item';
import {items} from './controllers/HomeController'


const cart = new Cart();

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderHomePage(cart, items); 
  renderFooter();
});
