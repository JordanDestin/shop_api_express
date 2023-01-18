import { Router } from "express";
import { getAllCategory, createCategory, getCategory, updateCategory, deleteCategory } from "../controllers/categoryController.js";

const router = Router();
router.get("/categories",getAllCategory);
router.post("/categories",createCategory);
router.get("/categories/:id",getCategory);
router.put("/products/:id",updateCategory);
router.delete("/products/:id",deleteCategory);

export default router;

