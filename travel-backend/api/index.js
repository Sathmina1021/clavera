// travel-backend/api/index.js
import app from "../src/app.js";
import { connectDB } from "../src/config/db.js";

export default async function handler(req, res) {
  try {
    if (process.env.MONGODB_URI) {
      await connectDB(process.env.MONGODB_URI);
    }
    return app(req, res); // Express app handles the request
  } catch (err) {
    console.error("❌ API handler error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
