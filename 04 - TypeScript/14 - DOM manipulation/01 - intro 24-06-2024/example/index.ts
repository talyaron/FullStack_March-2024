// catch only one Element. I uses scss selector
const myH1 = document.querySelector('#myH1') as HTMLDivElement;
console.dir(myH1);
if(myH1){
    myH1.innerText = "Hello World!";
    myH1.style.color = "blue";
}

//cache some elements
const ps = document.querySelectorAll('p') as NodeListOf<HTMLParagraphElement>;
console.dir(ps);

//loop through the elements
if(ps){
    ps.forEach(p => {
        p.style.color = "green";
    });
   
}

const bigs = document.querySelectorAll('.big') as NodeListOf<HTMLParagraphElement>;
console.dir(bigs);

if(bigs){
    bigs.forEach(big => {
        big.style.fontSize = "2rem";
    });
}