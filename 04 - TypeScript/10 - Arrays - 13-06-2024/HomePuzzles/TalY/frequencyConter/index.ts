const arr = [1, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6];

//function deceleration
function frequencyCounter(array: number[]): number[] | undefined {
    try {
        //get array

        //count how much in each number
        const counted: number[] = [];

        for (let elm of array) {
            console.log(elm)
            if (!counted[elm]) {
                counted[elm] = 1
            } else {
                counted[elm]++;
            }
        }

        console.log(counted)

        //go over counted
        

        //return array of ordered numbers
        return []

    } catch (error) {
        console.error(error)
        return undefined
    }
}

//invoke function
console.log(frequencyCounter(arr))