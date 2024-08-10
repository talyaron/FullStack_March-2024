localStorage.setItem('name', 'John Wick');

const newName = prompt('Enter your name')
if(newName)
    localStorage.setItem('name', newName);



const Name = localStorage.getItem('name');
if(Name)
    document.body.innerHTML = `<h1>Hello, ${Name}</h1>`;

sessionStorage.setItem('name', 'John Wick');