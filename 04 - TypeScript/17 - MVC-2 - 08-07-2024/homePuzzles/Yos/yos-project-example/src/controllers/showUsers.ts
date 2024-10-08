import { users } from "../models/users/users";
import renderUser from "../views/users/user";
import { showItems } from "./showItems";


export function showUsers(): string {
    try {
        const allUsers = `<div class=container id=container>${users.map(u => renderUser(u)).join('')}
        ${users.map(u => renderUser(u)).join('')}</div>`
        console.log(allUsers);
        return allUsers;
    } catch (error) {
        console.error(error)
        return 'undefined'
    }
}


// Attach event listeners after rendering
document.addEventListener('click', handleClickEvent)

function handleClickEvent(event: Event) {
    // console.log(event)
    const target = event.target as HTMLElement;
    if (target.tagName === 'BUTTON') {
        const id = event.target!.id;
        console.log(id,event)
        const user = users.find(u => u.id === id);
        //showItems(user);
        // const action = target.getAttribute('data-action');
        // const id = target.getAttribute('data-id');
        // if (action && id) {
        //     // console.log('event')
        //     if (action === 'remove') {
        //         handleRemoveItem(action, id);
        //     }
        //     else {
        //         handleAddItem(action, id);
        //     }
        // }
    }
}
