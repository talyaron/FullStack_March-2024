import express from 'express';       
const app = express();
const port = 3004;
import cookieParser from 'cookie-parser';
import usersRouter from './routes/userRoutes';
import recipeRouter from './routes/recipeRoutes';
import categoryRoutes from './routes/categoryRoutes';
import 'dotenv/config'





//connection to db
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://orlyjonathan:RPGlEXtRjIGBEfH2@orly.s78ke.mongodb.net/fs-mrc24/recipes').then(()=>{
    console.log('connected to db')
})
.catch((err:any)=>{
    console.log(err)
});

app.use(express.json());
app.use(cookieParser());


app.use(express.static('public'));

app.post('/api/auth/register', (req, res) => {  res.status(200).json({ message: 'Registration successful' }); 
}); 

app.post('/api/auth/login', (req, res) => {  res.status(200).json({ message: 'Login successful' });
});

app.use('/User',usersRouter);
app.use('/Recipe',recipeRouter);
app.use('/api/categories', categoryRoutes);


app.get('/', (req:any, res:any) => { 
  res.send('Hello World!')
})

app.listen(3004, () => { console.log('Server is running on port 3004'); 
});