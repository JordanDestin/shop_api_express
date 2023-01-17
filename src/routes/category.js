import { Router } from "express";
import { getAllCategory, createCategory, getCategory } from "../controllers/categoryController.js";

const router = Router();
router.get("/categories",getAllCategory);
router.post("/categories",createCategory);
router.get("/categories/:id",getCategory);

export default router;

