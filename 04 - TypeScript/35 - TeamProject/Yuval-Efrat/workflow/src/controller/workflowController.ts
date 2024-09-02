import { stageDesigner } from "../view/workFlowDesignView";

export function handelNewWorkflow(ev:Event){
    try {
        ev.preventDefault();
        alert("fhfhf");
    } catch (error) {
        console.error(error);
    }
}

export function handelNewStage(){
    try {
        stageDesigner();
    } catch (error) {
        console.error(error);
    }
}

export function handleWorkFlowTitle(){
    try {
        alert("handleWorkFlowTitle")
    } catch (error) {
        console.error(error)
    }
}