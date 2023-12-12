import TreeModel from "../models/tree.js";

const GET_TREES = async (req, res) => {
  try {
    const trees = await TreeModel.find();
    return res.status(200).json({ trees: trees });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something happened" });
  }
};

const GET_TREES_BY_ID = async (req, res) => {
  try {
    const trees = await TreeModel.findOne({ _id: req.params.id });
    return res.status(200).json({ trees: trees });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something happened" });
  }
};

const ADD_TREE = async (req, res) => {
  try {
    const tree = new TreeModel({
      specie: req.body.specie,
      unit: req.body.unit,
      unitPrice: req.body.unitPrice,
    });

    const response = await tree.save();

    return res
      .status(201)
      .json({ tree: response, message: "Tree added successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something happened" });
  }
};

const UPDATE_TREE = async (req, res) => {
  try {
    const response = await TreeModel.updateOne(
      { _id: req.params.id },
      { ...req.body }
    );

    return res.status(200).json({ status: "updated", response: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something happened" });
  }
};

// const DELETE_TREE = (req, res) => {
//   console.log(req.params.id);

//   const filteredTrees = trees.filter((tree) => {
//     return tree.id !== req.params.id;
//   });

//   trees = filteredTrees;

//   return res.status(200).json({ trees: trees });
// };

export { GET_TREES, GET_TREES_BY_ID, ADD_TREE, UPDATE_TREE };
