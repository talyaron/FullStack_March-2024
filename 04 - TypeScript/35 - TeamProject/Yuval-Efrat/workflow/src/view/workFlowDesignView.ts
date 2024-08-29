import { getElement } from "../general/general";
export function workFlowDesign(){
    try {
        let element = getElement("#app") as HTMLElement;
        if(!element) throw new Error("couldn't catch app element");
        element.innerHTML = `<div><input type="text" name="title"></div>`

    } catch (error) {
        
    }
}
