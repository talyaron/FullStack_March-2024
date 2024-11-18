import express from 'express';
import usersRouter from './routes/users/usersRoutes';
import PetsRouter from './routes/pets/petsRoutes';
const app = express();
import cookieParser from 'cookie-parser';
const port = 3000;

require('dotenv').config()
console.log(process.env)

//connection to db
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://israelcohen:<db_password>@cluster0.8dupj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});

//middlewares
app.use(express.json());
app.use(cookieParser());


app.use(express.static('public'));

app.use('/users',usersRouter);
app.use('/pets',PetsRouter);


app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})