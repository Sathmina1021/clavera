// travel-backend/src/controllers/newsletter.controller.js
import Subscriber from "../models/Subscriber.js";

export const subscribeToNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    // Validate
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ message: "A valid email is required." });
    }

    // Check if already subscribed
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "This email is already subscribed!" });
    }

    // Create new subscriber
    const newSubscriber = await Subscriber.create({ email });

    res.status(201).json({
      message: "Subscription successful! Welcome aboard 🌴",
      subscriber: newSubscriber,
    });
  } catch (err) {
    console.error("Newsletter subscription error:", err);
    res.status(500).json({
      message: "Internal server error while processing subscription.",
      error: err.message,
    });
  }
};
