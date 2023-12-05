const trees = [
  { id: 1, specie: "Azuolas", unit: 30 },
  { id: 2, specie: "Berzas", unit: 15 },
  { id: 3, specie: "Elgle", unit: 200 },
];

const GET_TREES = (req, res) => {
  return res.status(200).json({ trees: trees });
};

const GET_TREES_BY_ID = (req, res) => {
  const tree = trees.find((t) => t.id === Number(req.params.id));

  if (tree) {
    return res.status(200).json({ tree: tree });
  }

  return res
    .status(404)
    .json({ message: `Tree with id ${req.params.id} does not exists` });
};

const ADD_TREE = (req, res) => {
  if (!req.body.specie || !req.body.unit) {
    return res.status(400).json({ message: "Please add all required data" });
  }

  const isTreeExists = trees.some((tree) => tree.specie === req.body.specie);

  if (isTreeExists) {
    return res.status(400).json({ message: "this tree already exists" });
  }

  const tree = { specie: req.body.specie, unit: req.body.unit };
  trees.push(tree);
  return res.status(200).json({ tree: tree });
};

module.exports = { GET_TREES, GET_TREES_BY_ID, ADD_TREE };
