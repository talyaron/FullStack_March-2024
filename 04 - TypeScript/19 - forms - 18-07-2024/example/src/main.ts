import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <input type="text" id='textInput'/>
    <input type="number" />
    <input type="checkbox" />
    <input type="radio" />
    <input type="file" />
    <input type="color" id="color" />
    <input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text"> 
<input type="time">
<input type="url">
<input type="week">
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

const colorPicker = document.querySelector<HTMLInputElement>('#color');
if (colorPicker) {
  colorPicker.addEventListener('change', handleChangeColor);
}

function handleChangeColor(event:any) {
  console.dir(event);
  console.log(event.target.value)
  const input = event.target as HTMLInputElement;
  document.body.style.backgroundColor = input.value;
}


const textInput = document.querySelector<HTMLInputElement>('#textInput');
if (textInput) {
  textInput.addEventListener('mouseover', handleMouseOver);
}

function handleMouseOver(event: Event) {
  console.dir(event);
  const input = event.target as HTMLInputElement;
  // input.style.backgroundColor = 'red';
  alert('Mouse over');
}