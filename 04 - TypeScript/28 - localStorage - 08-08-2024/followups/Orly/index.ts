localStorage.setItem('name', 'John Wick');

const newName = prompt('Enter your name')
if(newName)
    localStorage.setItem('name', newName);



const name = localStorage.getItem('name');
if(name)
    document.body.innerHTML = `<h1>Hello, ${name}</h1>`;

sessionStorage.setItem('name', 'John Wick');