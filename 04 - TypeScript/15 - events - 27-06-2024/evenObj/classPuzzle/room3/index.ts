function handleBodyClick(event) {
    try {
        const arrow = document.querySelector("#arrow") as HTMLImageElement;
        if (!arrow) throw new Error("arrow not found");

        arrow.style.left = `${event.x}px`;
        arrow.style.top = `${event.y}px`;
        arrow.style.display = "block";
        setTimeout(() => {
            arrow.style.display = "none";
        }, 800);
    } catch (error) {
        console.error(error);
    }

}
const containerDiv = document.querySelector('#container') as HTMLDivElement;
function createRanfomBalloon(element:HTMLDivElement){
    try {
        
    } catch (error) {
        
    }
}