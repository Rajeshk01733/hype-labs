import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { EnquireForm } from "../models/EnquireForm";

export const createEnquireForm = asyncHandler(
  async (req: Request, res: Response) => {
    const enquireForm = await EnquireForm.create(req.body);

    res.status(201).json({
      success: true,
      message: "Enquire form created successfully",
      data: enquireForm,
    });
  }
);

export const getAllEnquireForm = asyncHandler(
  async (req: Request, res: Response) => {
    const limit = parseInt(req.query.limit as string) || 10;
    const page = parseInt(req.query.page as string) || 1;

    const skip = (page - 1) * limit;

    const [enquireForm, total] = await Promise.all([
      EnquireForm.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      EnquireForm.countDocuments(),
    ]);

    res.status(200).json({
      success: true,
      message: "Enquire form fetched successfully",
      data: enquireForm,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  }
);

export const getEnquireFormById = asyncHandler(
  async (req: Request, res: Response) => {
    const enquireForm = await EnquireForm.findById(req.params.id).lean();

    if (!enquireForm) {
      res.status(404).json({
        success: false,
        message: "Enquire form not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Enquire form fetched successfully",
      data: enquireForm,
    });
  }
);

export const updateEnquireForm = asyncHandler(
  async (req: Request, res: Response) => {
    const enquireForm = await EnquireForm.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!enquireForm) {
      res.status(404).json({
        success: false,
        message: "Enquire form not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Enquire form updated successfully",
      data: enquireForm,
    });
  }
);

export const deleteEnquireForm = asyncHandler(
  async (req: Request, res: Response) => {
    const enquireForm = await EnquireForm.findByIdAndDelete(req.params.id);

    if (!enquireForm) {
      res.status(404).json({
        success: false,
        message: "Enquire form not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Enquire form deleted successfully",
    });
  }
);
