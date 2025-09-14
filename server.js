// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Paths
const BUILD_DIR = path.resolve(__dirname, 'build');
const INDEX_HTML = path.join(BUILD_DIR, 'index.html');

// Middleware: Serve static files
app.use(express.static(BUILD_DIR));

// SPA support: Catch-all route for non-API paths
app.get('/*', function (req, res, next) {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(INDEX_HTML, (err) => {
    if (err) {
      console.error('Error serving index.html:', err);
      res.status(500).send('Internal Server Error');
    }
  });
});

// Example API route
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// 404 handler for unknown API routes
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Global error handler
app.use((err, req, res, _next) => {
  console.error('Unexpected error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
