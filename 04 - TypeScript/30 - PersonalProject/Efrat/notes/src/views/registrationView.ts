import "./styles/login.scss"
import {getElement} from "../general/general"
import { handelSignUp } from "../controllers/signingController";


export function renderRegistration() {
    try {
      let element = getElement(".container") as HTMLElement;
      if (element) {
        element.innerHTML = `<div class="login-container">
        <div class="registration">
              <form id="registration">
                  <div class="title">Registration Form</div>
                  <div class="row"><div class="label"><label for="firstname">First Name</label></div><div class="input-field"><input type="text" name="firstname"></div></div>
                  <div class="row"><div class="label"><label for="lastname">Last Name</label></div><div class="input-field"><input type="text" name="lastname"></div></div>
                  <div class="row"><div class="label"><label for="email">Email</label></div><div class="input-field"><input type="email" name="username" required></div></div>
                  <div class="row"><div class="label"><label for="password">Password</label></div><div class="input-field"><input type="password" name="password" id="password"></div></div>
                  <div class="submit"><input type="submit" value="Sign Up"></div>
              </form>
          </div>`;
        element = getElement("#registration") as HTMLElement;
        if (element) element.addEventListener("submit", handelSignUp);
      }
    } catch (error) {
      console.log(error);
    }
  }

  export function renderRegisterOption() {
    try {
      let element = getElement("#register") as HTMLElement;
      if (element) {
        element.innerHTML = `<p>User not found, if want to sign up please <a href="#" id="register-link">click here</a></p>`;
        element = getElement("#register-link") as HTMLElement;
        if (element) {
          element.addEventListener("click", renderRegistration);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }