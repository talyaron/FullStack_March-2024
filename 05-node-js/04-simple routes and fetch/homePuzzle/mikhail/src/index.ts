import express from 'express'
const app = express()
const port = 3000

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
    const { id, progress,title,description } = req.body;
    if (!id || !progress || !title ||!description) throw new Error("task error");

    const newTask = new Todo(id,progress,title,description);
    tasks.push(newTask);

    res.send({ ok: true })
  } catch (error:any) {
    console.error(error)
    res.send({ ok: false, error: error.message })
  }
}
app.post("/add-student",addTask)




app.use(express.static('public'))
app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})