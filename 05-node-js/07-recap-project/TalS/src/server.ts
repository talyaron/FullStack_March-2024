import express from "express";
import petsRouter from "./routes/petsRoutes";

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.static("public"));

app.use("/pets", petsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
