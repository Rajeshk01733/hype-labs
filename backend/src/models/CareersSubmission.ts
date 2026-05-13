import mongoose, { Schema, Document, Types } from "mongoose";

export interface ICareersSubmission extends Document {
  careerId: Types.ObjectId; 
  prefix: string;
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  phone: string;
  email: string;
  resume: string;
  coverLetter?: string;
  experience: {
    companyName: string;
    jobTitle: string;
    currentEmployer: boolean;
    startDate: Date;
    endDate?: Date;
    country: string;
  }[];
  education: {
    schoolName: string;
    degree: string;
    major: string;
    startDate: Date;
    endDate: Date;
    country: string;
  }[];
  reAllocate: boolean;
  preferedLocation: string;
}

const CareersSubmissionSchema = new Schema<ICareersSubmission>(
  {
    careerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Careers",
      required: true,
    },
    prefix: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    addressLine1: { type: String },
    addressLine2: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    postalCode: { type: String },
    phone: { type: String },
    email: { type: String },
    resume: { type: String },
    coverLetter: { type: String },
    experience: [
      {
        companyName: { type: String },
        jobTitle: { type: String },
        currentEmployer: { type: Boolean, default: false },
        startDate: { type: Date },
        endDate: { type: Date },
        country: { type: String },
      },
    ],
    education: [
      {
        schoolName: { type: String },
        degree: { type: String },
        major: { type: String },
        startDate: { type: Date },
        endDate: { type: Date },
        country: { type: String },
      },
    ],
    reAllocate: { type: Boolean, default: false },
    preferedLocation: { type: String },
  },
  { timestamps: true }
);

export const CareersSubmission = mongoose.model<ICareersSubmission>(
  "CareersSubmission",
  CareersSubmissionSchema
);
