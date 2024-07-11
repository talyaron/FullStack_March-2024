import { Flower } from "../../model/flowerModel";
import "./flower.scss";

export function renderFlower(flower: Flower): string {
    try {
        const html = `<div class="flower">
    <img src="${flower.image}" alt="${flower.name}" />
    <p>${flower.name}</p>
    </div>
  `;
        return html;
    } catch (e) {
        console.error(e);
        return "";
    }
}