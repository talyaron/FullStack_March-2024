export function renderHomePage() {
    const app = document.querySelector("#app");
    const home = document.createElement("section");
    home.classList.add("home");
    let html = "";

    // all functions are the services of the home page

    home.innerHTML = html;
    app!.appendChild(home);
}