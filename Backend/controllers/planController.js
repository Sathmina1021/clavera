import { Plan } from "../models/Plan.js";
import { sendEmail } from "../utils/sendEmail.js";

export const createPlan = async (req, res) => {
  try {
    const plan = await Plan.create(req.body);

    // Notify admin
    const adminHtml = `
      <h2>New Trip Plan Request</h2>
      <p><b>Name:</b> ${plan.name}</p>
      <p><b>Email:</b> ${plan.email}</p>
      <p><b>Destination:</b> ${plan.destination}</p>
      <p><b>Travel Dates:</b> ${plan.travelDates || "-"}</p>
      <p><b>Budget:</b> ${plan.budget || "-"}</p>
      <p><b>Travelers:</b> ${plan.travelers || "-"}</p>
      <p><b>Trip Type:</b> ${plan.tripType || "-"}</p>
      <p><b>Interests:</b> ${(plan.interests || []).join(", ") || "-"}</p>
      <p><b>Message:</b><br/>${plan.message}</p>
    `;
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: "New Calvera Plan Request",
      html: adminHtml
    });

    // Auto-reply to user
    await sendEmail({
      to: plan.email,
      subject: "We received your trip plan request ✈️",
      html: `<p>Hi ${plan.name},</p>
             <p>Thanks for sending your trip preferences to Calvera Travels. Our expert will contact you within 24 hours.</p>
             <p>— Calvera Team</p>`
    });

    res.status(201).json({ success: true, plan });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getPlans = async (_req, res) => {
  try {
    const plans = await Plan.find().sort({ createdAt: -1 });
    res.json({ success: true, data: plans });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
