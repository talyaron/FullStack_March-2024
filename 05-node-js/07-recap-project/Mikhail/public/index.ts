async function getAllPets(){
    try {
        

        const results=await fetch('/pets/get-all/pets');
        const data=await results.json();

    } catch (error) {
        console.error(error);
    }
}
async function addPet(){
    
}