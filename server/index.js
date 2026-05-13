require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Contact = require("./models/Contact");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully ✅"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Contact route (debug mode)
app.post("/api/contact", async (req, res) => {
  try {
    console.log("HEADERS:", req.headers);
    console.log("BODY DATA:", req.body);

    // For now just return received data
    res.status(200).json({
      message: "Request received successfully ✅",
      body: req.body,
    });

  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({
      message: "Server error",
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});