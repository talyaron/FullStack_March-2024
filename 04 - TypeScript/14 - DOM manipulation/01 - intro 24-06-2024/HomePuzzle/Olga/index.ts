interface Robot {
  id: number;
  name: string;
  description: string;
  image: string;
  posX: number;
  posY: number;
}

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

const robots: Robot[] = [robot1, robot2, robot3];

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

function takePosition(arr: Robot[]) {
  try {
    arr.forEach((robot) => {
      robot.posX = canvas.width * Math.random();
      robot.posY = canvas.height * Math.random();
    });
  } catch (error) {
    console.error(error);
  }
}

function drewRobot(robot: Robot) {
  try {
    const image = new Image();
      image.onload = function () {
        ctx.drawImage(image, robot.posX, robot.posY);
      };
      ctx.fillText(robot.name, robot.posX, robot.posY - 10);
      ctx.font = "14px Arial";
      image.src = robot.image;
  } catch (error) {
    console.error(error)
  }
}

takePosition(robots);

function addRobot(robots: Robot[]): HTMLDivElement | undefined {
  try {
    robots.forEach((robot) => {
      drewRobot(robot);
    });
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function getRandomArbitrary(min, max) {
  let x: number = 1
  return Math.random() * (max - min) + min;
}

function robotGait(): HTMLDivElement | undefined {
  try {
    let dx = 1 + getRandomArbitrary(-2, 2);
    let dy = 1 + getRandomArbitrary(-2, 2);
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    robots.forEach((robot) => {
      drewRobot(robot);
    });

    function chengePosition(robots: Robot[]) {
      robots.forEach((robot) => {
        robot.posX += dx;
        robot.posY += dy;

        if (robot.posX < 50 || robot.posX > canvas.width - 50) {
          dx = -dx;
        }
        if (robot.posY < 50 || robot.posY > canvas.height - 50) {
          dy = -dy;
        }

        console.log(robot.posX, robot.posY, dx, dy);
      });
    }
    chengePosition(robots)
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function startGame() {
  setInterval(robotGait, 100);
}

// addRobot(robots);
startGame();
