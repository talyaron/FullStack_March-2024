import express from "express";
import petsRouter from "./routes/petsRoutes";
import path from "path";
import fs from "fs";
import mongoose from "mongoose";
import {MongoDBConnector} from "./mongodb_connector/mongodbConnector";


const app = express();
const port = 3000;

 //read mongodb json settings
const secretPath = path.resolve(__dirname, './secret/mongodb.json');
const secret = JSON.parse(fs.readFileSync(secretPath, 'utf-8'));

const mongodbUri = secret.mongodb.uri;
// const mongodbConnector = new MongoDBConnector(mongodbUri);
// mongodbConnector.connect();


//connect to mongodb
mongoose.connect(mongodbUri, {
  serverSelectionTimeoutMS: 5000, 
}).then(() => {
  console.log('Successfully connected to MongoDB Atlas!');
}).catch((err) => {
  console.error('Error connecting to MongoDB Atlas:', err);
});



app.use(express.json());

app.use(express.static("public"));

app.use("/api/pets", petsRouter);

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
