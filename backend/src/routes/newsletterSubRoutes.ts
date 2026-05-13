import express from "express";
import {
  createNewsletterSub,
  getAllNewsletterSub,
  getNewsletterSubById,
  updateNewsletterSub,
  deleteNewsletterSub,
} from "../controllers/newsletterSubController";
import { protect } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/", protect, getAllNewsletterSub);
router.get("/:id", protect, getNewsletterSubById);
router.post("/", createNewsletterSub);
router.patch("/:id", protect, updateNewsletterSub);
router.delete("/:id", protect, deleteNewsletterSub);

export default router;
