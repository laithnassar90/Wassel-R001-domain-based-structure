// server.js
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3001;

// Paths
const BUILD_DIR = path.resolve(__dirname, 'build');
const INDEX_HTML = path.join(BUILD_DIR, 'index.html');

// Middleware
app.use(helmet());
app.use(morgan('combined'));

// Log all registered routes
app._router.stack.forEach((r) => {
  if (r.route && r.route.path) {
    console.log(`Route registered: ${r.route.path}`);
  }
});

// Example API route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// SPA catch-all route
app.get('*', { strict: false }, (req, res) => {
  res.sendFile(INDEX_HTML, (err) => {
    if (err) {
      console.error('Error serving index.html:', err);
      res.status(500).send('Internal Server Error');
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});