import { getElement } from "../general/general";
import {
  handelNewWorkflow,
  handelNewStage,
} from "../controller/workflowController";

export function workFlowDesign() {
  try {
    let element = getElement("#app") as HTMLElement;
    if (!element) throw new Error("couldn't catch app element");
    element.innerHTML = `<div class="container">
    
    <form id="workflow">
        <div>
        <label>Workflow Name</label>
        <input type="text" name="title"><input type="submit" name="title" value="New Workflow">
        </div>
        <div>
        <input type="button" value="+" id="add-stage">
        </div>
        <div class="stage-container">
        </div>
        <div>
    </form>
    </div>`;
    //Submit button
    element = getElement("#workflow") as HTMLElement;
    if (!element) throw new Error("couldn't catch wf-title element");
    element.addEventListener("submit", handelNewWorkflow);
    //Add Stage button
    element = getElement("#add-stage") as HTMLElement;
    if (!element) throw new Error("couldn't catch wf-title element");
    element.addEventListener("click", handelNewStage);
  } catch (error) {}
}

export function stageDesigner(){
    
}