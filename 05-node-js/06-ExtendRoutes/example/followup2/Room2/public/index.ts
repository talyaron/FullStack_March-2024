function main() {
    try {
        const getDanBtn = document.getElementById('getDanBtn');
        if (!getDanBtn) throw new Error('No button found');

        getDanBtn.addEventListener('click', async () => {
            console.log('getDanBtn clicked');
            const response = await fetch(`/api/users/get-user-by-id/1234`);
            if (!response.ok) throw new Error('No response');

            const data = await response.json();
            console.log(data);
        });

        const getByName = document.getElementById('getDanBtn');
        if (!getByName) throw new Error('No button found');
       
    } catch (error) {
        console.error(error);

    }
}

async function handleSearchName (e: any){
    e.preventDefault();
    try {
        console.dir(e.target)
        console.log("handleSearchName");
        if (!e.target) throw new Error('No target');

        const name = e.target.name.value;
        if (!name) throw new Error('No name provided');
        console.log("name", name);
        const response = await fetch(`/api/users/search-user?name=${name}&age=30&id=2342`);
        if (!response.ok) throw new Error('No response');
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error(error);
    }
}

async function handleDeleteUser(e:any){
    e.preventDefault();
    try {
        console.log('trying to delete')
        const name = document.querySelector("#name");


        console.log(name?.innerText)
        // const req = await fetch('/api/users/delete-user/')
    } catch (error) {
        console.error(error)
    }
}