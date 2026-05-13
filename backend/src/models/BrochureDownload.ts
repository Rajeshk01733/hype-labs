import mongoose, { Schema, Types, Document } from "mongoose";

export interface IBrochureDownload extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const BrochureDownloadSchema = new Schema<IBrochureDownload>(
  {
    firstName: { type: String, required: [true, "First name can't be empty"] },
    lastName: { type: String, required: [true, "Last name can't be empty"] },
    email: { type: String, required: [true, "Email can't be empty"] },
    phone: { type: String, required: [true, "Phone can't be empty"] },
  },
  { timestamps: true }
);

export const BrochureDownload = mongoose.model(
  "BrochureDownload",
  BrochureDownloadSchema
);
