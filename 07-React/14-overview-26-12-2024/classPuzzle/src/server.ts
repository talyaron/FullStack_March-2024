import express from 'express';
import  cors from 'cors';
import 'dotenv/config';
import usersRouter from './routes/users/usersRoutes';
import PetsRouter from './routes/pets/petsRoutes';
const app = express();
import cookieParser from 'cookie-parser';
const port = 3000;



//connection to db
import mongoose from 'mongoose';

const dbUrl = process.env.DB_URL
const database = process.env.DB_NAME

mongoose.connect(`${dbUrl}/${database}`).then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});

//middlewares
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.static('public'));

const apiRouter = express.Router();

import jokesRouters from './routes/jokes/jokesRoutes';

apiRouter.use('/users', usersRouter);
apiRouter.use('/pets', PetsRouter);
apiRouter.use('/jokes', jokesRouters);


app.use('/api', apiRouter);


app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})