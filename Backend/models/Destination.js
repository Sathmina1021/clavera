import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema(
  {
    name: String,
    region: String, // asia, europe, africa, americas
    image: String
  },
  { timestamps: true }
);

export const Destination = mongoose.model("Destination", destinationSchema);
