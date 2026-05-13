import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { BrochureDownload } from "../models/BrochureDownload";

export const createBrochureDownload = asyncHandler(
  async (req: Request, res: Response) => {
    const brochureDownload = await BrochureDownload.create(req.body);

    res.status(201).json({
      success: true,
      message: "Brochure download created successfully",
      data: brochureDownload,
    });
  }
);

export const getAllBrochureDownload = asyncHandler(
  async (req: Request, res: Response) => {
    const limit = parseInt(req.query.limit as string) || 10;
    const page = parseInt(req.query.page as string) || 1;

    const skip = (page - 1) * limit;

    const [brochureDownload, total] = await Promise.all([
      BrochureDownload.find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      BrochureDownload.countDocuments(),
    ]);

    res.status(200).json({
      success: true,
      message: "Brochure download fetched successfully",
      data: brochureDownload,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  }
);

export const getBrochureDownloadById = asyncHandler(
  async (req: Request, res: Response) => {
    const brochureDownload = await BrochureDownload.findById(
      req.params.id
    ).lean();

    if (!brochureDownload) {
      res.status(404).json({
        success: false,
        message: "Brochure download not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Brochure download fetched successfully",
      data: brochureDownload,
    });
  }
);

export const updateBrochureDownload = asyncHandler(
  async (req: Request, res: Response) => {
    const brochureDownload = await BrochureDownload.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!brochureDownload) {
      res.status(404).json({
        success: false,
        message: "Brochure download not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Brochure download updated successfully",
      data: brochureDownload,
    });
  }
);

export const deleteBrochureDownload = asyncHandler(
  async (req: Request, res: Response) => {
    const brochureDownload = await BrochureDownload.findByIdAndDelete(
      req.params.id
    );

    if (!brochureDownload) {
      res.status(404).json({
        success: false,
        message: "Brochure download not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Brochure download deleted successfully",
    });
  }
);
