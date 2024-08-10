import { fishList } from "../model/objectModel";

export function renderWater() {
    let html: string = '';
    fishList.forEach((fish) => {
        if (fish.direction === "left") {
            html += `<div class="fish" style="left: ${fish.x}%; top: ${fish.y}%; width: ${fish.type.width}px; height: ${fish.type.height}px;"><img src="${fish.type.img}" alt="fish" style="transform: scaleX(-1);"></div>`
        } else {
            html += `<div class="fish" style="left: ${fish.x}%; top: ${fish.y}%; width: ${fish.type.width}px; height: ${fish.type.height}px;"><img src="${fish.type.img}" alt="fish"></div>`
        }
        fish.update();
    })
    return html;
}