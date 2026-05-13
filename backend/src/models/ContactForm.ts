import mongoose, { Schema, Types, Document } from "mongoose";

export interface IContactForm extends Document {
  firstName: string;
  lastName: string;
  websiteAddress?: string;
  companyName?: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
}

const ContactFormSchema = new Schema<IContactForm>(
  {
    firstName: { type: String, required: [true, "First name can't be empty"] },
    lastName: { type: String, required: [true, "Last name can't be empty"] },
    websiteAddress: String,
    companyName: String,
    email: { type: String, required: [true, "Email can't be empty"] },
    phone: { type: String },
    services: [String],
    message: {
      type: String,
    },
  },
  { timestamps: true },
);

export const ContactForm = mongoose.model("ContactForm", ContactFormSchema);
