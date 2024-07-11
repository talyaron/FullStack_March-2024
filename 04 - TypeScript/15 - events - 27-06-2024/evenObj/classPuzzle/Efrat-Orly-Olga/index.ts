const cube = document.querySelector("#cube") as HTMLImageElement;


function handleBodyClick(event) {
    try {
        console.log("Body clicked", event.x, event.y);
        const boom = document.querySelector("#boom") as HTMLImageElement;
        if (!boom) throw new Error("Boom not found");

        boom.style.left = `${event.x}px`;
        boom.style.top = `${event.y}px`;
        boom.style.display = "block";
        setTimeout(() => {
            boom.style.display = "none";
        }, 800);

        if (event.target == cube) {
            cube.style.display = "none";
        }
    } catch (error) {
        console.error(error);
    }

}

function handleButton(event) {
    try {
        const btn = document.querySelector("#btn") as HTMLElement;
        let x = Math.random() * 100;
        let y = Math.random() * 100;

        console.log(x, y)

        if (event.target == btn) {
            cube.style.left = `${x}%`;
            cube.style.top = `${y}%`;
            cube.style.display = "block";
        }

    } catch (error) {

    }
}