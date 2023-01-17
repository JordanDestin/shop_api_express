import { Router } from "express";
import { getAllProducts, createProduct, getProduct } from "../controllers/productController.js";
const router = Router();

router.get("/products",getAllProducts);
router.post("/products",createProduct);
router.get("/products/:id",getProduct);


export default router;