export class todo{
    id:string;
    progress:string;
    title:string;
    description:string;

    constructor(title:string,description:string){
        this.progress="new";
        this.id=crypto.randomUUID();
        this.title=title;
        this.description=description;
    }
    setDescription(description:string){
        this.description=description;
    }
    setTitle(title:string){
        this.title=title;
    }
}