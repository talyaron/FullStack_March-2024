// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { renderItems } from './view/item.ts'
import { items } from './model/itemModel'
import './view/dist/item.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderItems(items)

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
