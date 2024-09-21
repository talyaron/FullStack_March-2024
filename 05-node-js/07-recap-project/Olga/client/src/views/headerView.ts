export function renderHeader(home?: boolean) {
  const header = `
        <header>
            <div class="logo-container">
                ${home ? "" : '<img class="logo" src="./src/images/small-logo.png" alt="logo">'}
                <h1>Happy Tails Shelter</h1>
            </div>
            <nav>
                ${home ? "" : '<a id= "nav-home" href="#">Home</a>'}
                <a id= "nav-events" href="#events">Events</a>
                <a id= "nav-pets" href="#our-pets">Our Pets</a>
                <a id= "nav-contact" href="#contact">Contact</a>
            </nav>
            <button id="loginBtn">Login</button>
        </header>
    `;
  return header;
}
