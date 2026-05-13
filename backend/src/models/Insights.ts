import mongoose, { Schema, Document } from "mongoose";
import slugify from "slugify";

export interface IInsights extends Document {
  image: string;
  title: string;
  category: string;
  cardDescription: string;
  heroDescription: string;
  description: string;
  ctaQuestion: string;
  pdf?: string;
  order: number;
  publish: boolean;
  slug: string;
}

const InsightsSchema = new Schema<IInsights>(
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
    ctaQuestion: { type: String, default: "" },
    pdf: { type: String },
    order: { type: Number },
    publish: { type: Boolean, default: true },
    slug: { type: String, unique: true, index: true },
  },
  { timestamps: true },
);

InsightsSchema.pre("save", async function (next) {
  try {
    // Regenerate slug if title changed or slug is missing
    if (!this.isModified("title") && this.slug) {
      return next();
    }

    const baseSlug = slugify(this.title, { lower: true, strict: true });
    let slug = baseSlug;
    let count = 1;

    // Check the Insights collection for existing slug
    while (await mongoose.models.Insights.exists({ slug })) {
      slug = `${baseSlug}-${count++}`;
    }

    this.slug = slug;

    // Auto-increment order if new document
    if (this.isNew) {
      const lastInsight = await mongoose.models.Insights.findOne()
        .sort("-order")
        .exec();
      this.order = lastInsight ? lastInsight.order + 1 : 1;
    }

    next();
  } catch (error) {
    next(error as Error);
  }
});

export const Insights = mongoose.model<IInsights>("Insights", InsightsSchema);
