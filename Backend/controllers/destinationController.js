import { Destination } from "../models/Destination.js";

export const getDestinations = async (req, res) => {
  try {
    const { region } = req.query; // /api/destinations?region=asia
    const query = region ? { region } : {};
    const list = await Destination.find(query).sort({ createdAt: -1 });
    res.json({ success: true, data: list });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
