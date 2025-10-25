import { Tour } from "../models/Tour.js";

export const getTours = async (_req, res) => {
  try {
    const tours = await Tour.find().sort({ createdAt: -1 });
    res.json({ success: true, data: tours });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
