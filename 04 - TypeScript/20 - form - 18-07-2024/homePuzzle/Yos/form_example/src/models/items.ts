export interface Item {
    src: string;
    alt: string;
    value: string;
    id: string;
}

const latte: Item = {
    src: "https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg",
    alt: "latte",
    value: "coffee-latte",
    id: "coffee-latte"
}
const cappuccino: Item = {
    src: "https://leitesculinaria.com/wp-content/uploads/2023/03/cappuccino.jpg",
    alt: "cappuccino",
    value: "coffee-cappuccino",
    id: "coffee-cappuccino"
}
const espresso: Item = {
    src: "https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg",
    alt: "espresso",
    value: "coffee-espresso",
    id: "coffee-espresso"
}

export const coffees: Item[] = [latte, cappuccino, espresso]