// routes/admin.js
import express from "express";
import { changeUserRole } from "../controllers/adminController.js";
import { requireRole } from "../middlewares/requireRole.js";

const router = express.Router();

router.put("/change-role", requireRole("admin"), changeUserRole);

export default router;
