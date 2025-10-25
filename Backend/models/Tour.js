import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    image: String,
    features: [String],
    badge: String
  },
  { timestamps: true }
);

export const Tour = mongoose.model("Tour", tourSchema);
