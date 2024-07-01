// let score = document.querySelector("#score") as HTMLTextAreaElement |number


function handleClickMonster(event) {
  event.target.style.display = "none";
  setTimeout(() => {
    event.target.style.display = "block";
  }, 1500);
}


function handleClickImg(event) {
  const boom = document.querySelector("#boom") as HTMLImageElement;
  console.log(boom);
  boom.style.left = event.target.style.left;
  boom.style.top = event.target.style.top;
  boom.style.display = "block";
  setTimeout(() => {
    boom.style.display = "none";
  }, 800);
}

document.addEventListener("DOMContentLoaded", function () {
  const image: HTMLImageElement = document.getElementById(
    "monster"
  ) as HTMLImageElement;

  if (!image) {
    console.error("Image element not found");
    return;
  }
  function moveImage(): void {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const randomX = Math.floor(
      Math.random() * (windowWidth - image.clientWidth)
    );
    const randomY = Math.floor(
      Math.random() * (windowHeight - image.clientHeight)
    );

    image.style.left = `${randomX}px`;
    image.style.top = `${randomY}px`;
  }
  setInterval(moveImage, 2000);
});

