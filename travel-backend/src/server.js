const app = require('./app');
const serverless = require('serverless-http');

const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV !== 'production') {
  // Run locally (e.g., npm run dev)
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
}

// Required for Vercel’s serverless environment
module.exports = app;
module.exports.handler = serverless(app);
