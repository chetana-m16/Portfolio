const Contact = require("../models/contact");

const saveContact = async (req, res) => {
  try {
    console.log("Received body in controller:", req.body);
    
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
        received: { name, email, message }
      });
    }

    const newContact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "",
      data: {
        id: newContact._id,
        name: newContact.name,
        email: newContact.email
      }
    });
  } catch (error) {
    console.error("Error in saveContact:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

module.exports = { saveContact };