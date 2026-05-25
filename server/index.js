require("dotenv").config();

const express = require("express");
const http = require("http");
const cors = require("cors");

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
const server = http.createServer(app);

// Connect to MongoDB
connectDB();

app.use(
  cors({
    origin: "https://portfolio-chetana-portfolio.vercel.app",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.options("*", cors());
app.use(express.json());

app.use(express.json({ limit: "10mb" }));  // Parses JSON
app.use(express.urlencoded({ limit: "10mb", extended: true }));  // Parses form data

// Debug middleware to see what's coming in
app.use((req, res, next) => {
  console.log(`\n ${req.method} ${req.url}`);
  console.log("Headers:", req.headers["content-type"]);
  console.log("Body:", req.body);
  next();
});

// ========== ROUTES ==========
app.use("/api", contactRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Contact Backend Running 🚀");
});

app.post("/api/contact", async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing fields",
      });
    }

    const contact = new Contact({
      name,
      email,
      message,
    });

    await contact.save();

    res.status(201).json({
      success: true,
      message: "Message saved successfully",
    });

  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.url} not found`
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Global Error Handler:", err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`\n🚀 Server running on port ${PORT}`);
  console.log(`📝 API Endpoint: http://localhost:${PORT}/api/contact`);
  console.log(`🧪 Test endpoint: http://localhost:${PORT}/test\n`);
});