import express from 'express';
import usersRouter from './routes/users/usersRoutes';
const app = express();
import cookieParser from 'cookie-parser';
const port = 3000;


//connection to db
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tal:k8w0S6ztTx3zowGW@cluster0.0hzknon.mongodb.net/fs-mrc24').then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});

//middlewares
app.use(express.json());
app.use(cookieParser());


app.use(express.static('public'));

app.use('/users',usersRouter)


app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})