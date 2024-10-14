import express from 'express';
import usersRouter from './routes/users/usersRoutes';
const app = express();
const port = 3000;


//connection to db
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tal:k8w0S6ztTx3zowGW@cluster0.0hzknon.mongodb.net/instagram').then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});


app.use(express.json());



app.use(express.static('public'));

app.use('/users',usersRouter)


app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})