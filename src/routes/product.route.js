import express from "express";

import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
  patchProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", updateProduct);

router.patch("/:id", patchProduct);

export default router;
