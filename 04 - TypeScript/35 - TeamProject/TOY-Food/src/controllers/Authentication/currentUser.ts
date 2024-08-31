import { items, Item } from "../../models/FoodItem";
import { User } from "../../models/User";


export function getCurrentUser(email?: string): User | null {
    const currentUserData = localStorage.getItem('CurrentUser');

    if (!currentUserData || currentUserData === "null") {
        const users: User[] = getAllUsers();
        const user: User | undefined = users.find(user => user.email === email);
        if (!user) return null;
        localStorage.setItem('CurrentUser', JSON.stringify(user))
        return user;
    }

    // Parse and rehydrate the current user
    const parsedUser = JSON.parse(currentUserData);

    // Reinstantiate as a User
    const currentUser = new User(parsedUser.firstName, parsedUser.lastName, parsedUser.email, parsedUser.password, parsedUser.id);

    // Rehydrate the task list and comments
    currentUser.cart = parsedUser.map((cartData: any) => {
        const item = new Item(cartData.name,cartData.price, cartData.src,cartData.desc
            , cartData.inStock, cartData.category, cartData.categoryId, cartData.id,
             cartData.quantity);

        return item;
    });

    return currentUser;
}


export function getAllUsers(): User[] {
    const usersString = localStorage.getItem('AllUsers');
    if (!usersString) return [];

    // Parse and rehydrate the users
    const parsedUsers = JSON.parse(usersString);

    // Reconstruct the User and Task objects
    return parsedUsers.map((userData: any) => {
        const user = new User(userData.firstName, userData.lastName,
            userData.email,userData.password, userData.id);

        // Rehydrate the task list and comments
        user.cart = userData.cart.map((cartData: any) => {
            const item = new Item(cartData.name,cartData.price, cartData.src,cartData.desc
                , cartData.inStock, cartData.category, cartData.categoryId, cartData.id,
                 cartData.quantity);
            return item;
        });

        return user;
    });
}

export function addUser(firstName: string, lastName: string, email: string, password: string): void {
    const usersString = localStorage.getItem('AllUsers');
    const users: User[] = usersString ? JSON.parse(usersString) : [];

    // Create a new user and add to users array
    const user = new User(firstName, lastName, email, password);
    users.push(user);

    // Store the updated users array in localStorage
    localStorage.setItem('AllUsers', JSON.stringify(users));
}
