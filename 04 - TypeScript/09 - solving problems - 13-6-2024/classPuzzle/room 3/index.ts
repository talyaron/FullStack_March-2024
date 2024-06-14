function sorting(num1: number, num2: number, num3: number, num4: number): string | undefined {

    let array: number[] = [num1, num2, num3, num4];
    let sol: number[] = [];
    try {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (array[j] < array[i]) {
                    sol[i] = array[j];
                }
            }
        }
    } catch (error) {

    }
}

5,3,0,6