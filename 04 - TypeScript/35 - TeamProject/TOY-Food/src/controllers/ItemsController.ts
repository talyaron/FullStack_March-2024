import { Item } from "../models/Item";
import { items } from "./HomeController";

export function getAllItems() : Item[] {
    let allItems = localStorage.getItem('items');
    if (allItems === null || allItems === undefined) {
        debugger
        allItems = initializeItems();
    }
    const itemsGlobal: Item[] = JSON.parse(allItems!);
    itemsGlobal.forEach(item => {
        if (items.filter(i => i.name !== item.name).length === 0)
            items.push(item);
    });
    localStorage.setItem('items', JSON.stringify(items));
    return itemsGlobal;
}

export function addGlobalItem(item: Item): void {
    let allItems = localStorage.getItem('items');
    if (allItems === null || allItems === undefined) {
        allItems = initializeItems();
    }
    const itemsGlobal: Item[] = JSON.parse(allItems!);
    itemsGlobal.push(item);
    localStorage.setItem('items', JSON.stringify(itemsGlobal));
}

function initializeItems(): string {
    localStorage.setItem('items', JSON.stringify(items));
    const allItems = localStorage.getItem('items') as string;
    return allItems;
}
