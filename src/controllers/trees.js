import TreeModel from "../models/tree.js";

let trees = [
  { id: "xxxxxx", specie: "Azuolas", unit: 30 },
  { id: "yyyyyy", specie: "Berzas", unit: 15 },
  { id: "zzzzzz", specie: "Elgle", unit: 200 },
];

const GET_TREES = async (req, res) => {
  const trees = await TreeModel.find();
  return res.status(200).json({ trees: trees });
};

const GET_TREES_BY_ID = async (req, res) => {
  const trees = await TreeModel.findOne({ _id: req.params.id });
  return res.status(200).json({ trees: trees });
};

const ADD_TREE = async (req, res) => {
  const tree = new TreeModel({
    specie: req.body.specie,
    unit: req.body.unit,
    unitPrice: req.body.unitPrice,
  });

  const response = await tree.save();

  return res
    .status(201)
    .json({ tree: response, message: "Tree added successfully" });
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
