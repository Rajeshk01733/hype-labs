import mongoose, { Schema, Document } from "mongoose";

export interface IEnquireForm extends Document {
  firstName: string;
  lastName: string;
  workEmail: string;
  phoneNumber: string;
  companyName: string;
}

const EnquireFormSchema = new Schema<IEnquireForm>(
  {
    firstName: { type: String, required: [true, "First name can't be empty"] },
    lastName: { type: String, required: [true, "Last name can't be empty"] },
    workEmail: { type: String, required: [true, "Work email can't be empty"] },
    phoneNumber: {
      type: String,
      required: [true, "Phone Number can't be empty"],
    },
    companyName: {
      type: String,
    },
  },
  { timestamps: true }
);

export const EnquireForm = mongoose.model("EnquireForm", EnquireFormSchema);
