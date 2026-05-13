import express from "express";
import {
  createInsightDownload,
  getAllInsightDownload,
  getInsightDownloadById,
  updateInsightDownload,
  deleteInsightDownload,
} from "../controllers/insightDownloadController";
import { protect } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/", protect, getAllInsightDownload);
router.get("/:id", protect, getInsightDownloadById);
router.post("/", createInsightDownload);
router.patch("/:id", protect, updateInsightDownload);
router.delete("/:id", protect, deleteInsightDownload);

export default router;
