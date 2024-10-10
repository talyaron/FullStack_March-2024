import express from 'express';
import ProductRoutes from "../routes/ProductRoutes";
import UserRoutes from "../routes/UserRoutes";
const app = express();
const port = 3000;


app.use(session({
    secret: 'orly1234', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true } 
}));

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

app.use('/product',ProductRoutes)
app.use('/user',UserRoutes)

app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})