import "./styles/home.scss"
import { getElement } from "../general/general";
import { workFlowDesign } from "./workFlowDesignView";

export function renderHome() {
  try {
    let element = getElement("#app");
    if (!element) throw new Error("element app not found");
    const htmlTags = `<div class="container">
            <div><input id="design-Workflow" type="button" value="Design Workflow"></div>
            <div><label for="workflows">My Workflow:</label>
            <select name="workflows" id="my-workflow">
            </select></div>
            </div>`;
    element.innerHTML = htmlTags;

    element = getElement("#design-Workflow");
    if (!element) throw new Error("element design-Workflow not found");
    element.addEventListener('click',workFlowDesign);
    
  } catch (error) {
    console.log(error);
  }
}
