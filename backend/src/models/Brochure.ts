import mongoose, { Schema, Document } from "mongoose";

export interface IBrochure extends Document {
  filePath: string;
  active: boolean;
}

const BrochureSchema = new Schema<IBrochure>(
  {
    filePath: { type: String, required: [true, "File name can't be empty"] },
    active: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Brochure = mongoose.model("Brochure", BrochureSchema);
