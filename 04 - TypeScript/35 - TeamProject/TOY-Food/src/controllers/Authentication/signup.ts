import { checkEmailExists, insertUser } from "./indexedDb";
import { User, users } from "../../models/User";
import { renderFooter } from '../../views/FooterView';
import { renderHeader } from '../../views/HeaderView';
import { renderHomePage } from '../../views/HomeView';

export async function handleClickSignUp(event: any): Promise<void> {
    try {
        event.preventDefault()
        const form = event.target;
        const firstName = form.fname.value as string;
        const lastName = form.lname.value as string;
        const email = form.email.value as string;
        const password = form.password.value as string;
        if (email == null || password == null || firstName == null || lastName == null
            || email === "" || password === "" || firstName === "" || lastName === ""
        ) {
            const loginError = document.querySelector('#loginError') as HTMLFormElement;
            loginError.innerHTML = 'Please Fill All The Fields.';
            return
        }
        console.log(email, firstName, lastName, password);
        const user = new User(firstName, lastName, email, password);
        users.push(user);
        localStorage.setItem('CurrentUser', JSON.stringify(user));
        const usersList: User[] = users;
        localStorage.setItem('AllUsers', JSON.stringify(usersList));
        event.target.reset();
        console.log("user", user);
        console.dir("allUsers", users)
        console.log(email, password, user.id);

        //checking if the mail already exists
        const allUsersMail = await checkEmailExists(email);
        if(allUsersMail){
            const loginError = document.querySelector('#loginError') as HTMLFormElement;
            loginError.innerHTML = 'The email already exists.';
            return
        }

        //adding the user to the database
        insertUser(email, password, user.id)
            .then(() => console.log("User added successfully"))
            .catch((error) => console.error(error));

        moveToToyFoodPage();



    } catch (error) {
        console.error(error);
    }
}

export function moveToToyFoodPage(): void {
    const loginForm = document.querySelector('.login-wrapper') as HTMLFormElement;
    const register = document.querySelector('.signup-wrapper') as HTMLDivElement;
    if (loginForm) loginForm.remove();
    if (register) register.remove();

    renderHeader();
    renderHomePage();
    renderFooter();
}