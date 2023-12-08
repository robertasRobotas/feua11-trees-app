let trees = [
  { id: "xxxxxx", specie: "Azuolas", unit: 30 },
  { id: "yyyyyy", specie: "Berzas", unit: 15 },
  { id: "zzzzzz", specie: "Elgle", unit: 200 },
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

const UPDATE_TREE = (req, res) => {
  const index = trees.findIndex((tree) => {
    return tree.id === req.params.id;
  });

  if (index === -1) {
    return res
      .status(400)
      .json({ message: `tree with id ${req.params.id} does not exist` });
  }

  trees[index] = { ...trees[index], ...req.body };

  return res.status(200).json({ trees: trees[index] });
};

const DELETE_TREE = (req, res) => {
  console.log(req.params.id);

  const filteredTrees = trees.filter((tree) => {
    return tree.id !== req.params.id;
  });

  trees = filteredTrees;

  return res.status(200).json({ trees: trees });
};

export { GET_TREES, GET_TREES_BY_ID, ADD_TREE, UPDATE_TREE, DELETE_TREE };
