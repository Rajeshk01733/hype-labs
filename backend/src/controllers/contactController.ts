import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { Contact } from "../models/Contact";

export const createContact = asyncHandler(
  async (req: Request, res: Response) => {
    const {
      firstName,
      lastName,
      email,
      phone,
      businessName,
      businessSize,
      budget,
      message,
      services,
      websiteAddress,
      companyName,
      sourcePage,
      sourcePath,
      sectionName,
      additionalData,
    } = req.body;

    // Validate required fields
    if (
      !firstName ||
      !email ||
      !phone ||
      !sourcePage ||
      !sourcePath ||
      !sectionName
    ) {
      res.status(400).json({
        success: false,
        message:
          "firstName, email, phone, sourcePage, sourcePath, and sectionName are required",
      });
      return;
    }

    // Create contact
    const contact = await Contact.create({
      firstName,
      lastName,
      email,
      phone,
      businessName,
      businessSize,
      budget,
      message,
      services,
      websiteAddress,
      companyName,
      sourcePage,
      sourcePath,
      sectionName,
      additionalData,
    });

    res.status(201).json({
      success: true,
      message: "Contact submitted successfully",
      data: contact,
    });
  },
);

export const getAllContacts = asyncHandler(
  async (req: Request, res: Response) => {
    const limit = parseInt(req.query.limit as string) || 10;
    const page = parseInt(req.query.page as string) || 1;
    const skip = (page - 1) * limit;

    const [contacts, total] = await Promise.all([
      Contact.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Contact.countDocuments(),
    ]);

    const totalPages = Math.ceil(total / limit);

    res.status(200).json({
      success: true,
      data: contacts,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    });
  },
);

export const getContactById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const contact = await Contact.findById(id).lean();

    if (!contact) {
      res.status(404).json({
        success: false,
        message: "Contact not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: contact,
    });
  },
);

export const updateContact = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const contact = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!contact) {
      res.status(404).json({
        success: false,
        message: "Contact not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Contact updated successfully",
      data: contact,
    });
  },
);

export const deleteContact = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
      res.status(404).json({
        success: false,
        message: "Contact not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
      data: contact,
    });
  },
);
