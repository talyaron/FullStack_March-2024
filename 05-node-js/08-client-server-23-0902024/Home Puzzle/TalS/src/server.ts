import express, { Router } from 'express';
import playersRouter from './routes/squadRoutes';

const app = express()
const port = 3000;

app.use(express.json());
app.use(express.static('public'))

app.use('/players',playersRouter);

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`);
});