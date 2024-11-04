const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

// Temporary in-memory user storage
let users = {
  "user@example.com": {
    password: bcrypt.hashSync("initial_password", 10),
  },
};

// Generate a reset token
const generateResetToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_SERVICE,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Request password reset
app.post("/request-reset-password", async (req, res) => {
  const { email } = req.body;

  if (!users[email]) {
    return res.status(404).json({ message: "User not found" });
  }

  const resetToken = generateResetToken(email);
  const resetLink = `http://localhost:${PORT}/reset-password?token=${resetToken}`;

  const mailOptions = {
    from: process.env.EMAIL_SERVICE,
    to: email,
    subject: "Password Reset Request",
    text: `Click the link to reset your password: ${resetLink}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return res.status(500).json({ message: "Error sending email" });
    res.status(200).json({ message: "Reset email sent" });
  });
});

// Reset password
app.post("/reset-password", async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const email = decoded.email;

    if (!users[email])
      return res.status(404).json({ message: "User not found" });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    users[email].password = hashedPassword;

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    res.status(400).json({ message: "Invalid or expired token" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
