const express = require("express");
const router = express.Router();

const {
  GET_TREES,
  GET_TREES_BY_ID,
  ADD_TREE,
} = require("../controllers/trees");

router.get("/trees", GET_TREES);
router.get("/trees/:id", GET_TREES_BY_ID);
router.post("/trees", ADD_TREE);

module.exports = router;
