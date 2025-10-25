import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";

import planRoutes from "./routes/planRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import tourRoutes from "./routes/tourRoutes.js";
import destinationRoutes from "./routes/destinationRoutes.js";

dotenv.config();
await connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
  })
);

// Routes
app.get("/", (_req, res) => res.send("🌍 Calvera Travels API is running..."));
app.use("/api/plans", planRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/tours", tourRoutes);               // optional
app.use("/api/destinations", destinationRoutes); // optional

// Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
