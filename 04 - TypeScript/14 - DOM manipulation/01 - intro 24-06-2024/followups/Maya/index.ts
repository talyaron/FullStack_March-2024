const Head = document.querySelector('#Head') as HTMLDivElement;
console.dir(Head);
if (Head){
    Head.innerText = 'Hello world';
    Head.style.color = 'yellow';
}

const pss = document.querySelectorAll('p') as NodeListOf<HTMLParagraphElement>;  
console.dir(pss);
if (pss){
    pss.forEach(p =>{
        p.style.font = "ariel"
    }

    )
}