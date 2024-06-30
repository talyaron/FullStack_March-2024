function handleClicked(event) {

    console.log(event)
    console.log(event.x)
    console.log(event.y)
    const dom = WriteToDom(event.x,event.y)
    console.log(dom)


}

function WriteToDom(x: number, y: number): string | undefined {
    try {
        const clickEvent = document.getElementById('#clicked');
        console.log(clickEvent)
        const addDiv = document.createElement('div');
        addDiv.style.width = '10px';
        addDiv.style.height = '10px';
        addDiv.style.backgroundColor = 'red';
        addDiv.style.top = `${y-80}px`;
        addDiv.style.left = `${x-11}px`;
        addDiv.style.position = 'absolute';
        clickEvent?.appendChild(addDiv)

        // clickEvent?.innerText += clickEvent;
        return `
            <div style="width:10px;height:10px;background-color:red;top:${y}px;left:${x}px;position: absolute"></div>
        `;
    } catch (error) {
        console.error(error);
        return undefined
    }
}


function handleChange(event) {
    const text = event.target.value;
    console.log(event)
    const p = document.getElementById('#upper');
    p?.innerHTML = text.toUpperCase()
    if (text.length > 5) {
        p?.style.color = 'green';
    }
    console.log(text.toUpperCase())

}