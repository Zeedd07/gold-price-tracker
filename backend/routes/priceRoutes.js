import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getGoldPrice } from "../controllers/priceController.js";

const router = express.Router();

router.get("/prices", authMiddleware, getGoldPrice);

export default router;
