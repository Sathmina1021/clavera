import React, { useState } from "react";
import "./CTA.css";

// ✅ Auto-detect API base (local for dev, Vercel for prod)
const API_BASE =
  process.env.REACT_APP_API_BASE_URL ||
  "https://clavera-khm3y1ykv-calvera-travels-projects.vercel.app/api/v1";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // ===== Submit Handler =====
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/newsletter/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setSubmitted(true);
        setEmail("");

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert(data.message || "Subscription failed. Please try again.");
      }
    } catch (err) {
      console.error("❌ Newsletter subscription error:", err);
      alert("Could not connect to the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="cta-section">
      {/* Decorative Backgrounds */}
      <div className="cta-decorative-circle circle-1"></div>
      <div className="cta-decorative-circle circle-2"></div>
      <div className="cta-decorative-circle circle-3"></div>
      <div className="cta-background"></div>

      <div className="cta-content">
        {/* ========== NOT SUBMITTED ========== */}
        {!submitted ? (
          <>
            <div className="cta-info-badge">
              <i className="fas fa-star"></i>
              <span>Your Adventure Begins with Us</span>
            </div>

            <h2>
              Start Your <span>Dream Journey</span> Today
            </h2>
            <p>
              Subscribe to our newsletter and get exclusive travel deals,
              insider tips, and inspiration delivered straight to your inbox.
            </p>

            <div className="cta-form-wrapper">
              <form className="cta-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
                <button type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Subscribing...
                    </>
                  ) : (
                    <>
                      Get Started <i className="fas fa-arrow-right"></i>
                    </>
                  )}
                </button>
              </form>
            </div>
          </>
        ) : (
          // ========== SUCCESS STATE ==========
          <div className="cta-success">
            <i className="fas fa-check-circle"></i>
            <h3>Welcome Aboard!</h3>
            <p>
              Thank you for subscribing! Check your inbox for exclusive travel
              offers and updates from Calvera Travels.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;
