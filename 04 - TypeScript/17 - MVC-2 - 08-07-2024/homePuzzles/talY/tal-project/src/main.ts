import './style.scss'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import flower from './assets/images/flower.jpg'
import { Flower, flowers } from './model/flowerModel.ts'
import { renderFlower } from './view/flower/Flower.ts'

flowers.push(new Flower(flower, 'flower1'),new Flower(flower, 'flower1'));
const flowersString = flowers.map(flower => renderFlower(flower)).join('');
console.log(flowersString)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${flower}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    ${flowersString}
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
