const timer2 = document.getElementById('time');
setInterval(() => {
  if (timer2)
    timer2.textContent = new Date().toLocaleTimeString();
}, 1000);









