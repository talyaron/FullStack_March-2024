import express from 'express';
import booksRouter from "./routes/bookRoutes";
import usersRouter from "./routes/userRoutes";
const app = express()
const port = 3000;
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://naamal:16546nly@cluster0.y2gab.mongodb.net/creative-world').then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});
app.use(express.json());
app.use(express.static('./client/public'));

// Routes
app.use('/books',booksRouter);
app.use('/users',usersRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })