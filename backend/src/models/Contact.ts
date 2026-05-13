import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  businessName?: string;
  businessSize?: string;
  budget?: string;
  message?: string;
  services?: string[];
  websiteAddress?: string;
  companyName?: string;
  sourcePage: string;
  sourcePath: string;
  sectionName: string;
  additionalData?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
      trim: true,
    },
    businessName: {
      type: String,
      trim: true,
    },
    businessSize: {
      type: String,
      trim: true,
    },
    budget: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      trim: true,
    },
    services: [String],
    websiteAddress: {
      type: String,
      trim: true,
    },
    companyName: {
      type: String,
      trim: true,
    },
    sourcePage: {
      type: String,
      required: [true, "Source page is required"],
    },
    sourcePath: {
      type: String,
      required: [true, "Source path is required"],
    },
    sectionName: {
      type: String,
      required: [true, "Section name is required"],
    },
    additionalData: {
      type: Schema.Types.Mixed,
    },
  },
  {
    timestamps: true,
  },
);

export const Contact = mongoose.model<IContact>("Contact", ContactSchema);
