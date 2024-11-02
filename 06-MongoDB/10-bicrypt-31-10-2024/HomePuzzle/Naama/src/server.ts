import express from 'express';
import cookieParser from 'cookie-parser';
import 'dotenv/config';

const dbPassword=process.env.DBPASSWORD as string;
const app = express();
const port = 3000;
//connection to db
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${dbPassword}@cluster0.y2gab.mongodb.net/lalivirtuali2`).then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
//app.use('/route',route);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
