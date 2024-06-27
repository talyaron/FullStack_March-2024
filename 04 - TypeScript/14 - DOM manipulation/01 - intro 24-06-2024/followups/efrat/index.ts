const myH1 = document.querySelector('#myH1') as HTMLDivElement;
if (myH1){
    myH1.style.color = 'orange';
}

const ps = document.querySelectorAll('p') as NodeListOf<HTMLParagraphElement>;

if (ps){
ps.forEach(p=>{
    p.style.fontSize = '1.5rem';
})
}

const lg = document.querySelectorAll('.large') as NodeListOf<HTMLParagraphElement>;
if (lg){
    lg.forEach(large=>{
        large.style.color = 'green';
        large.style.fontSize = '2rem';
    })
}