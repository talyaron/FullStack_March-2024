//primitive types


const element = document.getElementById("element1");
console.dir(element);

//print to console log, the second child text content
console.log(element.children[1].innerHTML);
console.log(element.children[0].innerHTML);
console.log(element?.textContent?.split('\n')[0]);