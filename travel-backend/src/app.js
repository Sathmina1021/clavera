// travel-backend/src/app.js
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();

// === Security & Logging ===
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

// === Dynamic CORS Setup ===
const allowedOrigins = [
  "https://calveratravels.com",
  "https://www.calveratravels.com",
  "https://clavera-travels-react-app.vercel.app",
  "https://calvera-travels-react-app.vercel.app",
  /\.vercel\.app$/, // allow all vercel preview URLs
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like curl, Postman)
      if (!origin) return callback(null, true);

      // Check if origin matches allowed list
      const isAllowed = allowedOrigins.some((pattern) =>
        pattern instanceof RegExp ? pattern.test(origin) : pattern === origin
      );

      if (isAllowed) {
        callback(null, true);
      } else {
        console.warn("❌ Blocked CORS origin:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// === Base Routes ===
app.use("/api/v1", routes);

// === Health Check Endpoint ===
app.get("/api/health", (req, res) =>
  res.json({ ok: true, env: process.env.NODE_ENV || "development" })
);

// === Error Handlers ===
app.use(notFound);
app.use(errorHandler);

export default app;
