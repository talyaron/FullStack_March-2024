class game{
        id: String;
        name: String;
        price: Number;
        imageURL: String;
        genre: String;
        cart: Boolean;
        owned: Boolean;

        constructor(id:string,name:string,price:number,imageURL:string,genre:String,cart:boolean,owned:boolean){
            this.id=id;
            this.name=name;
            this.price=price;
            this.imageURL=imageURL;
            this.genre=genre;
            this.cart=cart;
            this.owned=owned;
        }

}
function renderSignInPage(){
let root=document.querySelector('#app') as HTMLDivElement
const html = ` <div class="window">
            <div class="logo">
                <img id="logo" src="../Global/epic.png" alt="Epic Games logo">
            </div>
            <div class="sign-in">
                <form id="signin-form">
                <h4 id="sign-in">Sign In</h4>
                <input id="email" type="email" placeholder="Email Address" required />
                <input id="password" type="password" placeholder="Password" required />
                <label id="label">Forgot password?</label>
                <button type="submit" id="signin">SIGN IN</button>
                </form>
                <fieldset class="grid-images">
                <legend>or sign in with</legend>
                <div class="grid-container">
                    <div class="grid-item xbox">
                        <img src="./images/xbox.png" alt="xbox logo">
                    </div>
                    <div class="grid-item playstation">
                        <img src="./images/playstation.png" alt="playstation logo">
                    </div>
                    <div class="grid-item nintendo">
                        <img src="./images/nintendo.png" alt="nintendo logo">
                    </div>
                    <div class="grid-item steam">
                        <img src="./images/steam.png" alt="steam logo">
                    </div>
                    <div class="grid-item facebook">
                        <img src="./images/facebook.png" alt="facebook logo">
                    </div>
                    <div class="grid-item google">
                        <img src="./images/google.png" alt="google logo">
                    </div>
                    <div class="grid-item apple">
                        <img src="./images/apple.png" alt="apple logo">
                    </div>
                    <div class="grid-item lego">
                        <img src="./images/lego.png" alt="lego logo">
                    </div>
                </div>
            </fieldset>
            <button id="accountdate">Create account</button>
            </div>
            <div class="images">

            </div>
        </div>`;
        root.innerHTML = html;
        const form = document.querySelector('#signin-form') as HTMLFormElement;
        if (form) {
            form.addEventListener('submit', handleLogIn);
        } else {
            console.error("Create Account button not found");
        }

        const accountdate = document.querySelector('#accountdate') as HTMLButtonElement;

    if (accountdate) {
        accountdate.addEventListener('click', renderCreateAccountPageDate);
    } else {
        console.error("Create Account button not found");
    }
        
        
}
async function handleLogIn(){
    const emailInput = (document.querySelector('#email') as HTMLInputElement);
    const passwordInput = (document.querySelector('#password') as HTMLInputElement);
    const email = emailInput?.value;
    const password = passwordInput?.value;
    if (email && password ) {
        
        const loginData = {
            email,
            password,
        };

        try {
            const response = await fetch('http://localhost:3000/client/login', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            if (!response.ok) {
                throw new Error('Error creating account');
            }

            const result = await response.json();
            console.log('Account created successfully', result);
            renderCreatedSuccesss();

            // Redirect or perform actions after successful account creation
        } catch (error) {
            console.error('Error:', error);
        }
    } else {
        console.error('Invalid form data');
    }
    
}
function renderCreateAccountPageDate(){
    let root=document.querySelector('#app') as HTMLDivElement
    const html = ` <div class="window">
            <div class="logo">
                <img id="logo" src="../Global/epic.png" alt="Epic Games logo">
            </div>
            <div class="date-birth">
                <form id="date-birth-form">
                <h4 id="create-account">Create Account</h4>
                <p id="grey">Please enter your date of birth. This is to help you have a safe and fun experience whatever your age.</p>
                <div class="inputs">
                <input class="year" type="number" placeholder="Year" required  max="2024"/>
                <input class="month" type="number" placeholder="Month" required max="12"/>
                <input class="day" type="number" placeholder="Day" required max="31"/>
            </div>
                <button id="submit" type="submit" value="continue">CONTINUE</button>
                </form>
            <label id="grey">Already have an account?</label><a href="../sign-in/signin.html"><label id="signin"> Sign in</label></a>
            </div>
        </div>`;
        root.innerHTML = html;
        const form = document.querySelector('#date-birth-form') as HTMLFormElement;

    if (form) {
        form.addEventListener('submit', renderCreateAccount);
    } else {
        console.error("Date of birth form not found");
    }
}
function renderCreateAccount(){
    let root=document.querySelector('#app') as HTMLDivElement
    const yearInput = (document.querySelector('.year') as HTMLInputElement);
    const monthInput = (document.querySelector('.month') as HTMLInputElement);
    const dayInput = (document.querySelector('.day') as HTMLInputElement);
    const year = yearInput?.value;
    const month = monthInput?.value;
    const day = dayInput?.value;

    if (year && month && day) {
        const dateOfBirth = new Date(Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day)));
        // Save date to local storage
        localStorage.setItem('dateOfBirth', dateOfBirth.toISOString());}
    const html = ` <div class="window">
            <div class="logo">
                <img id="logo" src="../Global/epic.png" alt="Epic Games logo">
            </div>
            <div class="other-inputs">
                <form id="other-inputs-form">
                <h4 id="create-account">Create Account</h4>
                <div class="inputs">
                <input class="country" type="string" placeholder="Country" required />
                <input class="email" type="email" placeholder="Email Address" required />
                <div id="names">
                <input class="name" type="string" placeholder="First Name" required />
                <input class="lastName" type="string" placeholder="Last Name" required />
                </div>
                <input class="displayName" type="string" placeholder="Display Name" required />
                <input class="password" type="string" placeholder="Password" required />
            </div>
                <button id="submit" type="submit" >CONTINUE</button>
                </form>
            <label id="grey">Already have an account?</label><a href="../sign-in/signin.html"><label id="signin"> Sign in</label></a>
            </div>
        </div>`;
        root.innerHTML = html;

        const form = document.querySelector('#other-inputs-form') as HTMLFormElement;

        if (form) {
            form.addEventListener('submit', handleCreateAccount);
        } else {
            console.error("Form not found");
        }
}
function renderCreatedSuccesss(){
    let root=document.querySelector('#app') as HTMLDivElement
    const html = ` <div class="window">
            <div class="logo">
                <img id="logo" src="../Global/epic.png" alt="Epic Games logo">
            </div>
            <div class="goto-sigin">
                <h4 id="create-account">You Have Successfully Created An Acoount</h4>
            </div>
                <button id="signin" type="button" >Go To Sign-In</button>
                </form>
            </div>
        </div>`;
        root.innerHTML = html;
        const signin = document.querySelector('#signin') as HTMLButtonElement;

        if (signin) {
            signin.addEventListener('click', renderSignInPage);
        } else {
            console.error("Create Account button not found");
        }

}

