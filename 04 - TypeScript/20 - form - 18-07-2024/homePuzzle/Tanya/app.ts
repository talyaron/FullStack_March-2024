class CoffeeOrder {
    name: string;
    type: string;
    size: string;
    milk: string;
    sugar: string;
    sugarAmount: number;
    extra: string[];
    price: number;
    metformin?: string;

    constructor(name: string, type: string, milk: string, sugar: string, sugarAmount: number, size: string, extra: string[], price: number, metformin?: string) {
        this.name = name;
        this.type = type;
        this.milk = milk;
        this.sugar = sugar;
        this.sugarAmount = sugarAmount;
        this.size = size;
        this.extra = extra;
        this.price = price;
        this.metformin = metformin;
    }
}



const coffeeOrders: CoffeeOrder[] = [];
const milkPrices: { [key: string]: number } = {
    cow: 0,
    lactoseFree: 3,
    soy: 3,
    almond: 3,
    oat: 3
};
const sizePrices: { [key: string]: number } = {
    small: 3,
    medium: 5,
    large: 7
};
const extraPrices: { [key: string]: number } = {
    whippedCream: 1
};
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('milkType')!.addEventListener('change', updateTotalPrice);
    const sizeElements = document.getElementsByName('size');
    for (let i = 0; i < sizeElements.length; i++) {
        sizeElements[i].addEventListener('change', updateTotalPrice);
    }
    const extraElements = document.getElementsByName('extra');
    for (let i = 0; i < extraElements.length; i++) {
        extraElements[i].addEventListener('change', updateTotalPrice);
    }
    const sugarAmountElement = document.getElementById('sugarAmount') as HTMLSelectElement;
    if (sugarAmountElement) {
        sugarAmountElement.addEventListener('change', handleSugarAmountChange);
    }
});

function updateTotalPrice() {
    let totalPrice = 0;
    const milkType = (document.getElementById('milkType') as HTMLSelectElement).value;
    const sizeElements = document.getElementsByName('size');
    let selectedSize: HTMLInputElement | null = null;
    for (let i = 0; i < sizeElements.length; i++) {
        if ((sizeElements[i] as HTMLInputElement).checked) {
            selectedSize = sizeElements[i] as HTMLInputElement;
            break;
        }
    }
    const extraElements = document.getElementsByName('extra');
    const selectedExtras: HTMLInputElement[] = [];
    for (let i = 0; i < extraElements.length; i++) {
        if ((extraElements[i] as HTMLInputElement).checked) {
            selectedExtras.push(extraElements[i] as HTMLInputElement);
        }
    }
    if (milkPrices[milkType] !== undefined) {
        totalPrice += milkPrices[milkType];
    }
    if (selectedSize) {
        totalPrice += sizePrices[selectedSize.value];
    }
    selectedExtras.forEach(extra => {
        if (extraPrices[extra.value] !== undefined) {
            totalPrice += extraPrices[extra.value];
        }
    });
    document.getElementById('totalPrice')!.textContent = totalPrice.toFixed(2);
}
function handleAddCoffeeOrder(ev: Event) {
    try {
        ev.preventDefault();
        const form = ev.target as HTMLFormElement;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const type = (form.elements.namedItem('coffeeType') as RadioNodeList).value;
        const milk = (form.elements.namedItem('milkType') as HTMLSelectElement).value;
        const sugar = (form.elements.namedItem('sugarType') as HTMLSelectElement).value;
        const sugarAmount = sugar !== 'noSugar' ? parseFloat((form.elements.namedItem('sugarAmount') as HTMLSelectElement).value) : 0;
        const metformin = sugarAmount === 4 ? (form.elements.namedItem('metformin') as RadioNodeList).value : undefined;
        const sizeElements = form.elements.namedItem('size') as RadioNodeList;
        let size = '';
        for (let i = 0; i < sizeElements.length; i++) {
            const sizeElement = sizeElements[i] as HTMLInputElement;
            if (sizeElement.checked) {
                size = sizeElement.value;
                break;
            }
        }
        const extras: string[] = [];
        for (let i = 0; i < form.elements.length; i++) {
            const element = form.elements[i] as HTMLInputElement;
            if (element.type === "checkbox" && element.checked) {
                extras.push(element.value);
            }
        }
        let price = 0;
        if (milkPrices[milk] !== undefined) {
            price += milkPrices[milk];
        }
        if (sizePrices[size] !== undefined) {
            price += sizePrices[size];
        }
        extras.forEach(extra => {
            if (extraPrices[extra] !== undefined) {
                price += extraPrices[extra];
            }
        });
        const coffeeOrder = new CoffeeOrder(name, type, milk, sugar, sugarAmount, size, extras, price, metformin);
        coffeeOrders.push(coffeeOrder);
        localStorage.setItem('coffeeOrders', JSON.stringify(coffeeOrders));
        displayReceipt(coffeeOrder);
        form.reset();
        document.getElementById('order-container')!.style.display = 'none';
        document.getElementById('receipt')!.style.display = 'block';
    } catch (e) {
        console.error("Error:", e);
    }
}
function displayReceipt(order: CoffeeOrder) {
    const orderSummary = document.getElementById('orderSummary')!;
    orderSummary.innerHTML = `
        <p>Name: ${order.name}</p>
        <p>Coffee Type: ${order.type}</p>
        <p>Milk: ${order.milk}</p>
        <p>Sugar: ${order.sugar}</p>
        <p>Sugar Amount: ${order.sugarAmount} spoons</p>
        <p>Size: ${order.size}</p>
        <p>Extras: ${order.extra.join(', ')}</p>
        <p>Total Price: $${order.price.toFixed(2)}</p>
        ${order.metformin ? `<p>Metformin Syringe: ${order.metformin}</p>` : ''}
    `;
}

function handleSugarTypeChange(ev: Event) {
    const sugarType = (ev.target as HTMLSelectElement).value;
    const sugarAmountContainer = document.getElementById('sugarAmountContainer')!;
    if (sugarType === 'noSugar') {
        sugarAmountContainer.style.display = 'none';
    } else {
        sugarAmountContainer.style.display = 'block';
    }
}

function handleSugarAmountChange(ev: Event) {
    const sugarAmount = parseFloat((ev.target as HTMLSelectElement).value);
    const metforminContainer = document.getElementById('metforminContainer')!;
    if (sugarAmount === 4) {
        metforminContainer.style.display = 'block';
    } else {
        metforminContainer.style.display = 'none';
    }
}
