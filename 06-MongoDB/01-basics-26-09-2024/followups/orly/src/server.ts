import express from 'express';
import petsRouter from "./routes/petsRoutes";
const app = express()
const port = 3004;


//connection to db
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://orlyjonathan:RPGlEXtRjIGBEfH2@orly.s78ke.mongodb.net/').then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});

const Cat = mongoose.model('Cat', { name: String, date:String }); //create a model/ schema

const kitty = new Cat({ name: 'Kitty', date:'2021-09-26' }); //instance of the model
kitty.save().then(() => console.log('meow')).catch((err:any)=>console.log(err)); //save the instance to the db






app.use(express.json());


app.use(express.static('public'));

app.use('/pets',petsRouter)

app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})