//model
const text = {text: 'Hello World'};

//view

function renderText(text: string, element: HTMLElement) {
    const html = `<h1>${text}</h1>`;
    element.innerText = html;
}

//controller
const myInput = document.querySelector('#myInput') as HTMLInputElement;

myInput.addEventListener('keyup', (event:any) => {
    text.text = event.target.value;
    console.log(text.text);
});


const output = document.querySelector('#output') as HTMLDivElement;