function handlePageRender(){

}
async function handleCreateAccount(event: Event){
    event.preventDefault();
    const countryInput = document.querySelector('.country') as HTMLInputElement;
    const emailInput = document.querySelector('.email') as HTMLInputElement;
    const firstNameInput = document.querySelector('.name') as HTMLInputElement;
    const lastNameInput = document.querySelector('.lastName') as HTMLInputElement;
    const displayNameInput = document.querySelector('.displayName') as HTMLInputElement;
    const passwordInput = document.querySelector('.password') as HTMLInputElement;
    const dateOfBirthStr = localStorage.getItem('dateOfBirth');
    const dateOfBirth = dateOfBirthStr ? new Date(dateOfBirthStr) : null;
    // Extract values from inputs
    const country = countryInput?.value;
    const email = emailInput?.value;
    const firstName = firstNameInput?.value;
    const lastName = lastNameInput?.value;
    const displayName = displayNameInput?.value;
    const password = passwordInput?.value;

    // Validate the inputs (ensure all are filled)
    if (dateOfBirth && country && email && firstName && lastName && displayName && password) {
        
        const clientData = {
            firstName,
            lastName,
            email,
            password,
            dateOfBirth,
            country,
            displayName
        };

        try {
            const response = await fetch('http://localhost:3000/client/add-client', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(clientData)
            });

            if (!response.ok) {
                throw new Error('Error creating account');
            }

            const result = await response.json();
            console.log('Account created successfully', result);
            renderCreatedSuccesss();

            // Redirect or perform actions after successful account creation
        } catch (error) {
            console.error('Error:', error);
        }
    } else {
        console.error('Invalid form data');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    // Selecting the "Sign-in" button and adding an event listener
    const signin = document.querySelector('#signin') as HTMLButtonElement;

    if (signin) {
        signin.addEventListener('click', renderSignInPage);
    } else {
        console.error("Sign-in button not found");
    }
});
