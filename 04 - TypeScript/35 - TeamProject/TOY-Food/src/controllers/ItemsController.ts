import { Item } from "../models/Item";
import { items } from "./HomeController";

export function getAllItems() {
    let allItems = localStorage.getItem('items');
    if (allItems === null || allItems === undefined) {
        localStorage.setItem('items', JSON.stringify(items));
        allItems = localStorage.getItem('items');
    }
    const itemsGlobal: Item[] = JSON.parse(allItems!);
    itemsGlobal.forEach(item => {
        if (items.filter(i => i.name !== item.name).length === 0)
            items.push(item);
    });
    localStorage.setItem('items', JSON.stringify(items));
}