class Menu {
    name: string;
    description: string;
    price: number;
    dateofPurchase: Date;
    id: string;
    edit: boolean;


constructor(name: string, description: string, price: number, dateofPurchase: Date){
    this.name = name;
    this.description = description;
    this.id = `id-${crypto.randomUUID()}`;
    this.price = price;
    this.dateofPurchase = dateofPurchase;
    this.edit = false;

}

}

const menu: Menu[] =[];

function handleAddMenu(ev: Event): void {
ev.preventDefault();
try {
    const form = ev.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const description = (form.elements.namedItem('description') as HTMLInputElement).value;
    const price = parseFloat((form.elements.namedItem('price') as HTMLInputElement).value);
    const date = new Date((form.elements.namedItem('date') as HTMLInputElement).value);
    
    menu.push(new Menu(name, description, price, date));
    renderMenuList(menu);
    
    form.reset();
} catch (error) {
    console.error(error)
}
}

function renderMenuList(menuList: Menu[]): void {
    try {
        const menuListElement = document.getElementById('menuList');
        if (!menuListElement) {
            throw new Error('Menu list element not found');
        }

        let html = '<ul>';
        menuList.forEach(menuItem => {
            html += `<li id="${menuItem.id}">
                <strong>Name:</strong> ${menuItem.edit ? `<input class="name-input" type="text" value="${menuItem.name}" />` : menuItem.name}
                <strong>Description:</strong> ${menuItem.edit ? `<input class="description-input" type="text" value="${menuItem.description}" />` : menuItem.description}
                <strong>Price:</strong> ${menuItem.edit ? `<input class="price-input" type="number" value="${menuItem.price}" step="0.01" />` : `$${menuItem.price.toFixed(2)}`}
                <strong>Date Added:</strong> ${menuItem.dateofPurchase.toDateString()}
                <button onclick="handleDeleteMenu('${menuItem.id}')">Delete</button>
                <button onclick="handleEditMenu('${menuItem.id}')">${menuItem.edit ? 'Save' : 'Edit'}</button>
            </li>`;
        });
        html += '</ul>';

        menuListElement.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

function handleDeleteMenu(id: string): void {
    try {
        const index = menu.findIndex(menuItem => menuItem.id === id);
        if (index === -1) throw new Error('Menu not found');
        menu.splice(index,1);
        renderMenuList(menu);

    } catch (error) {
        console.error(error);
    }
}


function handleEditMenu(id: string): void {
    try {
        const menuItem = menu.find(item => item.id === id);
        if (!menuItem) throw new Error('Menu not found');

        if (menuItem.edit) {
         
            const listItemElement = document.getElementById(id) as HTMLElement;

            menuItem.name = (listItemElement.querySelector('.name-input') as HTMLInputElement).value;
            menuItem.description = (listItemElement.querySelector('.description-input') as HTMLInputElement).value;
            menuItem.price = parseFloat((listItemElement.querySelector('.price-input') as HTMLInputElement).value);
        }
        menuItem.edit = !menuItem.edit;
        renderMenuList(menu);
    } catch (error) {
        console.error(error);
    }
}


function filterAndSortMenu() {
    const dateInput = (document.getElementById('filterDate') as HTMLInputElement)?.value;
    const date = new Date(dateInput);

 
    const filteredMenu = menu.filter(item => 
        item.dateofPurchase.toDateString() === date.toDateString()
    );

    renderMenuList(filteredMenu);
}

document.getElementById('menuForm')?.addEventListener('submit', handleAddMenu);


