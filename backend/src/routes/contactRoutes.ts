import express from "express";
import {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
} from "../controllers/contactController";
import { protect } from "../middlewares/authMiddleware";

const router = express.Router();

// Public routes
router.post("/", createContact);

// Protected routes
router.get("/", protect, getAllContacts);
router.get("/:id", protect, getContactById);
router.patch("/:id", protect, updateContact);
router.delete("/:id", protect, deleteContact);

export default router;
