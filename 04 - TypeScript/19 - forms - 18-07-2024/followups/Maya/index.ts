function handleText(event: Event) {
    console.dir(event);
    console.log((event.target as HTMLInputElement).value);
    const input = event.target as HTMLInputElement;
    document.body.style.borderBlock = input.value;
  }
  
  const textInput = document.querySelector<HTMLInputElement>('#textInput');
  if (textInput) {
    textInput.addEventListener('input', handleText);
  }
  