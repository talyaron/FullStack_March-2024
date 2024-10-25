import express from 'express';
import usersRouter from "./routes/userRoutes";
import booksRouter from "./routes/bookRoutes";
const app = express()
import cookieParser from 'cookie-parser';
const port = 3000;
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://naamal:16546nly@cluster0.y2gab.mongodb.net/creative-world').then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});
app.use(express.json());
app.use(cookieParser());
app.use(express.static('./public'));

// Routes
app.use('/books',booksRouter);
app.use('/users',usersRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })