// travel-backend/src/server.js
import "dotenv/config";
import app from "./app.js";
import { connectDB } from "./config/db.js";

// Connect to DB once when the function is initialized
await connectDB(process.env.MONGODB_URI);

// ✅ Export Express app for Vercel (no app.listen here)
export default app;
