import express from "express";
import treesRouter from "./src/routes/trees.js";

const app = express();

app.use(express.json());

app.use(treesRouter);

app.listen(3000, () => {
  console.log("App started");
});
