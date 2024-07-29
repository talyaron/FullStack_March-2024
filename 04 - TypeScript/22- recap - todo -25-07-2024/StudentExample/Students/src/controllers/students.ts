export function addStudent(event: Event) {
    try {
        const name = event.target.name;
        console.log(name);
    } catch (error) {
        console.error(error);
    }
}