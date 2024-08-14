class Game 


const scoreDisplay = document.getElementById("score") as HTMLDivElement;
const waterGlass = document.getElementById("waterGlass") as HTMLDivElement;
const resetButton = document.getElementById("resetButton") as HTMLButtonElement;

let totalGlasses = 0;

function drinkWater(): void {
  totalGlasses += 1;
  updateScore();
}
resetButton.click();

function resetGame(): void {
  totalGlasses = 0;
  updateScore();
}

function resetGame(): void {
  totalGlasses = 0;
  updateScore();
}

function updateScore(): void {
  scoreDisplay.textContent = `Glasses of Water: ${totalGlasses}`;
}

waterGlass.addEventListener("click", drinkWater);
resetButton.addEventListener("click", resetGame);

const scoreDisplay = document.getElementById("score") as HTMLDivElement;
const glassesContainer = document.getElementById(
  "glassesContainer"
) as HTMLDivElement;
const resetButton = document.getElementById("resetButton") as HTMLButtonElement;

function createGlasses(numberOfGlasses: number): void {
  for (let i = 0; i < numberOfGlasses; i++) {
    const glass = document.createElement("div");
    glass.classList.add("glass");
    glass.addEventListener("click", () => drinkWater(glass));
    glassesContainer.appendChild(glass);
  }
}

function drinkWater(glass: HTMLDivElement): void {
  if (!glass.classList.contains("drunk")) {
    totalGlasses += 1;
    glass.classList.add("drunk");
    updateScore();
  }
}

function resetGame(): void {
  totalGlasses = 0;
  updateScore();
  const glasses = document.querySelectorAll(".glass");
  glasses.forEach((glass) => glass.classList.remove("drunk"));
}

function updateScore(): void {
  scoreDisplay.textContent = `Glasses of Water: ${totalGlasses}`;
}

createGlasses(8);

resetButton.addEventListener("click", resetGame);
