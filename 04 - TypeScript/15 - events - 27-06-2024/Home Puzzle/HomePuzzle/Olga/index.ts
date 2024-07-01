interface Robot {
  id: number;
  name: string;
  description: string;
  image: string;
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

const robots: Robot[] = [robot1, robot2, robot3];

const myMap = document.querySelector(".robotsAria") as HTMLDivElement;

function addRobot(
  arr: Robot[],
  element: HTMLDivElement
): HTMLDivElement | undefined {
  try {
    let html: string = ``;
    arr.forEach((robot) => {
      let posX = Math.random() * 100;
      let posY = Math.random() * 100;
      html += `<div class="robot" style="background-image:url(${robot.image}); top: ${posY}%; left: ${posX}%" data-title="${robot.description}" title = "${robot.name}">
            </div>`;

    });
    element.innerHTML = html;

  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function robotGait (element: HTMLDivElement): undefined {
    try {

    } catch (error) {
        console.error(error);
        return undefined
    }
}

addRobot(robots, myMap);
