import { OrderedItem } from '../models/coffee-shop'


export const items: OrderedItem[] = []

export function handleSubmitEvent(event: Event): void {
    event.preventDefault();
    try {
        const form = event.target as HTMLFormElement;
        const name: string = form.name.value;
        const type: string = form.type.value;
        const coffee: [] = form.coffee;
        const size: string = form.size;
        const sugar: string = form.sugar.value;
        console.log()
        let coffeeSize: string = '';
        let coffees: string[] = [];
        const featuresArray: string[] = [];

        form.features.forEach(i => { if (i.checked) { featuresArray.push(i.defaultValue!) } })
        coffee.forEach(item => { if (item.checked) { coffees.push(item.defaultValue!) } })
        size.forEach(item => { if (item.checked) { coffeeSize = item.defaultValue! } })
        if (coffees.length > 1) { alert('Please choose only one Coffee'); form.reset(); return; }

        // console.log(`${coffees}, ${name},  ${type}, ${sugar}, ${featuresArray}, ${coffeeSize}`);
        items.push(new OrderedItem(coffees[0], name, type, featuresArray, sugar, coffeeSize, 0))
        // console.log(items);
        form.reset();


    } catch (error) {
        console.error(error);
    }
}

const item1 = {src:"https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg",
                 alt:"coffee",value:"coffee-latte",id:"coffee-latte"}
const item2 = {src:"https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg",
            alt:"coffee",value:"coffee-latte",id:"coffee-latte"}
export const itemsa = [item1,item2]


 function showItems():string{
    const itemss =  `<div name="coffee" class="coffee-images">
                    <div class="img">
                    ${itemsa[1]}  

        <img src="https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg" alt="coffee">
        <input value="coffee-latte" type="checkbox" name="coffee" id="coffee-latte">
    </div>
    <div class="img">
        <img src="https://leitesculinaria.com/wp-content/uploads/2023/03/cappuccino.jpg"
            alt="coffee">
        <input value="coffee-cappuccino" type="checkbox" name="coffee" id="coffee-cappuccino">
    </div>
    <div class="img">
        <img src="https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg"
            alt="coffee">
        <input value="coffee-espresso" type="checkbox" name="coffee" id="coffee-espresso">
    </div>
</div>`
    return items
}