import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { ContactForm } from "../models/ContactForm";

export const createContactForm = asyncHandler(
  async (req: Request, res: Response) => {
    const contactForm = await ContactForm.create(req.body);

    res.status(201).json({
      success: true,
      message: "Contact form form submitted successfully",
      data: contactForm,
    });
  },
);

export const getAllContactForm = asyncHandler(
  async (req: Request, res: Response) => {
    const limit = parseInt(req.query.limit as string) || 10;
    const page = parseInt(req.query.page as string) || 1;

    const skip = (page - 1) * limit;

    const [contactForms, total] = await Promise.all([
      ContactForm.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      ContactForm.countDocuments(),
    ]);

    res.status(200).json({
      success: true,
      message: "Contact form fetched successfully",
      data: contactForms,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  },
);

export const getContactFormById = asyncHandler(
  async (req: Request, res: Response) => {
    const contactForm = await ContactForm.findById(req.params.id).lean();

    if (!contactForm) {
      res.status(404).json({
        success: false,
        message: "Contact form not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Contact form fetched successfully",
      data: contactForm,
    });
  },
);

export const updateContactForm = asyncHandler(
  async (req: Request, res: Response) => {
    const contactForm = await ContactForm.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!contactForm) {
      res.status(404).json({
        success: false,
        message: "Contact form not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Contact form updated successfully",
      data: contactForm,
    });
  },
);

export const deleteContactForm = asyncHandler(
  async (req: Request, res: Response) => {
    const contactForm = await ContactForm.findByIdAndDelete(req.params.id);

    if (!contactForm) {
      res.status(404).json({
        success: false,
        message: "Contact form not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Contact form deleted successfully",
    });
  },
);

export const getSearchContactForm = asyncHandler(
  async (req: Request, res: Response) => {
    const { query, limit } = req.query;
    const resultLimit = parseInt(limit as string) || 10;

    const searchQuery: any = {};

    if (query && typeof query === "string") {
      searchQuery.$or = [
        { title: { $regex: query, $options: "i" } },
        { location: { $regex: query, $options: "i" } },
      ];
    }

    const result: any[] = [];

    res.status(200).json({
      success: true,
      message: "Contact forms fetched successfully",
      data: result,
    });
  },
);
