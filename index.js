const express = require("express");
const app = express();
const treesRouter = require("./src/routes/trees");

app.use(express.json());

app.use(treesRouter);

app.listen(3000, () => {
  console.log("App started");
});
