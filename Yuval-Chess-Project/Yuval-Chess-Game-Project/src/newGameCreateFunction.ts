export function newGameCreator(element: HTMLButtonElement) {
  
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
