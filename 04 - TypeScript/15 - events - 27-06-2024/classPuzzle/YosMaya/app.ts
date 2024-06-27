function handleClicked(event) {

    console.log(event)
    console.log(event.x)
    console.log(event.y)
    // const dom = WriteToDom()
    // console.log(dom)


}

function WriteToDom(){
    try {
        const clickEvent = document.getElementById('#clicked');
        return `
            <div style=width:10px;height:10px;background-color:'red'></div>
        `;
    } catch (error) {
        console.error(error);
        return undefined
    }
}


function handleChange(event){
    const text = event.target.value;
    console.log(event)
    const p = document.getElementById('#upper');
    p?.innerHTML = text.toUpperCase()
    if(text.length > 5){
        p?.style.color = 'green';
    }
    console.log(text.toUpperCase())

}