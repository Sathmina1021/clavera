// travel-backend/src/config/db.js
import mongoose from "mongoose";

let cached = global._mongooseConn;
if (!cached) cached = global._mongooseConn = { conn: null, promise: null };

export async function connectDB(uri) {
  if (!uri) throw new Error("MONGODB_URI not set");

  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    mongoose.set("strictQuery", true);
    cached.promise = mongoose.connect(uri, { autoIndex: true }).then((m) => m);
  }
  cached.conn = await cached.promise;
  console.log("✅ MongoDB connected");
  return cached.conn;
}
