
export function getElement(elem:string):HTMLElement|undefined{
    try {
        const element = document.querySelector(elem) as HTMLElement;
        if (!element){
            throw new Error("element not found");
        }
        return element;
    } catch (error) {
        console.log(error)
    
    }
}