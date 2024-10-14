import express from 'express';
import petsRouter from "./routes/petsRoutes";
import clientsRouter from "./routes/clientsRoutes";
import booksRouter from "./routes/booksRoutes";
import authorsRouter from "./routes/authorsRoutes";

const app = express();
const port = 3000;


//connection to db
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://orlyjonathan:RPGlEXtRjIGBEfH2@orly.s78ke.mongodb.net/').then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});


app.use(express.json());


app.use(express.static('public'));



app.use('/books',booksRouter)
app.use('/authors',authorsRouter)

app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})