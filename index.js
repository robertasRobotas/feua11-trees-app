import express from "express";
import mongoose from "mongoose";
import treesRouter from "./src/routes/trees.js";

import "dotenv/config";

const app = express();

app.use(express.json());

app.use(treesRouter);

mongoose
  .connect(process.env.MONGODB_CONNECTION)
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log(`App started on port ${process.env.PORT}`);
});
