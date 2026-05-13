import express from "express";
import {
  createBrochureDownload,
  getAllBrochureDownload,
  getBrochureDownloadById,
  updateBrochureDownload,
  deleteBrochureDownload,
} from "../controllers/brochureDownloadController";
import { protect } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/", protect, getAllBrochureDownload);
router.get("/:id", protect, getBrochureDownloadById);
router.post("/", createBrochureDownload);
router.patch("/:id", protect, updateBrochureDownload);
router.delete("/:id", protect, deleteBrochureDownload);

export default router;
