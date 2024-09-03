import './login.scss'
import './buttons.scss' 

export function renderLoginPage(): string {
    let login = `<div class='login-wrapper'>
                    <h5 id="loginError"></h5>
                    <div class="login">
                        <div class="loginForm">
                            <form id="loginForm" >
                                <input name="email" type="text" id="email" placeholder="Email">
                                <input name="password" type="password" id="password" placeholder="Password">
                                <button class="buttons buttons__login" id="login-btn">Login</button>
                            </form>
                            <button class="buttons buttons__register" id="register-btn">SignUp</button>
                        </div>
                    </div>
                 </div>`;
    return login;
}

