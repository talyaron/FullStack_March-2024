function handleClick(event: Event) {
    console.log(event);
    console.dir(event.target);
    (event.target as HTMLElement).innerText = "capture";
}

function handleBodyClick(event) {
    try {
        console.log("Body clicked", event.x, event.y);
        const boom = document.querySelector("#capture") as HTMLImageElement;
        if (!boom) throw new Error("smurf not found");

        boom.style.left = `${event.x}px`;
        boom.style.top = `${event.y}px`;
        boom.style.display = "block";
        setTimeout(() => {
            boom.style.display = "none";
        }, 800);
    } catch (error) {
        console.error(error);
    }

}

function handleDisappear(event: Event) {
    (event.target as HTMLElement).style.display = "none";
}

interface Smurf {
    picture: string;
    name: string;
    points: number;
    getDescription?: () => string | undefined;
}

const brainy: Smurf = {
    picture: "brainy.png",
    name: "Brainy",
    points: 10,
    getDescription: () => SmurfsCard(brainy)
};

const papaSmurf: Smurf = {
    picture: "papaSmurf.png",
    name: "Papa Smurf",
    points: 10,
    getDescription: () => SmurfsCard(papaSmurf)
};

const grouchy: Smurf = {
    picture: "grouchy.jpg",
    name: "Grouchy",
    points: 10,
    getDescription: () => SmurfsCard(grouchy)
};

const twoSmurfs: Smurf = {
    picture: "twoSmurfs.gif",
    name: "Two Smurfs",
    points: 20,
    getDescription: () => SmurfsCard(twoSmurfs)
};

const smurfs: Smurf[] = [brainy, papaSmurf, grouchy, twoSmurfs];

const smurfsDiv = document.querySelector('#smurfs') as HTMLDivElement;

function getRandomPosition(element: HTMLElement) {
    const villageMap = document.getElementById('villageMap') as HTMLDivElement;
    if (!villageMap) throw new Error("villageMap not found");
    const x = Math.random() * (villageMap.clientWidth - element.clientWidth);
    const y = Math.random() * (villageMap.clientHeight - element.clientHeight);
    return { x, y };
}

function writeSmurfsToDOM(smurfs: Smurf[], element: HTMLDivElement) {
    try {
        if (!element) throw new Error("Element not found");
        if (!smurfs) throw new Error("No smurfs found");

        let html = ``;
        smurfs.forEach(smurf => {
            if (smurf.getDescription) {
                const htmlSmurf = smurf.getDescription();
                if (htmlSmurf) html += htmlSmurf;
            } else {
                console.error(`getDescription is not defined for smurf: ${smurf.name}`);
            }
        });
    
        element.innerHTML = html;

        document.querySelectorAll('.smurf').forEach(smurf => {
            const smurfElement = smurf as HTMLElement;
            const { x, y } = getRandomPosition(smurfsDiv);
            smurfElement.style.left = `${x}px`;
            smurfElement.style.top = `${y}px`;
            smurfElement.addEventListener('click', handleClick);
            smurfElement.addEventListener('click', handleDisappear);
        });
    } catch (error) {
        console.error(error);
    }
}

function SmurfsCard(smurf: Smurf): string | undefined {
    try {
        return `<img src="./images/${smurf.picture}" alt="${smurf.name}" class="smurf">`;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

writeSmurfsToDOM(smurfs, smurfsDiv);
