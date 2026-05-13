import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { CareersSubmission } from "../models/CareersSubmission";

export const createCareersSubmission = asyncHandler(
  async (req: Request, res: Response) => {
    console.log(req.file);

    const data = {
      ...req.body,

      resume: req.file ? (req.file as any).path : "",
    };

    const careersSubmission = await CareersSubmission.create(data);

    res.status(201).json({
      success: true,
      message: "Careers submission created successfully",
      data: careersSubmission,
    });
  },
);

export const getAllCareersSubmission = asyncHandler(
  async (req: Request, res: Response) => {
    const limit = parseInt(req.query.limit as string) || 10;
    const page = parseInt(req.query.page as string) || 1;

    const skip = (page - 1) * limit;

    const [careersSubmission, total] = await Promise.all([
      CareersSubmission.find()
        .sort({ createdAt: -1 })
        .populate("careerId", "title jobId")
        .skip(skip)
        .limit(limit)
        .lean(),
      CareersSubmission.countDocuments(),
    ]);

    res.status(200).json({
      success: true,
      message: "Careers submission fetched successfully",
      data: careersSubmission,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  },
);

export const getCareersSubmissionById = asyncHandler(
  async (req: Request, res: Response) => {
    const careersSubmission = await CareersSubmission.findById(req.params.id)
      .populate("careerId")
      .lean();

    if (!careersSubmission) {
      res.status(404).json({
        success: false,
        message: "Careers submission not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Careers submission fetched successfully",
      data: careersSubmission,
    });
  },
);

export const updateCareersSubmission = asyncHandler(
  async (req: Request, res: Response) => {
    const careersSubmission = await CareersSubmission.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!careersSubmission) {
      res.status(404).json({
        success: false,
        message: "Careers submission not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Careers submission updated successfully",
      data: careersSubmission,
    });
  },
);

export const deleteCareersSubmission = asyncHandler(
  async (req: Request, res: Response) => {
    const careersSubmission = await CareersSubmission.findByIdAndDelete(
      req.params.id,
    );

    if (!careersSubmission) {
      res.status(404).json({
        success: false,
        message: "Careers submission not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Careers submission deleted successfully",
    });
  },
);
