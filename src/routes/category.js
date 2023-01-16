import { Router } from "express";
import { getAllCategory, createCategory } from "../controllers/categoryController.js";

const router = Router();
router.get("/categories",getAllCategory);
router.post("/categories",createCategory);

export default router;

