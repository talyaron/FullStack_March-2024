import { Customer } from "../models/customerModel";
import { customers } from "../DB/customers";

export const guest = new Customer("", "Guest");
export let currentCustomer: Customer = checkLogin("", "");

export function checkLogin(email: string, password: string): Customer {
    return customers.find((c: Customer) => c.email === email && c.password === password)
        ? customers.find((c: Customer) => c.email === email && c.password === password)!
        : guest;
}