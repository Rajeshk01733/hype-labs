import express from "express";
import {
  createCaseStudyDownload,
  getAllCaseStudyDownload,
  getCaseStudyDownloadById,
  updateCaseStudyDownload,
  deleteCaseStudyDownload,
} from "../controllers/CaseStudyDownloadController";
import { protect } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/", protect, getAllCaseStudyDownload);
router.get("/:id", protect, getCaseStudyDownloadById);
router.post("/", createCaseStudyDownload);
router.patch("/:id", protect, updateCaseStudyDownload);
router.delete("/:id", protect, deleteCaseStudyDownload);

export default router;
