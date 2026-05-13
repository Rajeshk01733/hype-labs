import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { InsightDownload } from "../models/InsightDownload";

export const createInsightDownload = asyncHandler(
  async (req: Request, res: Response) => {
    const insightDownload = await InsightDownload.create(req.body);

    res.status(201).json({
      success: true,
      message: "Insight download created successfully",
      data: insightDownload,
    });
  }
);

export const getAllInsightDownload = asyncHandler(
  async (req: Request, res: Response) => {
    const limit = parseInt(req.query.limit as string) || 10;
    const page = parseInt(req.query.page as string) || 1;

    const skip = (page - 1) * limit;

    const [insightDownload, total] = await Promise.all([
      InsightDownload.find()
        .sort({ createdAt: -1 })
        .populate("insight", "title")
        .skip(skip)
        .limit(limit)
        .lean(),
      InsightDownload.countDocuments(),
    ]);

    res.status(200).json({
      success: true,
      message: "Insight download fetched successfully",
      data: insightDownload,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  }
);

export const getInsightDownloadById = asyncHandler(
  async (req: Request, res: Response) => {
    const insightDownload = await InsightDownload.findById(
      req.params.id
    ).lean();

    if (!insightDownload) {
      res.status(404).json({
        success: false,
        message: "Insight download not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Insight download fetched successfully",
      data: insightDownload,
    });
  }
);

export const updateInsightDownload = asyncHandler(
  async (req: Request, res: Response) => {
    const insightDownload = await InsightDownload.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!insightDownload) {
      res.status(404).json({
        success: false,
        message: "Insight download not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Insight download updated successfully",
      data: insightDownload,
    });
  }
);

export const deleteInsightDownload = asyncHandler(
  async (req: Request, res: Response) => {
    const insightDownload = await InsightDownload.findByIdAndDelete(
      req.params.id
    );

    if (!insightDownload) {
      res.status(404).json({
        success: false,
        message: "Insight download not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Insight download deleted successfully",
    });
  }
);
