export function htmlTag(tag:string):HTMLElement{
    return document.querySelector(tag) as HTMLElement;
}