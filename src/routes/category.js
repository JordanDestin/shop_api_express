import { Router } from "express";
import { getAllCategory } from "../controllers/categoryController.js";

const router = Router();
router.get("/categories",getAllCategory);

export default router;

