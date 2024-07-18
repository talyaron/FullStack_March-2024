const colorChanger = document.querySelector('#colorChanger');

if (colorChanger) {
    colorChanger.addEventListener('change', handleChangeColor);
  }
  
  function handleChangeColor(event:any) {
    console.dir(event);
    console.log(event.target.value)
    const input = event.target as HTMLInputElement;
    document.body.style.backgroundColor = input.value;
  }