const timer = document.getElementById('time');
setInterval(() => {
    if (timer)
        timer.textContent = new Date().toLocaleTimeString();
}, 1000);

const dateElement = document.getElementById('date');
if (dateElement) {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    dateElement.textContent = dateString;
}