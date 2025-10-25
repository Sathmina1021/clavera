import { Router } from "express";
import { createPlan, getPlans } from "../controllers/planController.js";

const router = Router();
router.post("/", createPlan);
router.get("/", getPlans);

export default router;
