import { Contact } from "../models/Contact.js";
import { sendEmail } from "../utils/sendEmail.js";

export const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    // Notify admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Message: ${contact.subject || "General"}`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${contact.name}</p>
        <p><b>Email:</b> ${contact.email}</p>
        <p><b>Subject:</b> ${contact.subject || "-"}</p>
        <p><b>Message:</b><br/>${contact.message}</p>
      `
    });

    // Auto-reply to user
    await sendEmail({
      to: contact.email,
      subject: "We received your message ✅",
      html: `<p>Hi ${contact.name},</p>
             <p>Thanks for reaching out to Calvera Travels. We’ll get back to you shortly.</p>
             <p>— Calvera Team</p>`
    });

    res.status(201).json({ success: true, contact });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
