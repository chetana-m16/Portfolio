const express = require("express");
const router = express.Router();
const { saveContact } = require("../controllers/contactControllers");

// POST /api/contact - Save contact form
router.post("/contact", saveContact);

module.exports = router;