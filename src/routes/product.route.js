import express from "express";

// import fungsi logic dari controller
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
  patchProduct,
} from "../controllers/product.controller.js";

// router = versi kecil dari app
const router = express.Router();

// GET /product
router.get("/", getAllProducts);

// GET /product/:id
router.get("/:id", getProductById);

// POST /product
router.post("/", createProduct);

// DELETE /product/:id
router.delete("/:id", deleteProduct);

// PUT /product/:id
router.put("/:id", updateProduct);

// PATCH /product/:id
router.patch("/:id", patchProduct);

// export router supaya bisa dipakai app.js
export default router;
