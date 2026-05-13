import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction } from "express";
import asyncHandler from "express-async-handler";

import { SuperAdmin } from "../models/SuperAdmin";

export const protect = asyncHandler(
  async (req: any, res: any, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      res
        .status(401)
        .json({ success: false, message: "Not authorized, no token" });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    const user = await SuperAdmin.findById(decoded._id).select("-password");

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }

    req.user = user;
    next();
  }
);
