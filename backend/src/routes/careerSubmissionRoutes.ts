import express from "express";

import {
  createCareersSubmission,
  getAllCareersSubmission,
  getCareersSubmissionById,
  updateCareersSubmission,
  deleteCareersSubmission,
} from "../controllers/careersSubController";

import { protect } from "../middlewares/authMiddleware";

import { upload } from "../middlewares/uploadMiddleware";

const router = express.Router();

router.get("/", protect, getAllCareersSubmission);

router.get("/:id", protect, getCareersSubmissionById);

router.post("/", upload.single("resume"), createCareersSubmission);

router.patch("/:id", protect, updateCareersSubmission);

router.delete("/:id", protect, deleteCareersSubmission);

export default router;
