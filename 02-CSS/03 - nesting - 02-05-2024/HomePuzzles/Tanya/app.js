/******************  Handle comment form submission ******************/
document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('commentForm');
    const commentsSection = document.querySelector('.comments');
    const noComments = document.createElement('p');
    noComments.textContent = "Oh no, there are no comments yet :(";
    commentForm.addEventListener('submit', function (e) {
        e.preventDefault(); 
        const commenterName = document.getElementById('commenterName').value;
        const commentItself = document.getElementById('comment').value;
        const commentNew = document.createElement('div');
        commentNew.classList.add('comment');
        commentNew.innerHTML = `<strong class="commenterName">${commenterName}</strong>: </br> ${commentItself}</br></br>`;
        /* If there are no comments yet */
        if (commentsSection.contains(noComments)) {
            commentsSection.removeChild(noComments);
        }
        commentsSection.appendChild(commentNew);
        this.reset();
    });
    commentsSection.appendChild(noComments);
});

/*************** Image popup ******************/

function getCursorPosition(event) {
    var x = event.clientX;
    var y = event.clientY;
    return { x: x, y: y };
}

function showPopup(event) {
    var popup = document.getElementById("popup");
    var cursorPosition = getCursorPosition(event);
    popup.style.display = "block";
    popup.style.top = (cursorPosition.y + 10) + "px";
    popup.style.left = (cursorPosition.x + 10) + "px";
}

function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

document.addEventListener("click", function(event) {
    if (event.target.id === "tanya") {
        showPopup(event); 
    } else {
        hidePopup(); 
    }
});

/****************** NAVIGATION BAR ******************/
var travelLink = document.querySelector('nav ul li:nth-child(3) a');
var homeLink = document.querySelector('nav ul li:first-child a');
var active1 = document.querySelector('.active1');
var active2 = document.querySelector('.active2');

travelLink.addEventListener('click', switchArticle);
homeLink.addEventListener('click', switchArticle);

/* Switch between articles */
function switchArticle(event) {
    event.preventDefault();
    var article1 = document.querySelector('.article1');
    var article2 = document.querySelector('.article2');
    /* Check if the clicked link is already active */
    if ((event.target.textContent === 'Travel' && article2.style.display === 'block') ||
        (event.target.textContent === 'Home' && article1.style.display === 'block')) {
        return; 
    }
    if (article1.style.display !== 'none') {
        article1.style.display = 'none';
        article2.style.display = 'block';
        active1.style.backgroundColor = "var(--base-color)";
        active2.style.backgroundColor = "var(--accent-color)";  
    } else {
        article2.style.display = 'none';
        article1.style.display = 'block';
        active1.style.backgroundColor = "var(--accent-color)";
        active2.style.backgroundColor = "var(--base-color)";
    }
}
