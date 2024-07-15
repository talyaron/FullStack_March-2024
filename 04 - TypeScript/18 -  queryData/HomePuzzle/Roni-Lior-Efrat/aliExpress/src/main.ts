// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

import { renderItem } from './view/itemView.ts'
import { Item } from './model/items.ts'
import './styles/dist/style.css'
import {addToUserCart,emptyFromUseCart} from  './controllers/item/itesmCont.ts'


export const items: Item[] = 
[ 
    new Item("Item 1",100,"horror",1),
    new Item("Item 2",30,"horror",3),
    new Item("Item 3",200,"horror",10),
    new Item("Item 1",1000,"horror",5)
];
renderItem(items);
//Add events to DOM
// const addItem = document.querySelectorAll('.add').forEach(btn=> btn.addEventListener('click',addToUserCart));
const removeItem = document.querySelectorAll('.remove').forEach(btn=> btn.addEventListener('click',emptyFromUseCart));
