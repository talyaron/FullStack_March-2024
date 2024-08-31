export function renderFooter() {
    const footer = document.querySelector("#footer");
    if (!footer) {
        console.error('No element with id "footer" found.');
        return;
    }

    footer.innerHTML = `
        <div class="footer">
            <p>© 2024 TOY-Food. All rights reserved.</p>
        </div>
    `;
}
