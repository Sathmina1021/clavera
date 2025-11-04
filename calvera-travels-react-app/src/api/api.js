const API_BASE = process.env.REACT_APP_API_BASE_URL || "http://localhost:4000/api/v1";

// ✅ Example: Send contact form
export async function sendContactForm(data) {
  const res = await fetch(`${API_BASE}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const msg = await res.text();
    throw new Error(`Contact form failed: ${msg}`);
  }
  return await res.json();
}

// ✅ Example: Get all tours
export async function getTours() {
  const res = await fetch(`${API_BASE}/tours`);
  if (!res.ok) throw new Error("Failed to fetch tours");
  return await res.json();
}
