import { addItem } from "../views/coffee-form/addItem";



export function handleAddItem(event: Event): void {
    try {
        console.log('add item',event);
        var addForm = document.getElementById('app') as HTMLDivElement;
        addForm.innerHTML = addItem();
    } catch (error) {
        console.error(error);
    }
}

export function addItemIntoStore(event:Event){
    try {
        console.log('add item inside', event);
        // coffeeForm
    } catch (error) {
        console.error(error);
    }
}
