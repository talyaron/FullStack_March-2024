import express from 'express';
import usersRouter from './routes/users/usersRoutes';
import postsRouter from './routes/posts/postRoutes'
const app = express();
import cookieParser from 'cookie-parser';
const port = 3003;


//connection to db
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://orlyjonathan:RPGlEXtRjIGBEfH2@orly.s78ke.mongodb.net/').then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});


app.use(express.json());
app.use(cookieParser());


app.use(express.static('public'));

app.use('/users',usersRouter)

app.use('/posts', postsRouter);


app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})