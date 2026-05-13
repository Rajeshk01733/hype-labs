import express from "express";
import {
  createInsights,
  getAllInsights,
  getInsightsBySlug,
  updateInsights,
  deleteInsights,
  getInsightsAndCaseStudy,
  downloadInsightsFile,
} from "../controllers/insightsController";
import { protect } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/file/:id", downloadInsightsFile);
router.get("/insights-case-study", getInsightsAndCaseStudy);
router.get("/", protect, getAllInsights);
router.get("/:slug", getInsightsBySlug);
router.post("/", protect, createInsights);
router.patch("/:id", protect, updateInsights);
router.delete("/:id", protect, deleteInsights);

export default router;
