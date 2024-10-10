export class Client{
    name:string;
    email:string;
    password:string;
    dateOfBirth:Date;

    constructor(name:string,email:string,password:string,dateOFBirth:Date){
        this.name=name;
        this.email=email;
        this.password=password;
        this.dateOfBirth=dateOFBirth;
    }
}
export function handleCreateAccount(event: Event){
    event.preventDefault();
    const yearInput = (document.querySelector('.year') as HTMLInputElement);
    const monthInput = (document.querySelector('.month') as HTMLInputElement);
    const dayInput = (document.querySelector('.day') as HTMLInputElement);
    console.log(yearInput);
    const year = yearInput?.value;
    const month = monthInput?.value;
    const day = dayInput?.value;

    if (year && month && day) {
        const dateOfBirth = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
        // Save date to local storage
        localStorage.setItem('dateOfBirth', dateOfBirth.toISOString());

        console.log(`Date of Birth saved: ${dateOfBirth.toISOString()}`);
    } else {
        console.error('Invalid date');
    }
}

// Add event listener to form submit event
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    const form = document.getElementById('date-birth-form') as HTMLFormElement;
    if (form) {
        form.addEventListener('submit', handleCreateAccount);
    } else {
        console.error("Form not found");
    }
});