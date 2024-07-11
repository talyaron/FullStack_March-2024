function handleClick(event) {
    document.body.style.backgroundColor = randomColor();
}

function handleRightClick(event) {
    event.preventDefault();
    alert("oh no, you right-clicked me");
}

//create function that create random color
function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}