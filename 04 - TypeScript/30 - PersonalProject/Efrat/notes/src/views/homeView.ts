import { getElement } from "../general/general";
// <img src="${note}" alt="notes">import note from "./images/note.png";
import { renderNav } from "./navView";
import {handelRenderLogin} from "../views/loginView"
import {renderRegistration} from "../views/registrationView"
import {renderNotesPage} from "../views/notesView"


//Render home page- get navbar and main image
export function renderHomePage() {
  try {
    let element = getElement("#app") as HTMLElement;
    if (element) {
      element.innerHTML =
        renderNav() +
        `<div class="container">
           
        </div>`;
      element = getElement("#login") as HTMLElement;
      if (element) {
        element.addEventListener("click", handelRenderLogin);
      }
      element = getElement("#home") as HTMLElement;
      if (element) {
        element.addEventListener("click", renderNotesPage);
      }
      element = getElement("#signup") as HTMLElement;
      if (element) {
        element.addEventListener("click", renderRegistration);
      }
    }
  } catch (error) {
    console.error(error);
  }
}







