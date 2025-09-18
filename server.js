// server.js
const express = require('express');
const path = require('path');
const Router = require('router'); // require the router package
const finalhandler = require('finalhandler'); // needed for router

const app = express();
const PORT = process.env.PORT || 3001;

// Paths
const BUILD_DIR = path.resolve(__dirname, 'build');
const INDEX_HTML = path.join(BUILD_DIR, 'index.html');

// Create a router instance
const router = Router();

// Example API route using router
router.get('/api/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// SPA catch-all route using router
router.get('/*', (req, res) => {
  res.sendFile(INDEX_HTML, (err) => {
    if (err) {
      console.error('Error serving index.html:', err);
      res.status(500).send('Internal Server Error');
    }
  });
});

// Use the router in Express
app.use((req, res) => {
  router(req, res, finalhandler(req, res));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});