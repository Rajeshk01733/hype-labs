import express from "express";
import {
  createTestimonials,
  getAllTestimonials,
  getTestimonialsById,
  updateTestimonials,
  deleteTestimonials,
} from "../controllers/testimonialsController";
import { protect } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/", getAllTestimonials);
router.get("/:id", protect, getTestimonialsById);
router.post("/", protect, createTestimonials);
router.patch("/:id", protect, updateTestimonials);
router.delete("/:id", protect, deleteTestimonials);

export default router;
