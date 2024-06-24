const myH1 = document.querySelector('#myH1') as HTMLDivElement;
console.dir(myH1);
if(myH1){
    myH1.innerText = "Hello World!";
    myH1.style.color = "blue";
}

const ps = document.querySelectorAll('p') as NodeListOf<HTMLParagraphElement>;
console.dir(ps);

if(ps){
    ps.forEach(p => {
        p.style.color = "lightblue";
    });
   
}

const reds = document.querySelectorAll('.red') as NodeListOf<HTMLParagraphElement>;
console.dir(reds);

if(reds){
    reds.forEach(red => {
        red.style.fontSize = "1.5rem";
        red.style.color = "red"
    });
}