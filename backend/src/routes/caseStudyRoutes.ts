import express from "express";
import {
  createCaseStudy,
  getAllCaseStudy,
  getCaseStudyBySlug,
  updateCaseStudy,
  deleteCaseStudy,
  downloadCaseStdyFile,
} from "../controllers/caseStudyController";
import { protect } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/file/:id", downloadCaseStdyFile);
router.get("/", protect, getAllCaseStudy);
router.get("/:slug", getCaseStudyBySlug);
router.post("/", protect, createCaseStudy);
router.patch("/:id", protect, updateCaseStudy);
router.delete("/:id", protect, deleteCaseStudy);

export default router;
