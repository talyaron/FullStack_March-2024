import express from 'express';
import usersRouter from './routes/users/usersRoutes';
import PetsRouter from './routes/pets/petsRoutes';
const app = express();
import cookieParser from 'cookie-parser';
const port = 3001;


//connection to db
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://orlyjonathan:RPGlEXtRjIGBEfH2@orly.s78ke.mongodb.net/test/Dogs').then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});

const Pet = mongoose.model('Dog', { name: 'String', age: 'Number', species: 'String', price: 'Number', imageURL:'String' });

const pet = new Pet({ name: 'rocky', age: 13, species: 'dog', price: 50, imageURL: 'https://images.squarespace-cdn.com/content/v1/54822a56e4b0b30bd821480c/45ed8ecf-0bb2-4e34-8fcf-624db47c43c8/Golden+Retrievers+dans+pet+care.jpeg' });
pet.save().then(() => console.log('pet saved')).catch((err:any)=>console.log(err));  


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

