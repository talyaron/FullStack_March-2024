import express from 'express';
const app = express()
const port = 3000;

//body parser
app.use(express.json()) //parse json data

app.get('/data', (req: any, res: any) => {
  res.send('Hello World!')
})
app.use(express.static('public'))
app.use(express.static('files'))


console.log("Hello World")

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})