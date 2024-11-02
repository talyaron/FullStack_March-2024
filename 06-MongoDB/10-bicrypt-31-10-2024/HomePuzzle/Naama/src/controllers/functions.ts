export function randomId(x:number):number{
    const lowerBound = Math.pow(10, x - 1);
    const upperBound = Math.pow(10, x) - 1;

    return Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
}

export async function getRandomFreeStreet(){
    try {
        
    } catch (error) {
        
    }

}