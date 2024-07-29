export class Task {
    id: string
    description: string
    done: boolean
    edit: boolean
    constructor( description:string){
        this.id = `id-${crypto.randomUUID()}`;
        this.description = description;
        this.done = false;
        this.edit = false;
    }
}

export const tasks: Task[] = [];

for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    const task = JSON.parse(localStorage.getItem(key!)!);
    tasks.push(task!);
  }