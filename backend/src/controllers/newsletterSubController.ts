import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { NewsletterSub } from "../models/NewsletterSub";

export const createNewsletterSub = asyncHandler(
  async (req: Request, res: Response) => {
    const { email } = req.body;

    const existingSub = await NewsletterSub.findOne({ email }).lean();

    if (existingSub) {
      res.status(409).json({
        success: false,
        message: "This email is already subscribed to the newsletter.",
      });
      return;
    }

    const subscription = await NewsletterSub.create({ email });

    res.status(201).json({
      success: true,
      message: "Newsletter subscription created successfully",
      data: subscription,
    });
  }
);

export const getAllNewsletterSub = asyncHandler(
  async (req: Request, res: Response) => {
    const limit = parseInt(req.query.limit as string) || 10;
    const page = parseInt(req.query.page as string) || 1;

    const skip = (page - 1) * limit;

    const [subscriptions, total] = await Promise.all([
      NewsletterSub.find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      NewsletterSub.countDocuments(),
    ]);

    res.status(200).json({
      success: true,
      message: "Newsletter subscription fetched successfully",
      data: subscriptions,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  }
);

export const getNewsletterSubById = asyncHandler(
  async (req: Request, res: Response) => {
    const subscription = await NewsletterSub.findById(req.params.id).lean();

    if (!subscription) {
      res.status(404).json({
        success: false,
        message: "Newsletter subscription not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Newsletter subscription fetched successfully",
      data: subscription,
    });
  }
);

export const updateNewsletterSub = asyncHandler(
  async (req: Request, res: Response) => {
    const subscription = await NewsletterSub.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!subscription) {
      res.status(404).json({
        success: false,
        message: "Newsletter subscription not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Newsletter subscription updated successfully",
      data: subscription,
    });
  }
);

export const deleteNewsletterSub = asyncHandler(
  async (req: Request, res: Response) => {
    const subscription = await NewsletterSub.findByIdAndDelete(req.params.id);

    if (!subscription) {
      res.status(404).json({
        success: false,
        message: "Newsletter subscription not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Newsletter subscription deleted successfully",
    });
  }
);
