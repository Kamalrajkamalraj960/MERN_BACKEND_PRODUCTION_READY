import express from "express";
import { getTasks } from "../controllers/taskController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", isAuthenticated, getTasks);

export default router;
