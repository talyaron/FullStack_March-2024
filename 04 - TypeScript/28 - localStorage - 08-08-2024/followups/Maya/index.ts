
const newName = prompt('Enter your name:');
const newAge = prompt('Enter your age:');

if (newName)
    localStorage.setItem('name', newName);
if(newAge)
    localStorage.setItem('age', newAge);

localStorage.setItem('name', 'Maya Levy');
localStorage.setItem('age', JSON.stringify(29))
sessionStorage.setItem('name', 'Maya Levy')


const name = localStorage.getItem('name');
if (name)
    document.body.innerHTML = `<h1>Hello, ${name}</h1>`;

const age = localStorage.getItem('age')
if(age)
    document.body.innerHTML = `<h2>your age, ${age}<h2>`;