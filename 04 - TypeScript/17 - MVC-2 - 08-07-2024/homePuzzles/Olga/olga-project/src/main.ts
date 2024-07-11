import "./style.scss";
// import './view/header.scss'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'
import { renderHeader } from "./view/Header.ts";
import { Customer } from "./models/customerModel.ts";

const guest = new Customer("", "Guest");
let currentCustomer: Customer = guest;
let header = renderHeader(currentCustomer);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  ${header}
`;

const dialog = document.querySelector("#dialog") as HTMLDialogElement;
document.querySelector("#openDialog").onclick = function () {
  dialog.showModal();

};
document.querySelector("#closeDialog").onclick = function () {
  if (email.validity.valid && password.validity.valid) {
    dialog.close();
  }
};


