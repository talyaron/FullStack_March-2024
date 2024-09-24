import express from 'express';
const app = express()
const port = 3000;

app.use(express.json());
app.use(express.static('public'))

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`);
});