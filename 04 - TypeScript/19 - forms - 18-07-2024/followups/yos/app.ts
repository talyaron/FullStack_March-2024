function handleChange(event: Event) {
    try {
        console.log(event.target.value!);
    } catch (error) {
        console.error(error)
    }
}

function handleClick(event: Event) {
    try {
        console.log(event?.target.value)
    } catch (error) {
        console.error(error)
    }
}


function handleMouseOut(event:Event){
    try {
        console.log(event?.target.value)
    } catch (error) {
        console.error(error)
    }
}

function handleChangeNumber(event:Event){
    try {
        const value = event.target.value
        if(value > 2 ){
            alert("Number must be less than 2")
        }
    } catch (error) {
        console.error(error)
    }
}