// travel-backend/src/app.js
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();

// === Middleware ===
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

// === CORS Setup ===
// Allow your Vercel frontend & domain access
const allowedOrigins = [
  "https://calvera-travels-react-app.vercel.app",
  "https://clavera-travels-react-app.vercel.app",
  "https://calveratravels.com",
  "https://www.calveratravels.com",
  /\.vercel\.app$/, // allow all vercel preview URLs
];
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

// === Routes ===
app.use("/api/v1", routes);

// === Health Check ===
app.get("/api/health", (req, res) =>
  res.json({ ok: true, env: process.env.NODE_ENV || "development" })
);

// === Error Handlers ===
app.use(notFound);
app.use(errorHandler);

export default app;
