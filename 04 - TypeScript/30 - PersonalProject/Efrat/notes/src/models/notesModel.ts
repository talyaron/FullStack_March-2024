export class Note{
    id:string;
    title:string;
    description:string;
    status:string;
    createdDate:string;
    dueDate?:String;
    
    constructor(title:string,description:string,status:string){
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.status = status;
        const date = new Date();
        const currentDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
        this.createdDate = currentDate;
        this.dueDate = "";
    }
    newNote(note:Note):boolean{
        try {
            if(notes.push(note)){
                return true;
            }else{
                return false
            }
        } catch (error) {
            console.error(error)
            return false
        }  
    }
  
}

export const notes:Note[] = [];