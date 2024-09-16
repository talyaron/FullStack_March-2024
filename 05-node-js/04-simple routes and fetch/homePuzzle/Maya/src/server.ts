import express from 'express';
const app = express()
const port = 3000;

//body parser
app.use(express.json());
let todos: { id: number; title: string }[] = [];


console.log("Hello World")

app.get('/api/get-todos', (req: Request, res: Response) => {
  res.json(todos);
});
app.post('/api/add-todo', (req: Request, res: Response) => {
  const { title } = req.body;

  if (!title || typeof title !== 'string') {
    return res.status(400).json({ error: 'Invalid title' });
  }

  const newTodo = {
    id: todos.length + 1,
    title
  };
  
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});