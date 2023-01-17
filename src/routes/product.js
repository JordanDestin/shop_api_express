import { Router } from "express";
import { getAllProducts, createProduct } from "../controllers/productController.js";
const router = Router();

router.get("/products",getAllProducts);
router.post("/products",createProduct);


export default router;