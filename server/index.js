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

// ========== MIDDLEWARE (ORDER MATTERS!) ==========
// ========== MIDDLEWARE (ORDER MATTERS!) ==========
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfolio-chetana-portfolio.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// ========== ROUTES ==========
app.use("/api", contactRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Contact Backend Running 🚀");
});

// Test POST route to verify body parsing
app.post("/test", (req, res) => {
  console.log("Test route body:", req.body);
  res.json({ 
    message: "Test route works!", 
    receivedBody: req.body 
  });
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