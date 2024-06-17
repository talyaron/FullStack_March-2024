function sortNumbers(a: number, b: number, c: number, d: number): string {
    try {
        let minimum = Math.min(a, b, c, d);
        let maximum = Math.max(a, b, c, d);
        let middle1, middle2;

        if ((a !== minimum && a !== maximum) && (b !== minimum && b !== maximum)) {
            middle1 = Math.min(a, b);
            middle2 = Math.max(a, b);
        } else if ((a !== minimum && a !== maximum) && (c !== minimum && c !== maximum)) {
            middle1 = Math.min(a, c);
            middle2 = Math.max(a, c);
        } else if ((a !== minimum && a !== maximum) && (d !== minimum && d !== maximum)) {
            middle1 = Math.min(a, d);
            middle2 = Math.max(a, d);
        } else if ((b !== minimum && b !== maximum) && (c !== minimum && c !== maximum)) {
            middle1 = Math.min(b, c);
            middle2 = Math.max(b, c);
        } else if ((b !== minimum && b !== maximum) && (d !== minimum && d !== maximum)) {
            middle1 = Math.min(b, d);
            middle2 = Math.max(b, d);
        } else {
            middle1 = Math.min(c, d);
            middle2 = Math.max(c, d);
        }
        return `${minimum}, ${middle1}, ${middle2}, ${maximum}`;
    }
    catch (error) {
        return error.message;
}
}
console.log(sortNumbers(10, 8, 25, 4));
console.log(sortNumbers(4, 2, 1, 3));
console.log(sortNumbers(100, 3, 5, 20));
