import mongoose, { Schema, Document } from "mongoose";
import slugify from "slugify";

export interface ICaseStudy extends Document {
  image: string;
  title: string;
  category: string;
  cardDescription: string;
  heroDescription: string;
  description: string;
  objectives: { description: string }[];
  statusDescription: string;
  status: { data: string; title: string }[];
  ctaQuestion: string;
  pdf: string;
  order: number;
  publish: boolean;
  slug: string;
}

const CaseStudySchema = new Schema<ICaseStudy>(
  {
    image: { type: String, required: [true, "Image can't be empty"] },
    title: { type: String, required: [true, "Title can't be empty"] },
    category: { type: String, required: [true, "Category can't be empty"] },
    cardDescription: {
      type: String,
      required: [true, "Card description can't be empty"],
    },
    heroDescription: {
      type: String,
      required: [true, "Hero description can't be empty"],
    },
    description: {
      type: String,
      required: [true, "Description can't be empty"],
    },
    objectives: [
      {
        description: String,
      },
    ],
    statusDescription: String,
    status: [{ data: String, title: String }],
    ctaQuestion: String,
    pdf: String,
    order: { type: Number },
    publish: { type: Boolean, default: true },
    slug: { type: String, unique: true, index: true },
  },
  { timestamps: true },
);

CaseStudySchema.pre("save", async function (next) {
  try {
    // Only generate slug if title is new/modified or slug is missing
    if (!this.isModified("title") && this.slug) return next();

    const baseSlug = slugify(this.title, { lower: true, strict: true });
    let slug = baseSlug;
    let count = 1;

    // Ensure slug uniqueness
    while (await mongoose.models.CaseStudy.exists({ slug })) {
      slug = `${baseSlug}-${count++}`;
    }
    this.slug = slug;

    // Auto-increment order for new documents
    if (this.isNew) {
      const lastWork = await mongoose.models.CaseStudy.findOne()
        .sort("-order")
        .exec();
      this.order = lastWork ? lastWork.order + 1 : 1;
    }

    next();
  } catch (error) {
    next(error as Error);
  }
});

export const CaseStudy = mongoose.model<ICaseStudy>(
  "CaseStudy",
  CaseStudySchema,
);
