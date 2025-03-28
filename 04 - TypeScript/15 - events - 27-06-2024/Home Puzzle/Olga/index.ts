interface Robot {
  id: number;
  name: string;
  description: string;
  image: string;
  posX?: number;
  posY?: number;
  dx?: number;
  dy?: number;
}

const robot1: Robot = {
  id: Math.random(),
  name: "GigaJoke",
  description:
    "GigaJoke is a robot with an unrivaled sense of humor. Its main mission is to entertain you with endless jokes and anecdotes. Equipped with a built-in laugh generator, it can lift your spirits even in the dullest situations.",
  image: "./images/robot1.png",
};

const robot2: Robot = {
  id: Math.random(),
  name: "AlmostGenius",
  description:
    "AlmostGenius is a robot with an insatiable thirst for knowledge and an encyclopedia in its head. It knows almost everything but sometimes makes small mistakes, which adds a touch of humor. The perfect companion for curious minds ready for fascinating conversations.",
  image: "./images/robot2.png",
};

const robot3: Robot = {
  id: Math.random(),
  name: "BlunderMaster",
  description:
    "BlunderMaster is a helper robot with a unique talent for finding funny and absurd solutions to everyday tasks. Its clumsy attempts to assist often lead to hilarious mishaps, turning routine into comedy.",
  image: "./images/robot3.png",
};

const robot4: Robot = {
  id: Math.random(),
  name: "JazzBot",
  description:
    "AlmostGenius is a robot with an insatiable thirst for knowledge and an encyclopedia in its head. It knows almost everything but sometimes makes small mistakes, which adds a touch of humor. The perfect companion for curious minds ready for fascinating conversations.",
  image: "./images/robot4.png",
  posX: 0,
  posY: 0,
};

const robot5: Robot = {
  id: Math.random(),
  name: "ChatChatterbox",
  description:
    "BlunderMaster is a helper robot with a unique talent for finding funny and absurd solutions to everyday tasks. Its clumsy attempts to assist often lead to hilarious mishaps, turning routine into comedy.",
  image: "./images/robot5.png",
  posX: 0,
  posY: 0,
};

const robots: Robot[] = [robot1, robot2, robot3, robot4, robot5];

const myMap = document.querySelector(".robotsAria") as HTMLDivElement;
let level = 1;
let speed = level * 2.5;
const timer = document.querySelector("#timer") as HTMLDivElement;
let time = 59;

function addRobotPosition(robot: Robot) {
  robot.posX = Math.random() * 100;
  robot.posY = Math.random() * 100;
}

robots.map((robot) => changeDirection(robot));

function addRobot(
  arr: Robot[],
  element: HTMLDivElement
): HTMLDivElement | undefined {
  try {
    let html: string = ``;
    arr.forEach((robot) => {
      addRobotPosition(robot);
      html += `<div class="robot" id="${robot.id}" style="background-image:url(${robot.image}); top: ${robot.posY}%; left: ${robot.posX}%" data-title="${robot.description}" title = "${robot.name}">
            </div>`;
    });
    let robotDiv = document.createElement("div");
    robotDiv.innerHTML = html;
    element.appendChild(robotDiv);
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

addRobot(robots, myMap);

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

      const divWin = document.querySelector("#win") as HTMLDivElement;
      if (score >= 5000) {
        divWin.style.display = "block";
      }
    }

    console.dir(event.target);
    if (event.target.classList.contains("robot")) {
      const robotHTML = event.target;
      const robot = robots.find((robot) => robotHTML.id == robot.id) as Robot;

      console.log(robotHTML.id, robots[0].id);
      changeDirection(robot);
      console.log(robot.dx, robot.dy);
      robotHTML.style.top = `${Math.random() * 100}%`;
      robotHTML.style.left = `${Math.random() * 100}%`;

    }
  } catch (error) {
    console.error(error);
  }
}

function getRandomArbitrary(arr: number[]) {
  return Math.random() * (arr[0] - arr[1]) + arr[1];
}

function changeDirection(robot: Robot): void {
  robot.dx = getRandomArbitrary([-speed, speed]);
  const y = (speed ** 2 - robot.dx ** 2) ** 0.5;
  if (Math.random() < 0.5) {
    robot.dy = y;
  } else {
    robot.dy = -y;
  }
}

function startTimer() {
  const divGameOver = document.querySelector("#gameOver") as HTMLDivElement;
  if (time <= 0) {
    divGameOver.style.display = "block";
  }
  timer.innerHTML = time >= 10 ? "0:" + time : time > 0 ? "0:0" + time : "0:00";
  time -= 1;
  if (score >= 5000) {
    time = 0;
  }
}

const HTMLRobotsArr = document.querySelectorAll(".robot");

function startGame() {
  setInterval(startTimer, 1000);
  setInterval(robotGait, 100);
  function robotGait() {
    try {
      for (let i = 0; i < robots.length; i++) {
        const robot = robots[i] as Robot;
        const robotHTML = HTMLRobotsArr[i] as HTMLDivElement;

        if (
          parseInt(robotHTML.style["top"]) > 100 ||
          parseInt(robotHTML.style["left"]) < 0 ||
          parseInt(robotHTML.style["top"]) < 0 ||
          parseInt(robotHTML.style["left"]) > 100
        ) {
          changeDirection(robot);
        }

        robotHTML.style.top = `${parseInt(robotHTML.style["top"]) + robot.dy}%`;
        robotHTML.style.left = `${parseInt(robotHTML.style["left"]) + robot.dx}%`;
      }
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
}

const dialog = document.querySelector("dialog") as HTMLDialogElement;
window.onload = function () {
  dialog.showModal();
};

const showModal = document.querySelector("#openDialog") as HTMLButtonElement;
showModal.onclick = function () {
  dialog.showModal();
};
const closeModal = document.querySelector("#closeDialog") as HTMLButtonElement;
closeModal.onclick = function () {
  dialog.close();
  startGame();
};