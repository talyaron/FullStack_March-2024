import { addItemIntoStore } from '../../controllers/addItem';
import './dist/coffeeForm.css'
import { coffeeForm } from './form';


export function addItem() {
    return `<div class="form-wrapper">
        <div class="wrapper">
            <h1>Add Item</h1>
            <div class="form">
                <form action="" >
                    <div class="name">
                        <label>Item Name : </label>
                        <input type="text" for="name" id="name" placeholder="Enter Item Name">
                    </div>
                    <div class="alt">
                        <label>Alt Name : </label>
                        <input type="text" for="alt" id="alt" placeholder="Enter Alt Name">
                    </div>
                     <div class="price">
                        <label>Price : </label>
                        <input type="number" for="price" id="price" placeholder="Enter price Name">
                    </div>
                    <div class="Image Url">
                        <label>Image Url : </label>
                        <input type="text" for="imageUrl" id="image-url" placeholder="Enter Image Url">
                    </div>
                    <div class="submit">
                        <button id="add-item-submit" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>`
}



// document.addEventListener('submit', handleSubmitEvent)


document.addEventListener('DOMContentLoaded', () => {
    const add = document.querySelector('#add-item-submit');
    if (add) {
        add.addEventListener('click', addItemIntoStore);
    }
})

