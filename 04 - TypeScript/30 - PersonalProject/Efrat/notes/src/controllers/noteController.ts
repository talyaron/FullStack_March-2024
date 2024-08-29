import { getElement } from "../general/general";
import { Note } from "../models/notesModel";
import { users } from "../models/userModel";
import { renderNotesPage } from "../views/notesView";

export function handelExpandNote() {
  try {
    let element = getElement(".note-text-hidden") as HTMLElement;
    if (element) {
      element.classList.remove("note-text-hidden");
      element.classList.add("note-text-show");
    } else {
      throw new Error("class element note-text-hidden not found");
    }
  } catch (error) {}
}

//add new note
export function handelNewNote(ev: Event) {
  try {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    if (form) {
      const notetitle = form.notetitle.value;
      const notetext = form.notetext.value;
      if (notetext || notetitle) {
        const status = "open";
        const note: Note = new Note(notetitle, notetext, status);
        if (note.newNote(note)) {
          const email = localStorage.getItem("email");
          if (!email) {
            throw new Error("email in local storage not found");
          }
          const user = users.find((user) => user.username === email);
          if (!user) {
            throw new Error("user not found");
          }
          if (user.addNote(note.id, user)) {
            renderNotesPage();
          }
        }
      }
    } else {
      throw new Error("form not found");
    }
  } catch (error) {
    console.error(error);
  }
}

export function handelDataRowClick(ev: Event) {
  ev.preventDefault();

  const element = ev.currentTarget as HTMLElement;
  const menu = getElement(".menu");
  if (menu) {
    menu.style.top = `${ev.clientY - 20}px`;
    menu.style.left = `${ev.clientX - 20}px`;

    menu.classList.remove("off");
    element.classList.add("on");
    const elementId = element.id;
    menu.id = elementId; //assign id to menu div
  }
}

export function handelHideMenu(ev: Event) {
  ev.preventDefault();
  const element = ev.currentTarget as HTMLElement;
  const menu = getElement(".menu");
  if (menu) {
    menu.classList.remove("on");
    element.classList.add("off");
  }
}

export function handelDelete() {
  try {
    const element = getElement(".menu");
    if (element) {
      
      const noteId = element.id.slice(2,element.id.length);
      const username = localStorage.getItem("email");
      if(!username) throw new Error("username not in local storage");
      
      const user = users.find(user=>user.username === username);
      if (user){
        user.deleteNote(noteId,user);
        renderNotesPage();
      }

    } else {
      throw new Error("element menu not found");
    }
  } catch (error) {
    console.log(error);
  }
}

export function handelEdit() {
  try {
    const element = getElement(".menu");
    if (element) {
      console.log(element.id);
    } else {
      throw new Error("element menu not found");
    }
  } catch (error) {
    console.log(error);
  }
}

export function handelDueDate() {
  try {
    const element = getElement(".menu");
    if (element) {
      console.log(element.id);
    } else {
      throw new Error("element menu not found");
    }
  } catch (error) {
    console.log(error);
  }
}
