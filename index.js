const express = require("express");
const app = express();

app.use(express.json());

const trees = [
  { specie: "Azuolas", unit: 30 },
  { specie: "Berzas", unit: 15 },
  { specie: "Elgle", unit: 200 },
];

app.get("/getCompanyName", (req, res) => {
  return res.status(200).json({ companyName: "medinukai" });
});

app.get("/getTrees", (req, res) => {
  return res.status(200).json({ trees: trees });
});

app.post("/addTree", (req, res) => {
  if (req.body.specie && req.body.unit) {
    const isTreeExists = trees.some((tree) => tree.specie === req.body.specie);

    if (!isTreeExists) {
      const tree = { specie: req.body.specie, unit: req.body.unit };
      trees.push(tree);
      return res.status(200).json({ tree: tree });
    }

    return res.status(400).json({ message: "this tree already exists" });
  }
  return res.status(400).json({ message: "Please add all required data" });
});

app.listen(3000, () => {
  console.log("App started");
});
