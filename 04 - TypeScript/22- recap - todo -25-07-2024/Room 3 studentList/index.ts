class Student {
    name: string;
    id: string;
    constructor(name:string) {
        this.name = name;
        this.id =`id-${crypto.randomUUID}()`;
    }
}