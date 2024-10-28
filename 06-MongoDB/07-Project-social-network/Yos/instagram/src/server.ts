import express from "express";
import path from "path";
import fs from "fs";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';


const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use(express.static(path.join(__dirname, "../public")));

//get secret file
const secretPath = path.resolve(
  __dirname,
  "C:/Users/ShorY/source/repos/Yoss_Full_Stack_Course_March_24/FullStack_March_2024/secret/mongodb.json"
);
const secret = JSON.parse(fs.readFileSync(secretPath, "utf-8"));

//get mongodb uri
const mongodbUri = secret.mongodb.uri;

//connection to db
mongoose
  .connect(mongodbUri)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err: any) => {
    console.log(err);
  });


app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });