function handleClick(event) {
    document.body.style.backgroundColor = randomColor();
}

function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
