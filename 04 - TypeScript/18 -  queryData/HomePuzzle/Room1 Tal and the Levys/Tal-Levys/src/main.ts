import { items } from "./models/itemsModel";
import { cartDiv, itemsDiv, writeCartToDOM, writeItemsToDOM } from "./views/itemsView";
import './dist/styles.css';
import { customers } from "./models/customerModel";
writeItemsToDOM(items, itemsDiv);
writeCartToDOM(customers[0].myCart,cartDiv);

