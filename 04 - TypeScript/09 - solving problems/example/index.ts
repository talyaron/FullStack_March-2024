function highestNumber(n1: number, n2: number, n3?: number, n4?: number): number | undefined {
    try {
        if (n4 && n3) {
            if (n4 > n1 && n4 > n2 && n4 > n3) {
                return n4;
            } else if (n3 > n4 && n3 > n2 && n3 > n1) {
                return n3
            } else if (n1 > n2 && n1 > n3 && n1 > n4) {
                return n1
            } else if (n2 > n1 && n2 > n3 && n2 > n4) {
                return n2;
            }

        } else if (n3) {
            if (n3 > n2 && n3 > n1) {
                return n3
            } else if (n1 > n2 && n1 > n3) {
                return n1
            } else if (n2 > n1 && n2 > n3) {
                return n2;
            }
        } else {
            if (n1 > n2) {
                return n1
            } else {
                return n2;
            }
        }

        throw new Error("couldn't find the highest number")


    } catch (error) {
        console.error(error);
        return undefined
    }
}