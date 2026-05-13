import mongoose, { Schema, Document } from "mongoose";

export interface INewsletterSub extends Document {
  email: string;
}

const NewsletterSubSchema = new Schema<INewsletterSub>(
  {
    email: {
      type: String,
      required: [true, "Emal can't be empty"],
      unique: true,
    },
  },
  { timestamps: true }
);

export const NewsletterSub = mongoose.model(
  "NewsletterSub",
  NewsletterSubSchema
);
