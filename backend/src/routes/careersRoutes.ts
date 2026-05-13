import express from "express";
import {
  createCareers,
  getAllCareers,
  getCareersBySlug,
  updateCareers,
  deleteCareers,
  getSearchCareers,
} from "../controllers/careersController";
import { protect } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/search", getSearchCareers);
router.get("/", getAllCareers);
router.get("/:slug", getCareersBySlug);
router.post("/", protect, createCareers);
router.patch("/:id", protect, updateCareers);
router.delete("/:id", protect, deleteCareers);

export default router;
