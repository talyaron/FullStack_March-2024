import { Item, ItemCategory } from "../models/Item";



export function addItem(div: HTMLDivElement): void {
    if (!div) {
        throw new Error('add item div not found');
    }
    const item :Item = {
        
    }
    const newItem = `
        <div class="form-wrapper">

            <div class="wrapper">

                <h1>Add New Item</h1>   

                <div class="form">

                    <form id="addItemForm">
                        <div class="name">      
                            <label>Name : </label>
                            <input type="text" for="name" id="name" placeholder="Enter Item Name">
                        </div>

                        <div class="price">
                            <label>Price : </label>
                            <input type="number" for="price" id="price" placeholder="Enter Item Price">
                        </div>  

                        <div class="pic">      
                            <label>Picture Url : </label>
                            <input type="text" for="pic" id="pic" placeholder="Enter Picture Url">
                        </div>

                        <div class="category">
                            <label>Category : </label>
                            <select name="category" id="category">
                            ${Object.values(ItemCategory).map(category => 
                                `<option value="${category}">${category}</option>`)
                                .join('')}
                            </select>

                        <div class="submit">
                            <input type="submit" value="Add Item">

                        </div>
                    </form>

                </div>

            </div>

        </div>
    
    `;

    div.innerHTML = newItem;
}
