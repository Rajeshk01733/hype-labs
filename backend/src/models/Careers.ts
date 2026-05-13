import mongoose, { Schema, Document } from "mongoose";
import slugify from "slugify";

export interface ICareers extends Document {
  jobId: string;
  title: string;
  description: string;
  location: string;
  department: string;
  jobType: "FullTime" | "Contract" | "Internship";
  salary: string;
  jobDescription: string;
  coreMandate: string;
  keyResponsibilities: string;
  technicalSkills: string[];
  softSkills: string[];
  qualification: string;
  whatWeOffer: string;
  whyJoin: string;
  aboutLr: string;
  compensationPackage: string;
  note: string;
  slug: string;
  requiredFields: {
    documents: boolean;
    personalInfo: boolean;
    workExperience: boolean;
    education: boolean;
    reAllocate: boolean;
  };
  closed: boolean;
  publish: boolean;
}

const CareersSchema = new Schema<ICareers>(
  {
    jobId: { type: String, required: [true, "Job id can't be empty"] },
    title: { type: String, required: [true, "Title can't be empty"] },
    description: {
      type: String,
      required: [true, "Description can't be empty"],
    },
    location: { type: String, required: [true, "Location can't be empty"] },
    department: { type: String, required: [true, "Department can't be empty"] },
    jobType: {
      type: String,
      default: "FullTime",
      enum: ["FullTime", "Contract", "Internship"],
    },
    salary: String,
    jobDescription: String,
    keyResponsibilities: String,
    coreMandate: String,
    technicalSkills: [String],
    softSkills: [String],
    qualification: String,
    whatWeOffer: String,
    whyJoin: String,
    aboutLr: String,
    compensationPackage: String,
    note: String,
    slug: String,
    requiredFields: {
      documents: { type: Boolean, default: false },
      personalInfo: { type: Boolean, default: false },
      workExperience: { type: Boolean, default: false },
      education: { type: Boolean, default: false },
      reAllocate: { type: Boolean, default: false },
    },
    closed: {
      type: Boolean,
      default: false,
    },
    publish: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

CareersSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("title") && this.slug) return next();

    const baseSlug = slugify(this.title, { lower: true, strict: true });
    let slug = baseSlug;
    let count = 1;

    while (await mongoose.models.Careers.exists({ slug })) {
      slug = `${baseSlug}-${count++}`;
    }

    this.slug = slug;
    next();
  } catch (error) {
    next(error as Error);
  }
});

export const Careers = mongoose.model("Careers", CareersSchema);
