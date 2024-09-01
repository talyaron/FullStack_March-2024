import { getElement } from "../general/general";
import { handleWorkFlowTitle } from "../controller/workflowController";
export function workFlowDesign(){
    try {
        let element = getElement("#app");
        if(!element) throw new Error("couldn't catch app element");
        const htmlTags = `<div><input type="text" name="title"></div>
                          <div><input type="button" value="Let's Start" id="wf-title-btn"></div>`;
        //element = getElement("#wf-title-btn");
        //if(!element) throw new Error("Couldn't catch wf-title-btn element");
        element.innerHTML = htmlTags;
        element.addEventListener('click', handleWorkFlowTitle)

    } catch (error) {
        console.error(error)
    }
}
