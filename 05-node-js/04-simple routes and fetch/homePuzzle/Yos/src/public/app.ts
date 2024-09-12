

const form = document.getElementById('form') as HTMLFormElement;
if (form) {
    form.addEventListener('submit', handleSubmitEvent);
}

const showAll = document.getElementById('show-all') as HTMLDivElement;
if (showAll) {
    showAll.addEventListener('click', handleShowAllUsers);
}


function handleSubmitEvent(event: Event): void {
    try {
        event.preventDefault();
        cleanError();
        const form = event.target as HTMLFormElement;
        const name = form.name.value;
        const image = form.image.value;
        console.log(name, image);
        form.reset();
        handleAddUser(name, image);
        console.log('user added');
        handleShowAllUsers();
    } catch (error) {
        // console.error(error);
        throw new Error((error as Error).message);
    }
}



async function handleAddUser(name: string, imageUrl: string) {
    try {
        const req = await fetch('/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, imageUrl: imageUrl })
        });

        const res = await req.json();
        console.log(res);
        if (res.ok === false) renderError(res.error);
    } catch (error) {
        throw new Error((error as Error).message); // throw error
    }
}

async function handleShowAllUsers() {
    const usersData = await getUsersData();
    console.log(usersData);
    const usersHtml = document.querySelector('#users') as HTMLDivElement;
    let usersDiv = usersData.map((user: any) => renderUser(user.name, user.imageUrl)).join('');
    usersHtml.innerHTML = usersDiv;
}


async function getUsersData(): Promise<any> {
    console.log('show all users');
    try {
        const req = await fetch('./api/todos');
        const res = await req.json();
        return res;
    } catch (error) {
        console.error(error);
        throw new Error((error as Error).message);
    }
}



function renderUser(name: string, img: string): string {
    let userDiv = `
    <div class="user">
        <div class="img">
            <img src="${img}" alt="this is ${name}">
        </div>
        <label>Name:${name}</label>
    </div>
    `
    return userDiv;

}

function renderError(error: string): void {
    const errorDiv = document.querySelector('#error') as HTMLDivElement;
    let errorDivHtml = `
    <div class="error">
    <label>${error}</label>
    </div>
    `
    errorDiv.innerHTML = errorDivHtml;
}

function cleanError(): void {
    const errorDiv = document.querySelector('#error') as HTMLDivElement;
    errorDiv.innerHTML = '';
}