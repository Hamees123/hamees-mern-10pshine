const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const logger = require("../utils/logger"); 

const JWT_SECRET = "notes_app_key";

// Register
async function register(req, res) {
  try {
    const { username, email, password } = req.body;

    logger.info({ username, email }, "Register request received");

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword });

    logger.info({ userId: user.id }, "User registered successfully");

    res.status(201).json({
      message: "User registered",
      user: { id: user.id, username, email }
    });
  } catch (error) {
    logger.error({ err: error }, "Registration failed");
    res.status(500).json({ error: "Registration failed", details: error.message });
  }
}

// Login
async function login(req, res) {
  try {
    const { email, password } = req.body;

    logger.info({ email }, "Login attempt");

    const user = await User.findOne({ where: { email } });
    if (!user) {
      logger.warn({ email }, "Login failed: user not found");
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      logger.warn({ email }, "Login failed: incorrect password");
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });

    logger.info({ userId: user.id }, "Login successful");

    res.json({ message: "Login successful", token });
  } catch (error) {
    logger.error({ err: error }, "Login failed");
    res.status(500).json({ error: "Login failed", details: error.message });
  }
}

module.exports = { register, login };
