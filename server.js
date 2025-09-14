// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Paths
const BUILD_DIR = path.resolve(__dirname, 'build');
const INDEX_HTML = path.join(BUILD_DIR, 'index.html');

// Middleware
app.use(express.static(BUILD_DIR));

// Example API route (define all API routes before wildcard)
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// SPA support (only handle non-API GET requests)
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();

  res.sendFile(INDEX_HTML, (err) => {
    if (err) {
      console.error('Error serving index.html:', err);
      res.status(500).send('Internal Server Error');
    }
  });
});

// 404 handler (for unmatched API routes or static files)
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unexpected error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
