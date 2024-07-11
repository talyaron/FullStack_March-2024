function handleClickSquare(event){
    event.target.style.display = "none";
}

function handleClickImg(event){
    const boom = document.querySelector("#boom") as HTMLImageElement;
    console.log(boom)
    boom.style.display = "block" ;
}

