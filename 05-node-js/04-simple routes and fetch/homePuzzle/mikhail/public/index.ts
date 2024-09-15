const clock = document.getElementById('clock');
setInterval(() => {
  if (clock)
    clock.textContent = new Date().toLocaleTimeString();
}, 1000);

