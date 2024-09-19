import express from 'express'
const app = express()
const port = 3000
app.use(express.json());

class Todo {
  id: string;
  progress: string;
  title: string;
  description: string;

  constructor(id:string,progress:string, title: string, description: string) {
    this.progress = progress;
    this.id = id;
    this.title = title;
    this.description = description;
  }

  setDescription(description: string) {
    this.description = description;
  }

  setTitle(title: string) {
    this.title = title;
  }
  
  setProgress(progress: string) {
    this.progress = progress;
  }
}
const tasks:Todo[]=[];




const  addTask = (req: any, res: any) => {
  try {
    console.log(req.body);
    const { id, title,description,progress } = req.body;
    
    if (!id || !progress || !title ||!description) throw new Error("task error");

    const newTask = new Todo(id,progress,title,description);
    tasks.push(newTask);

    res.send({ ok: true })
  } catch (error:any) {
    console.error(error)
    res.send({ ok: false, error: error.message })
  }
}
app.post("/api/add-task",addTask)


const  updateProgressDB = (req: any, res: any) => {
  try {
    console.log(req.body);
    const { id, progress} = req.body;
    if (!id || !progress ) throw new Error("task error");

    const task = tasks.find(task => task.id === id);
    if (!task) throw new Error("Task not found in DB")
      task.setProgress(progress);

    res.send({ ok: true })
  } catch (error:any) {
    console.error(error)
    res.send({ ok: false, error: error.message })
  }
}
app.patch("/api/update-progress",updateProgressDB)


const  deleteTask = (req: any, res: any) => {
  try {
    
    const {taskID} = req.params;
    

    if (!taskID) throw new Error("bad task ID");

    const taskIndex = tasks.findIndex(task => task.id === taskID);
    if (taskIndex === -1) throw new Error("Task not found");

    tasks.splice(taskIndex, 1);

    res.send({ ok: true })
  } catch (error:any) {
    console.error(error)
    res.send({ ok: false, error: error.message })
  }
}
app.delete("/api/delete-task/:taskID",deleteTask)

const  getTasks = (req: any, res: any) => {
  try {
    
    res.json(tasks)
  } catch (error:any) {
    console.error(error)
    res.send({ ok: false, error: error.message })
  }
}
app.get("/api/get-tasks",getTasks)

app.use(express.static('public'))
app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})