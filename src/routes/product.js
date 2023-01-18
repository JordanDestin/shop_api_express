import { Router } from "express";
import { getAllProducts, createProduct, getProduct, updateProduct, deleteProduct } from "../controllers/productController.js";
const router = Router();

router.get("/products",getAllProducts);
router.post("/products",createProduct);
router.get("/products/:id",getProduct);
router.put("/products/:id",updateProduct);
router.delete("/products/:id",deleteProduct);

export default router;