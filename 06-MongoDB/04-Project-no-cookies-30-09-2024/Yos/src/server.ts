import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const port = 3000;

app.use(express.json());
// app.use(express.static("public"));
// app.use("/users", express.static(path.join(__dirname, "../users")));
// app.use("/", express.static(path.join(__dirname, "../public")));

console.log(__dirname);
app.use("/api/products", require("./routes/productsRoutes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
