import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { CaseStudyDownload } from "../models/CaseStudyDownload";

export const createCaseStudyDownload = asyncHandler(
  async (req: Request, res: Response) => {
    const caseStudyDownload = await CaseStudyDownload.create(req.body);

    res.status(201).json({
      success: true,
      message: "CaseStudy download created successfully",
      data: caseStudyDownload,
    });
  }
);

export const getAllCaseStudyDownload = asyncHandler(
  async (req: Request, res: Response) => {
    const limit = parseInt(req.query.limit as string) || 10;
    const page = parseInt(req.query.page as string) || 1;

    const skip = (page - 1) * limit;

    const [caseStudyDownload, total] = await Promise.all([
      CaseStudyDownload.find()
        .sort({ createdAt: -1 })
        .populate("caseStudy", "title")
        .skip(skip)
        .limit(limit)
        .lean(),
      CaseStudyDownload.countDocuments(),
    ]);

    res.status(200).json({
      success: true,
      message: "CaseStudy download fetched successfully",
      data: caseStudyDownload,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  }
);

export const getCaseStudyDownloadById = asyncHandler(
  async (req: Request, res: Response) => {
    const caseStudyDownload = await CaseStudyDownload.findById(
      req.params.id
    ).lean();

    if (!caseStudyDownload) {
      res.status(404).json({
        success: false,
        message: "CaseStudy download not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "CaseStudy download fetched successfully",
      data: caseStudyDownload,
    });
  }
);

export const updateCaseStudyDownload = asyncHandler(
  async (req: Request, res: Response) => {
    const caseStudyDownload = await CaseStudyDownload.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!caseStudyDownload) {
      res.status(404).json({
        success: false,
        message: "CaseStudy download not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "CaseStudy download updated successfully",
      data: caseStudyDownload,
    });
  }
);

export const deleteCaseStudyDownload = asyncHandler(
  async (req: Request, res: Response) => {
    const caseStudyDownload = await CaseStudyDownload.findByIdAndDelete(
      req.params.id
    );

    if (!caseStudyDownload) {
      res.status(404).json({
        success: false,
        message: "Case study download not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Case study download deleted successfully",
    });
  }
);
