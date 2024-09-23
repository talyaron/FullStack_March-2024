console.log("Hello World");

async function getAllPets() {
    try {
        const results = await fetch('/pets/get-all-pets')
        const data = await results.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}


getAllPets();