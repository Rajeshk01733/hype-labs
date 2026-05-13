import express from "express";
import {
  createContactForm,
  getAllContactForm,
  getContactFormById,
  updateContactForm,
  deleteContactForm,
} from "../controllers/contactFormController";
import { protect } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/", protect, getAllContactForm);
router.get("/:id", protect, getContactFormById);
router.post("/", createContactForm);
router.patch("/:id", protect, updateContactForm);
router.delete("/:id", protect, deleteContactForm);

export default router;
