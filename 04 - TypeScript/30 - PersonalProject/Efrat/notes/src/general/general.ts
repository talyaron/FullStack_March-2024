

// get element id or class name string and return the html element
export function getElement(ele:string):HTMLElement|undefined{
    try {
        return document.querySelector(ele) as HTMLElement ;
    } catch (error) {
        console.error(error);
    }
}


    
