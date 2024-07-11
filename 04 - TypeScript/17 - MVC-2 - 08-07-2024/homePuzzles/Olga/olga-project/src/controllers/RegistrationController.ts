import { customers } from "../DB/customers";
import { Customer } from "../models/customerModel";
// import { renderHeaderCustomerCard } from "../view/Customer";

export const guest = new Customer("", "Guest");

// export function checkLogin(): Customer {
//   const formElement = document.querySelector("#form1") as HTMLFormElement;
//   let currentCustomer: Customer = new Customer("", "");

//   formElement.addEventListener("submit", () => {
//     // e.preventDefault();
//     const formData = new FormData(formElement); 
//     const email = formData.get("email");
//     const password = formData.get("password");
//     const customer = customers.find((customer) => customer.email == email);
//     console.log(customer);
//     if (customer && customer.password == password) {
//       console.log("User already exists");
//       currentCustomer = customer;
//     } else if (customer && customer.password != password) {
//       // alert("Wrong password, try again");
//       currentCustomer = guest;
//     } else {
//       // alert("Create new account?");
//       currentCustomer = guest;
//     }
//     console.log("exit checkLogin", currentCustomer);

//   // return currentCustomer;
//   });
//   console.log("exit2 checkLogin", currentCustomer);

//   return currentCustomer;
// }


export function checkLogin() {
  const formElement = document.querySelector("#form1") as HTMLFormElement;
  let currentCustomer: Customer

  const checkForm = (): Customer => {
    const formData = new FormData(formElement);
    const email = formData.get("email");
    const password = formData.get("password");
    const customer = customers.find((customer) => customer.email == email);
    if (customer && customer.password == password) {
      currentCustomer = customer;
      console.log(typeof currentCustomer);
    }
    console.log(typeof currentCustomer);
    return currentCustomer;
    
  }
  formElement.addEventListener("submit", () => checkForm())
  // checkForm()
}