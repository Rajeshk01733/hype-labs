import mongoose, { Schema, Document } from "mongoose";

export interface ITestimonials extends Document {
  name: string;
  description: string;
  star: number;
  publish: boolean;
}

const TestimonialsSchema = new Schema<ITestimonials>(
  {
    name: { type: String, required: [true, "Name can't be empty"] },
    description: {
      type: String,
      required: [true, "Description can't be empty"],
    },
    star: { type: Number, max: 5, min: 1, default: 5 },
    publish: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Testimonials = mongoose.model("Testimonials", TestimonialsSchema);
