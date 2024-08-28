//import users from "../data/user.json";
import { renderRegisterOption } from "../views/registrationView";
import { renderNotesPage } from "../views/notesView";
import { users, User } from "../models/userModel";

//Check if user exists
export function handelLogin(ev: Event) {
  try {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    if (form) {
      localStorage.clear();
      const username: string = form.username.value;
      const userExists = users.filter((user) => user.username === username);
      if (userExists.length === 1) {
        //set user in local storage and render notes page
        localStorage.setItem("email", username);
        renderNotesPage();
      } else {
        //render registration page
        renderRegisterOption();
      }
    }
  } catch (error) {
    console.log(error);
  }
}
//sign up new user in User class
export function handelSignUp(ev: Event) {
  try {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    if (!form) {
      throw new Error("registration from not found");
    }

    //check if user exists before signup new user
    const username = form.username.value;
    if (username) {
      const userExists = users.filter((user) => user.username === username);
      if (userExists.length === 0) {
        const firstname = form.firstname.value;
        const lastname = form.lastname.value;
        const username = form.username.value;
        const password = form.password.value;
        const user: User = new User(firstname, lastname, username, password);

        if (user.newUser(user)) {
          //set user in local storage and render notes page
          localStorage.clear();
          localStorage.setItem("email", username);
          renderNotesPage();
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
}
