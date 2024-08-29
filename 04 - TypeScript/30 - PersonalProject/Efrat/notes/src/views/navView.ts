import "./styles/nav.scss";
import logo from "./images/logo2.png";
//Return Navbar html tags
export function renderNav():string {
  try {
    const nav = `<div class="navbar">
                    <div class="btn logo" id="home"><a href="#"><img src="${logo}" alt="logo"></a></div>
                    <div class="btn push" id="signup"><a href="#">Sign Up</a></div>
                    <div class="btn" id="login"><a href="#">login</a></div>
                </div>`;
    return nav;
  } catch (error) {
    console.error(error);
    return "";
  }
}
