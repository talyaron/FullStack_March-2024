import './style.css'
import { newGameCreator } from './newGameCreateFunction.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="welcome_page">
    
    <h1>CHESS GAME</h1>
    <div class="card">
      <button id="startGameButton" type="button">Start a new game</button>
    </div>
    <p class="createdBy">
      Created by Yuval Levy The first
    </p>
  </div>
`

newGameCreator(document.querySelector<HTMLButtonElement>('#startGameButton')!)
