import express from "express";
import {
  createEnquireForm,
  getAllEnquireForm,
  getEnquireFormById,
  updateEnquireForm,
  deleteEnquireForm,
} from "../controllers/enquireFormController";
import { protect } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/", protect, getAllEnquireForm);
router.get("/:id", protect, getEnquireFormById);
router.post("/", createEnquireForm);
router.patch("/:id", protect, updateEnquireForm);
router.delete("/:id", protect, deleteEnquireForm);

export default router;
