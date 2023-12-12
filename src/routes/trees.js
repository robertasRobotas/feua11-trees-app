import { Router } from "express";
const router = Router();

import {
  GET_TREES,
  GET_TREES_BY_ID,
  ADD_TREE,
  UPDATE_TREE,
  // DELETE_TREE,
} from "../controllers/trees.js";

router.get("/trees", GET_TREES);
router.get("/trees/:id", GET_TREES_BY_ID);
router.post("/trees", ADD_TREE);
router.put("/trees/:id", UPDATE_TREE);
// router.delete("/trees/:id", DELETE_TREE);

export default router;
