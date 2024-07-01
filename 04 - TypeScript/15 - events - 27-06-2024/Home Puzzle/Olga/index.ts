// Modal window with rules
const dialog = document.querySelector("dialog") as HTMLDialogElement;
// window.onload = function () {
//   dialog.showModal();
//   };
document.querySelector("#openDialog").onclick = function () {
  dialog.showModal();
};
document.querySelector("#closeDialog").onclick = function () {
  dialog.close();
};

interface Robot {
  id: number;
  name: string;
  description: string;
  image: string;
  posX?: number;
  posY?: number;
}

const robot1: Robot = {
  id: 1,
  name: "GigaJoke",
  description:
    "GigaJoke is a robot with an unrivaled sense of humor. Its main mission is to entertain you with endless jokes and anecdotes. Equipped with a built-in laugh generator, it can lift your spirits even in the dullest situations.",
  image: "./images/robot1.png",
};

const robot2: Robot = {
  id: 2,
  name: "AlmostGenius",
  description:
    "AlmostGenius is a robot with an insatiable thirst for knowledge and an encyclopedia in its head. It knows almost everything but sometimes makes small mistakes, which adds a touch of humor. The perfect companion for curious minds ready for fascinating conversations.",
  image: "./images/robot2.png",
};

const robot3: Robot = {
  id: 3,
  name: "BlunderMaster",
  description:
    "BlunderMaster is a helper robot with a unique talent for finding funny and absurd solutions to everyday tasks. Its clumsy attempts to assist often lead to hilarious mishaps, turning routine into comedy.",
  image: "./images/robot3.png",
};

const robot4: Robot = {
  id: 2,
  name: "JazzBot",
  description:
    "AlmostGenius is a robot with an insatiable thirst for knowledge and an encyclopedia in its head. It knows almost everything but sometimes makes small mistakes, which adds a touch of humor. The perfect companion for curious minds ready for fascinating conversations.",
  image: "./images/robot4.png",
  posX: 0,
  posY: 0,
};

const robot5: Robot = {
  id: 3,
  name: "ChatChatterbox",
  description:
    "BlunderMaster is a helper robot with a unique talent for finding funny and absurd solutions to everyday tasks. Its clumsy attempts to assist often lead to hilarious mishaps, turning routine into comedy.",
  image: "./images/robot5.png",
  posX: 0,
  posY: 0,
};

const robots: Robot[] = [robot1, robot2, robot3, robot4, robot5];

const myMap = document.querySelector(".robotsAria") as HTMLDivElement;

function addRobotPosition(robot: Robot) {
  robot.posX = Math.random() * 100;
  robot.posY = Math.random() * 100;
}

function addRobot(
  arr: Robot[],
  element: HTMLDivElement
): HTMLDivElement | undefined {
  try {
    let html: string = ``;
    arr.forEach((robot) => {
      addRobotPosition(robot);
      html += `<div class="robot" id="${
        robot.id - 1
      }" style="background-image:url(${robot.image}); top: ${
        robot.posY
      }%; left: ${robot.posX}%" data-title="${robot.description}" title = "${
        robot.name
      }">
            </div>`;
    });
    let robotDiv = document.createElement("div");
    robotDiv.innerHTML = html;
    element.appendChild(robotDiv);
    // element.innerHTML = html;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function robotGait(element: HTMLDivElement): undefined {
  try {
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

addRobot(robots, myMap);

const robotGame = document.querySelectorAll(".robot");
let divScore = document.querySelector("#score") as HTMLDivElement;
let score = parseInt(divScore.innerHTML);

console.log(score);

function handleBodyClick(event) {
  try {
    console.log("Body clicked", event.x, event.y);
    const boom = document.querySelector("#boom") as HTMLImageElement;
    const divLevel = document.querySelector("#level") as HTMLDivElement;
    if (!boom) throw new Error("Boom not found");

    if (boom && event.target.classList.contains("robot")) {
      boom.style.left = `${event.x}px`;
      boom.style.top = `${event.y}px`;
      boom.style.display = "block";
      setTimeout(() => {
        boom.style.display = "none";
      }, 1000);
      score += level * 50;
      console.log(score);
      divScore.innerHTML =
        score < 100 ? "00" + score : score < 1000 ? "0" + score : String(score);
      if (score == 1000) {
        level += 1;
        divLevel.innerHTML = "Level " + level;
      }
      if (score == 2000) {
        level += 1;
        divLevel.innerHTML = "Level " + level;
      }
      if (score == 3050) {
        level += 1;
        divLevel.innerHTML = "Level " + level;
      }
      if (score == 4050) {
        level += 1;
        divLevel.innerHTML = "Level " + level;
      }
      console.log(level);
    }

    console.dir(event.target);
    if (event.target.classList.contains("robot")) {
      const robot = event.target;
      robot.style.top = `${Math.random() * 100}%`;
      robot.style.left = `${Math.random() * 100}%`;
    }
  } catch (error) {
    console.error(error);
  }
}

function getRandomArbitrary(arr: number[]) {
  let x: number = 1;
  return Math.random() * (arr[0] - arr[1]) + arr[1];
}

function choiceDirection() {
  const arrMinus = [-speed, 0];
  const arrPlus = [0, speed];
  if (Math.random() > 0.5) {
    return getRandomArbitrary(arrMinus);
  } else {
    return getRandomArbitrary(arrPlus);
  }
}

let level = 1;
let speed = level * 0.5;
const timer = document.querySelector("#timer") as HTMLDivElement;
let time = 59;
const HTMLRobotsArr = document.querySelectorAll(".robot");

function startGame() {
  function startTimer() {
    timer.innerHTML = "0:" + time;
    time -= 1;
  }
  setInterval(startTimer, 1000);

  for (let i = 0; i < HTMLRobotsArr.length; i++) {
    let dx = choiceDirection();
    let dy = choiceDirection();

    function robotGait() {
      try {
        const robot = HTMLRobotsArr[i] as HTMLDivElement;

        function chengePosition(robot) {
          if (
            parseInt(robot.style["top"]) > 100 ||
            parseInt(robot.style["left"]) < 0 ||
            parseInt(robot.style["top"]) < 0 ||
            parseInt(robot.style["left"]) > 100
          ) {
            dx = choiceDirection();
            dy = choiceDirection();
          }
        }
        chengePosition(robot);

        robot.style.top = `${parseInt(robot.style["top"]) + dy}%`;
        robot.style.left = `${parseInt(robot.style["left"]) + dx}%`;

        console.log(dx, dy);
      } catch (error) {
        console.error(error);
        return undefined;
      }
    }
    setInterval(robotGait, 100);
  }
  
}

startGame();
// while (score < 5000 || time >= 0) {startGame()};
