import mongoose from "mongoose";

const treeSchema = mongoose.Schema({
  specie: { type: String, required: true, min: 3 },
  unit: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
});

export default mongoose.model("Tree", treeSchema);
