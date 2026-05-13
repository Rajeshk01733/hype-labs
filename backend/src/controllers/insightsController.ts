import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { Insights } from "../models/Insights";
import { CaseStudy } from "../models/CaseStudy";
import path from "path";
import fs from "fs";
import mime from "mime-types";

export const createInsights = asyncHandler(
  async (req: Request, res: Response) => {
    const insights = await Insights.create(req.body);

    res.status(201).json({
      success: true,
      message: "Insights created successfully",
      data: insights,
    });
  },
);

export const getInsightsAndCaseStudy = asyncHandler(
  async (req: Request, res: Response) => {
    const [insights, caseStudy] = await Promise.all([
      Insights.find({ publish: true })
        .sort({ order: 1 })
        .select("image title category cardDescription slug createdAt")
        .lean(),
      CaseStudy.find({ publish: true })
        .sort({ order: 1 })
        .select("image title category cardDescription slug createdAt")
        .lean(),
    ]);

    res.status(200).json({
      success: true,
      message: "Insights and case study fetched successfully",
      data: { insights, caseStudy },
    });
  },
);

export const getAllInsights = asyncHandler(
  async (req: Request, res: Response) => {
    const limit = parseInt(req.query.limit as string) || 10;
    const page = parseInt(req.query.page as string) || 1;

    const skip = (page - 1) * limit;

    const [insights, total] = await Promise.all([
      Insights.find().sort({ order: 1 }).skip(skip).limit(limit).lean(),
      Insights.countDocuments(),
    ]);

    res.status(200).json({
      success: true,
      message: "Insights fetched successfully",
      data: insights,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  },
);

export const getInsightsBySlug = asyncHandler(
  async (req: Request, res: Response) => {
    // First, try to find by slug
    let insights = await Insights.findOne({ slug: req.params.slug }).lean();

    if (!insights) {
      const slug = String(req.params.slug || "");

      const titleQuery = slug
        .split("-")
        .join(" ")
        .replace(/\b\w/g, (char: string) => char.toUpperCase());

      insights = await Insights.findOne({
        title: {
          $regex: titleQuery,
          $options: "i",
        },
      }).lean();
    }

    if (!insights) {
      res.status(404).json({
        success: false,
        message: "Insights not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Insights fetched successfully",
      data: insights,
    });
  },
);

export const updateInsights = asyncHandler(
  async (req: Request, res: Response) => {
    const insightId = req.params.id;
    const newOrder = req.body.order;

    const insight = await Insights.findById(insightId);
    if (!insight) {
      res.status(404).json({
        success: false,
        message: "Insight not found",
      });
      return;
    }

    const oldOrder = insight.order;

    // If order is being changed, adjust other insights' order
    if (newOrder !== undefined && newOrder !== oldOrder) {
      if (newOrder > oldOrder) {
        // Shift others up (move down visually)
        await Insights.updateMany(
          {
            order: { $gt: oldOrder, $lte: newOrder },
            _id: { $ne: insightId },
          },
          { $inc: { order: -1 } },
        );
      } else {
        // Shift others down (move up visually)
        await Insights.updateMany(
          {
            order: { $gte: newOrder, $lt: oldOrder },
            _id: { $ne: insightId },
          },
          { $inc: { order: 1 } },
        );
      }
    }

    // Update the current insight
    const updatedInsight = await Insights.findByIdAndUpdate(
      insightId,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    res.status(200).json({
      success: true,
      message: "Insight updated successfully",
      data: updatedInsight,
    });
  },
);

export const deleteInsights = asyncHandler(
  async (req: Request, res: Response) => {
    const insights = await Insights.findByIdAndDelete(req.params.id);

    if (!insights) {
      res.status(404).json({
        success: false,
        message: "Insights not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Insights deleted successfully",
    });
  },
);

export const downloadInsightsFile = asyncHandler(
  async (req: Request, res: Response) => {
    const insight = await Insights.findById(req.params.id).lean();

    if (!insight || !insight.pdf) {
      res.status(404).json({
        success: false,
        message: "Insight file not found in database or path missing",
      });
      return;
    }

    const relativePath = insight.pdf.startsWith("/")
      ? insight.pdf.slice(1)
      : insight.pdf;

    const filePath = path.join(__dirname, "../", relativePath);

    if (!fs.existsSync(filePath)) {
      res.status(404).json({
        success: false,
        message: `File not found on server at: ${filePath}. Please check path and permissions.`,
      });
      return;
    }

    const fileName = path.basename(filePath);
    const contentType = mime.lookup(filePath) || "application/octet-stream";

    res.setHeader("Content-Type", contentType);
    res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);

    const stream = fs.createReadStream(filePath);
    stream.on("error", (err) => {
      res.status(500).json({
        success: false,
        message: "File read error",
        error: err.message,
      });
    });

    stream.pipe(res);
  },
);
