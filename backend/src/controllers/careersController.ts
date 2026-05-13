import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { Careers } from "../models/Careers";

export const createCareers = asyncHandler(
  async (req: Request, res: Response) => {
    const careers = await Careers.create(req.body);

    res.status(201).json({
      success: true,
      message: "Careers created successfully",
      data: careers,
    });
  }
);

export const getAllCareers = asyncHandler(
  async (req: Request, res: Response) => {
    const limit = parseInt(req.query.limit as string) || 10;
    const page = parseInt(req.query.page as string) || 1;

    const skip = (page - 1) * limit;

    const filter: Record<string, any> = {};

    if (req.query.publish === "true") {
      filter.publish = true;
    } else if (req.query.publish === "false") {
      filter.publish = false;
    }

    const [careerss, total] = await Promise.all([
      Careers.find(filter).skip(skip).limit(limit).lean(),
      Careers.countDocuments(filter),
    ]);

    res.status(200).json({
      success: true,
      message: "Careers fetched successfully",
      data: careerss,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  }
);

export const getCareersBySlug = asyncHandler(
  async (req: Request, res: Response) => {
    const careers = await Careers.findOne({ slug: req.params.slug }).lean();

    if (!careers) {
      res.status(404).json({
        success: false,
        message: "Careers not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Careers fetched successfully",
      data: careers,
    });
  }
);

export const updateCareers = asyncHandler(
  async (req: Request, res: Response) => {
    const careers = await Careers.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!careers) {
      res.status(404).json({
        success: false,
        message: "Careers not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Careers updated successfully",
      data: careers,
    });
  }
);

export const deleteCareers = asyncHandler(
  async (req: Request, res: Response) => {
    const careers = await Careers.findByIdAndDelete(req.params.id);

    if (!careers) {
      res.status(404).json({
        success: false,
        message: "Careers not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Careers deleted successfully",
    });
  }
);

export const getSearchCareers = asyncHandler(
  async (req: Request, res: Response) => {
    const { query } = req.query;

    const searchQuery: any = {
      publish: true,
    };

    if (query && typeof query === "string") {
      searchQuery.$or = [
        { title: { $regex: query, $options: "i" } },
        { location: { $regex: query, $options: "i" } },
      ];
    }

    const result = await Careers.find(searchQuery)
      .sort({ createdAt: -1 })
      .select("jobId title description location department jobType slug")
      .lean();

    res.status(200).json({
      success: true,
      message: "Careers fetched successfully",
      data: result,
    });
  }
);
