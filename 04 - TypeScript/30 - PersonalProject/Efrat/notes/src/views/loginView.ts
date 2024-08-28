import "./styles/login.scss";
import { handelLogin } from "../controllers/signingController";
import { getElement } from "../general/general";

//Display login form
export function handelRenderLogin() {
  try {
    let element = getElement(".container") as HTMLElement;
    if (element) {
      element.innerHTML = `<div class="login-container">
            <div class="login">            
              <form id="login-form">  
                  <div class="title">Login</div>                
                  <div class="row"><div class="label"><label for="username">User Name</label></div><div class="input-field"><input type="email" name="username"></div></div>
                  <div class="row"><div class="label"><label for="password">Password</label></div><div class="input-field"><input type="password" name="password" id="password"></div></div>
                  <div class="submit"><input type="submit" value="Login"></div>
                  <div id="register"></div>
              </form>
            </div></div>`;
      element = getElement("#login-form") as HTMLElement;
      element.addEventListener("submit", handelLogin);
    }
  } catch (error) {
    console.log(error);
  }
}
