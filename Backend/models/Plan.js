import mongoose from "mongoose";

const planSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    destination: { type: String, required: true, trim: true },
    travelDates: { type: String },
    budget: { type: String },
    travelers: { type: String },
    tripType: { type: String },
    interests: [{ type: String }],
    message: { type: String, required: true }
  },
  { timestamps: true }
);

export const Plan = mongoose.model("Plan", planSchema);
