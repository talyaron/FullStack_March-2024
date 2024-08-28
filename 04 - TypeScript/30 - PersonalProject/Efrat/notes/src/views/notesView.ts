import "./styles/notes.scss";
import { getElement } from "../general/general";
import {
  handelExpandNote,
  handelNewNote,
  handelDataRowClick,
  handelHideMenu,
  handelDelete,
  handelEdit,
  handelDueDate,
} from "../controllers/noteController";
import { notes } from "../models/notesModel";
import { users } from "../models/userModel";
import { handelRenderLogin } from "../views/loginView";

export function renderNotesPage() {
  try {
    const email = localStorage.getItem("email");
    if (!email) {
      handelRenderLogin();
    } else {
      let element = getElement(".container") as HTMLElement;
      if (element) {
        const myNotes: string = renderMyNotes();
        const rightClickHtml: string = renderRightClick();
        element.innerHTML = `<div class="note-container">
        <div class="note-new">
              <form id="new-note-form">
                <div class="note-title" id="expand-note">
                 <input type="text" name="notetitle" placeholder="Note title">
                </div>
                <div class="text-note-container note-text-hidden">
                 <textarea rows="4" cols="50" class="note-text" name="notetext" placehoder="Enter your note"></textarea>
                 <input class="submit-note" type="submit" value="Submit">
                </div>
                </div>
              </form>
          </div>
          <div id="my-notes-container">
          <div class="title-search">Title</div>
          <div class="title-search">Description</div>
          <div class="title-search">Created Date</div>
          <div class="title-search">Due Date</div>
          <div class="search"><input class="input-search" type="text" placeholder="Title..."></div>
          <div class="search"><input class="input-search" type="text" placeholder="Description..."></div>
          <div class="search"><input class="input-search" type="date" placeholder="Created Date..."></div>
          <div class="search"><input class="input-search right" type="date" placeholder="Due Date..."></div>
          ${myNotes}
          </div>
          ${rightClickHtml}`;
        element = getElement("#expand-note") as HTMLElement;
        if (element) {
          element.addEventListener("click", handelExpandNote);
          element = getElement("#new-note-form") as HTMLElement;
          if (element) {
            element.addEventListener("submit", handelNewNote);
          }

          ///////Right Menu events//////

          const dataNote = document.querySelectorAll(".noteData");
          if (dataNote) {
            dataNote.forEach((element) => {
              element.addEventListener("contextmenu", handelDataRowClick);
            });
          }
          const rightMenu = getElement("#right-menu") as HTMLElement;
          if (rightMenu) {
            rightMenu.addEventListener("mouseleave", handelHideMenu);
          }
          element = getElement("#delete") as HTMLElement;
          if (element) {
            element.addEventListener("click", handelDelete);
          }
          element = getElement("#edit") as HTMLElement;
          if (element) {
            element.addEventListener("click", handelEdit);
          }
          element = getElement("#due-date") as HTMLElement;
          if (element) {
            element.addEventListener("click", handelDueDate);
          }
        }
      } else {
        throw new Error("class .container not found");
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function renderMyNotes(): string {
  try {
    let notesHtml: string = "";

    const email = localStorage.getItem("email");
    if (!email) {
      throw new Error("no email found in local storage");
    }

    const user = users.find((user) => user.username === email);
    if (!user) {
      throw new Error("user not found");
    }

    user.notes.forEach((noteId) => {
      const note = notes.find((note) => note.id === noteId);
      if (note) {
        notesHtml += `
        <div class="data noteData" id="n-${note.id}">${note.title}</div>
        <div class="data">${note.description}</div>
        <div class="data">${note.createdDate}</div>
        <div class="data right">${note.dueDate}</div>
        `;
      }
    });
    return notesHtml;
  } catch (error) {
    console.error(error);
    return "";
  }
}

function renderRightClick(): string {
  return `<div id="right-menu" class="menu off">
            <div id="delete"><a href="#">Delete</a></div>
            <div id="edit"><a href="#">Edit</a></div>
            <div id="due-date"><a href="#">Due Date</a></div>
          </div>`;
}
