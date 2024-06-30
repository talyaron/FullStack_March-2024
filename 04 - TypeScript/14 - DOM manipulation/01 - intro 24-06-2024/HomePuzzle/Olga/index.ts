interface Robot {
  id: number;
  name: string;
  description: string;
  image: string;
  posX: number;
  posY: number;
  startGame?: (robot: Robot) => HTMLDivElement | undefined;
}

// create robots

const robot1: Robot = {
  id: 1,
  name: "GigaJoke",
  description:
    "GigaJoke is a robot with an unrivaled sense of humor. Its main mission is to entertain you with endless jokes and anecdotes. Equipped with a built-in laugh generator, it can lift your spirits even in the dullest situations.",
  image: "./images/robot01.png",
  posX: 0,
  posY: 0,
};

const robot2: Robot = {
  id: 2,
  name: "AlmostGenius",
  description:
    "AlmostGenius is a robot with an insatiable thirst for knowledge and an encyclopedia in its head. It knows almost everything but sometimes makes small mistakes, which adds a touch of humor. The perfect companion for curious minds ready for fascinating conversations.",
  image: "./images/robot02.png",
  posX: 0,
  posY: 0,
};

const robot3: Robot = {
  id: 3,
  name: "BlunderMaster",
  description:
    "BlunderMaster is a helper robot with a unique talent for finding funny and absurd solutions to everyday tasks. Its clumsy attempts to assist often lead to hilarious mishaps, turning routine into comedy.",
  image: "./images/robot03.png",
  posX: 0,
  posY: 0,
};

const robot4: Robot = {
  id: 2,
  name: "JazzBot",
  description:
    "AlmostGenius is a robot with an insatiable thirst for knowledge and an encyclopedia in its head. It knows almost everything but sometimes makes small mistakes, which adds a touch of humor. The perfect companion for curious minds ready for fascinating conversations.",
  image: "./images/robot04.png",
  posX: 0,
  posY: 0,
};

const robot5: Robot = {
  id: 3,
  name: "ChatChatterbox",
  description:
    "BlunderMaster is a helper robot with a unique talent for finding funny and absurd solutions to everyday tasks. Its clumsy attempts to assist often lead to hilarious mishaps, turning routine into comedy.",
  image: "./images/robot05.png",
  posX: 0,
  posY: 0,
};

const robots: Robot[] = [robot1, robot2, robot3, robot4, robot5];

const robotsAria = document.querySelector(".robotsAria") as HTMLDivElement;

// add robots to the DOM

function addRobot(
  arr: Robot[],
  element: HTMLDivElement
): HTMLDivElement | undefined {
  try {
    let html: string = ``;
    arr.forEach((robot) => {
      robot.posX = Math.random() * 100;
      robot.posY = Math.random() * 100;
      html += `<div class="robot" style="background-image:url(${robot.image}); top: ${robot.posY}%; left: ${robot.posX}%" data-title="${robot.description}" title = "${robot.name}">
          </div>`;
    });
    element.innerHTML = html;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

addRobot(robots, robotsAria);

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

let level = 5;
let speed = level * 0.5;
let counter = 0;

const HTMLRobotsArr = document.querySelectorAll(".robot");

function startGame() {
  for (let i = 0; i < HTMLRobotsArr.length; i++) {

    let dx = choiceDirection();
    let dy = choiceDirection();

    function robotGait() {
      try {
        const robot = HTMLRobotsArr[i] as HTMLDivElement;

        function chengePosition(robot) {
          if (parseInt(robot.style["top"]) > 100 || parseInt(robot.style["left"]) < 0 || parseInt(robot.style["top"]) < 0 || parseInt(robot.style["left"]) > 100) {
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
