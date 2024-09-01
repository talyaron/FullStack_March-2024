import { getElement } from "../general/general";
import { handelNewWorkflow } from "../controller/workflowController"
import { workFlowDesign } from "./workFlowDesignView";

export function renderHome() {
  try {
    let element = getElement("#app");
    if (!element) throw new Error("element app not found");

    const htmlTags = `<div><input id="design-Workflow" type="button" value="Design Workflow"></div>`;
    element.innerHTML = htmlTags;

    element = getElement("#design-Workflow");
    if (!element) throw new Error("element design-Workflow not found");
    element.addEventListener('click',workFlowDesign);
    
  } catch (error) {
    console.log(error);
  }
}
