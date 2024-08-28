export function renderFooter() {
    const app = document.querySelector("#app");
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.innerHTML = `
            <div class="footer__copyright">
                <p>&copy; 2024 TOY-Food. All rights reserved</p>
            </div>
    `;
    console.log("It's footer");
    app!.appendChild(footer);
}