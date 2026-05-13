import mongoose, { Schema, Types, Document } from "mongoose";

export interface ICaseStudyDownload extends Document {
  caseStudy: Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const CaseStudyDownloadSchema = new Schema<ICaseStudyDownload>(
  {
    caseStudy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CaseStudy",
      required: true,
    },
    firstName: { type: String, required: [true, "First name can't be empty"] },
    lastName: { type: String, required: [true, "Last name can't be empty"] },
    email: { type: String, required: [true, "Email can't be empty"] },
    phone: { type: String, required: [true, "Phone can't be empty"] },
  },
  { timestamps: true }
);

export const CaseStudyDownload = mongoose.model(
  "CaseStudyDownload",
  CaseStudyDownloadSchema
);
