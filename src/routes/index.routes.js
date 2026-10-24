const express = require("express");

const router = express.Router();

// Welcome api
router.get("/",(req,res) => {
    res.status(200).json({
    success: true,
    message: "Welcome to Node.js GitHub Actions CI/CD Demo!"
  });
});

// Health Check API
router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "UP",
    message: "API is healthy"
  });
});

module.exports = router;