const creatureDiv = document.querySelector("#creature");
const scoreElement = document.querySelector("#score");
let score: number = 0;
function handelOver(e) {
  //   document.body.style.backgroundColor = "red";
}

function handelMouseout(e) {
  document.body.style.backgroundColor = "white";
}

function handelClick(event) {
  try {

    let getCoordinatesArr: number[] = getCoordinate();
    event.preventDefault();
    score++;
    event.target.style.display = "none";
    creatureDiv.innerHTML =
      '<img id="creatureRunAway" src="./images/boom.gif" alt="creature run away">';

    scoreUpdate(score);
    setTimeout(function () {
      creatureDiv.style.display = "none";
      creatureDiv.innerHTML =
        '<img onclick="handelClick(event)" src="./images/giphy.gif" alt="creature run away">';

      creatureDiv.style.left = `${getCoordinatesArr[0]}px`;
      creatureDiv.style.top = `${getCoordinatesArr[1]}px`;
      creatureDiv.style.display = "block";
    }, 1000);
  } catch (error) {}
}

function handelNumOfCreature() {
  try {
    let creatures: string = "";
    let numOfCreatures = document.querySelector("#creatures").value;
    let getCoordinatesArr: number[] = [];

    scoreUpdate(0);
    // for (let i = 1; i <= numOfCreatures; i++) {
    //   getCoordinatesArr = getCoordinate();
    //   creatures =
    //     creatures +
    //     `<div style="left:${getCoordinatesArr[0]}px;top:${getCoordinatesArr[1]}px;" id="creature"><img  onclick="handelClick(event)" src="./images/giphy.gif" alt="creature run away"></div>`;
    // }
 
    // creatureDiv.innerHTML = creatures;
  } catch (error) {}
}

function scoreUpdate(score: number) {
  scoreElement?.innerHTML = score;
}

function getCoordinate(): number[] {
  let coordinateArr: number[] = [];
  coordinateArr.push(Math.floor(Math.random() * 1200 + 1)); //x
  coordinateArr.push(Math.floor(Math.random() * 600 + 1)); //y

  return coordinateArr;
}
