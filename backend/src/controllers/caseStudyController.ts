import { Request, Response } from "express";

import asyncHandler from "express-async-handler";

import { CaseStudy } from "../models/CaseStudy";

import path from "path";

import fs from "fs";

import mime from "mime-types";

export const createCaseStudy = asyncHandler(
  async (req: Request, res: Response) => {
    const caseStudy = await CaseStudy.create(req.body);

    res.status(201).json({
      success: true,

      message: "Case study created successfully",

      data: caseStudy,
    });
  },
);

export const getAllCaseStudy = asyncHandler(
  async (req: Request, res: Response) => {
    const limit = parseInt(req.query.limit as string) || 10;

    const page = parseInt(req.query.page as string) || 1;

    const skip = (page - 1) * limit;

    const [caseStudy, total] = await Promise.all([
      CaseStudy.find().sort({ order: 1 }).skip(skip).limit(limit).lean(),

      CaseStudy.countDocuments(),
    ]);

    res.status(200).json({
      success: true,

      message: "Case study fetched successfully",

      data: caseStudy,

      pagination: {
        total,

        page,

        limit,

        totalPages: Math.ceil(total / limit),
      },
    });
  },
);

export const getCaseStudyBySlug = asyncHandler(
  async (req: Request, res: Response) => {
    const slug = String(req.params.slug || "");

    // Try by slug first
    let caseStudy = await CaseStudy.findOne({
      slug,
    }).lean();

    // Fallback by title
    if (!caseStudy) {
      const titleQuery = slug
        .split("-")
        .join(" ")
        .replace(/\b\w/g, (char: string) => char.toUpperCase());

      caseStudy = await CaseStudy.findOne({
        title: {
          $regex: titleQuery,

          $options: "i",
        },
      }).lean();
    }

    if (!caseStudy) {
      res.status(404).json({
        success: false,

        message: "Case study not found",
      });

      return;
    }

    res.status(200).json({
      success: true,

      message: "Case study fetched successfully",

      data: caseStudy,
    });
  },
);

export const updateCaseStudy = asyncHandler(
  async (req: Request, res: Response) => {
    const caseStudyId = req.params.id;
    const newOrder = req.body.order;

    const insight = await CaseStudy.findById(caseStudyId);
    if (!insight) {
      res.status(404).json({
        success: false,
        message: "CaseStudy not found",
      });
      return;
    }

    const oldOrder = insight.order;

    // If order is being changed, adjust other insights' order
    if (newOrder !== undefined && newOrder !== oldOrder) {
      if (newOrder > oldOrder) {
        // Shift others up (move down visually)
        await CaseStudy.updateMany(
          {
            order: { $gt: oldOrder, $lte: newOrder },
            _id: { $ne: caseStudyId },
          },
          { $inc: { order: -1 } },
        );
      } else {
        // Shift others down (move up visually)
        await CaseStudy.updateMany(
          {
            order: { $gte: newOrder, $lt: oldOrder },
            _id: { $ne: caseStudyId },
          },
          { $inc: { order: 1 } },
        );
      }
    }

    // Update the current insight
    const updatedCaseStudy = await CaseStudy.findByIdAndUpdate(
      caseStudyId,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    res.status(200).json({
      success: true,
      message: "CaseStudy updated successfully",
      data: updatedCaseStudy,
    });
  },
);

export const deleteCaseStudy = asyncHandler(
  async (req: Request, res: Response) => {
    const caseStudy = await CaseStudy.findByIdAndDelete(req.params.id);

    if (!caseStudy) {
      res.status(404).json({
        success: false,
        message: "Case study not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Case study deleted successfully",
    });
  },
);

export const downloadCaseStdyFile = asyncHandler(
  async (req: Request, res: Response) => {
    const caseStudy = await CaseStudy.findById(req.params.id).lean();

    if (!caseStudy || !caseStudy.pdf) {
      res.status(404).json({
        success: false,
        message: "Case study file not found in database or path missing",
      });
      return;
    }

    const relativePath = caseStudy.pdf.startsWith("/")
      ? caseStudy.pdf.slice(1)
      : caseStudy.pdf;

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
