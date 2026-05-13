import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { Testimonials } from "../models/Testimonials";

export const createTestimonials = asyncHandler(
  async (req: Request, res: Response) => {
    const testimonials = await Testimonials.create(req.body);

    res.status(201).json({
      success: true,
      message: "Testimonials created successfully",
      data: testimonials,
    });
  }
);

export const getAllTestimonials = asyncHandler(
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

    const [testimonials, total] = await Promise.all([
      Testimonials.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Testimonials.countDocuments(filter),
    ]);

    res.status(200).json({
      success: true,
      message: "Testimonials fetched successfully",
      data: testimonials,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  }
);

export const getTestimonialsById = asyncHandler(
  async (req: Request, res: Response) => {
    const testimonials = await Testimonials.findById(req.params.id).lean();

    if (!testimonials) {
      res.status(404).json({
        success: false,
        message: "Testimonials not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Testimonials fetched successfully",
      data: testimonials,
    });
  }
);

export const updateTestimonials = asyncHandler(
  async (req: Request, res: Response) => {
    const testimonials = await Testimonials.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!testimonials) {
      res.status(404).json({
        success: false,
        message: "Testimonials not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Testimonials updated successfully",
      data: testimonials,
    });
  }
);

export const deleteTestimonials = asyncHandler(
  async (req: Request, res: Response) => {
    const testimonials = await Testimonials.findByIdAndDelete(req.params.id);

    if (!testimonials) {
      res.status(404).json({
        success: false,
        message: "Testimonials not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Testimonials deleted successfully",
    });
  }
);
