// travel-backend/src/app.js
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();

// Security + logging
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// Allow frontend origins (Vercel + custom domain)
const allowedOrigins = [
  "https://www.calveratravels.com",
  "https://calveratravels.com",
  /\.vercel\.app$/ // allows all Vercel preview URLs
];
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

// Base API routes
app.use("/api/v1", routes);

// Health check (for testing)
app.get("/api/health", (req, res) => res.json({ ok: true, env: process.env.NODE_ENV }));

// Error handlers
app.use(notFound);
app.use(errorHandler);

export default app;
