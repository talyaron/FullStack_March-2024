import express from "express";
import path from "path";
import fs from "fs";
import productsRoutes from "./routes/productsRoutes";
import usersRoutes from "./routes/userRoutes";
import mongoose from "mongoose";

const app = express();
const port = 3000;


//read mongodb json settings
const secretPath = path.resolve(__dirname, "./secret/mongodb.json");
const secret = JSON.parse(fs.readFileSync(secretPath, "utf-8"));

const mongodbUri = secret.mongodb.uri;
mongoose.connect(mongodbUri).then(()=>{
    console.log('connected to db')
  })
  .catch((err:any)=>{
    console.log(err)
  });

app.use(express.json());

  
// app.use(express.static("public"));
// app.use("/users", express.static(path.join(__dirname, "../users")));
// app.use("/", express.static(path.join(__dirname, "../public")));

console.log(__dirname);
app.use("/api/products", productsRoutes);
app.use("/api/users", productsRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
