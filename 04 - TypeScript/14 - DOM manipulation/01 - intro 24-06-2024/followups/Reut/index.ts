const myH1 = document.querySelector('#myH1') as HTMLDivElement;
console.dir(myH1);
if (myH1) {
    myH1.style.color = "blue";
}

const ps = document.querySelectorAll('p') as NodeListOf<HTMLParagraphElement>;
console.dir(ps);
if (ps) {
    ps.forEach(p => {
        p.style.color = "lightBlue";
        p.style.fontWeight= "bold"
    });
}

const bigger = document.querySelectorAll('.big') as NodeListOf<HTMLParagraphElement>;
console.dir(bigger);
if (bigger) {
    bigger.forEach(big => {
        big.style.fontSize = "2rem";
    });
}

const smaller = document.querySelectorAll('.small') as NodeListOf<HTMLParagraphElement>;
console.dir(smaller);
if (smaller) {
    smaller.forEach(small => {
        small.style.fontSize= "0.5rem";
    }
    )
}