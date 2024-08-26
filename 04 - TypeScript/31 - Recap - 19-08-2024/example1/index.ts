//model
const className: string = "FullStack June 24";


//controller

//function declaration


//invocation
const container = document.querySelector("#app");
renderTitle(container as HTMLElement);


//event driven
container?.addEventListener("click", handleMoveRight as EventListener);



//view
//function declaration
function renderTitle(domElement: HTMLElement) {
    try {
    
        const title = htmlTitle(className);
        if(!domElement) throw new Error("Element not found");

        domElement.innerHTML = title;
    } catch (error) {
        console.error(error);
    }
}

function htmlTitle(title: string) {
    return `
    <h1>${title}</h1>
  `;
}


function handleMoveRight(event: MouseEvent) {
    try {
       console.dir(event);
       const element = event.target as HTMLElement;

       //move it right
       element.style.left = `100px`;

    } catch (error) {
        console.error(error);
    }
}

function handleOnline(event: Event) {
    try {
        console.log("Online");
        // document.body.style.backgroundColor = "green";
        document.body.classList.remove("offline");
        document.body.classList.add("online");
    } catch (error) {
        console.error(error);
    }
}

function handleOffline(event: Event) {
    try {
        console.log("Offline");
        // document.body.style.backgroundColor = "red";
        document.body.classList.remove("online");
        document.body.classList.add("offline");
    } catch (error) {
        console.error(error);
    }
}


