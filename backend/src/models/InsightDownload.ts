import mongoose, { Schema, Types, Document } from "mongoose";

export interface IInsightDownload extends Document {
  insight: Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const InsightDownloadSchema = new Schema<IInsightDownload>(
  {
    insight: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Insights",
      required: true,
    },
    firstName: { type: String, required: [true, "First name can't be empty"] },
    lastName: { type: String, required: [true, "Last name can't be empty"] },
    email: { type: String, required: [true, "Email can't be empty"] },
    phone: { type: String, required: [true, "Phone can't be empty"] },
  },
  { timestamps: true }
);

export const InsightDownload = mongoose.model(
  "InsightDownload",
  InsightDownloadSchema
);
