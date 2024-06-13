function smallesttolargest(n1: number, n2: number, n3: number, n4: number): number | undefined {
    try {
        let smallest
        if (n1 < n2 && n1< n3 && n1 <n4) {
            return n1
        } else if(n2 <n1 && n2 < n3 && n2 < n4){
           return n2;
        }

       
    } catch (error) {
        console.error(error);
        return undefined
    }
}