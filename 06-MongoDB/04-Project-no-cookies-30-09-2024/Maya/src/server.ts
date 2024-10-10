import express from 'express';
import petsRouter from "./routes/ProductRoutes";
import clientsRouter from "./routes/clientsRoutes";
const app = express();
const port = 3000;


//connection to db
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mayalevy20:e0ok6g2sVajOLOhu@cluster0.emeus.mongodb.net/Persona-project').then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});


app.use(express.json());


app.use(express.static('public'));

app.use('/coffee',petsRouter)
app.use('/clients',clientsRouter)

app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})