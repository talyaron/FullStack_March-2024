import express from 'express';
const app = express()
const port = 3000;

//body parser
app.use(express.json()) //parse json data

console.log("Hello World")
app.use(express.static('public')) //serve static files from folder "public"

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })