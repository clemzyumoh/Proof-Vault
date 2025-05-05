const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const axios = require("axios");
const User = require("../models/User"); // Make sure you have this model
require("dotenv").config();

router.post("/login", async (req, res) => {
  const { civicJwt } = req.body;

  if (!civicJwt)
    return res.status(400).json({ error: "No Civic token provided" });

  try {
    // Verify Civic token using Civic's API
    const civicRes = await axios.get("https://hosted.civic.com/api/token/me", {
      headers: {
        Authorization: `Bearer ${civicJwt}`,
      },
    });

    const userData = civicRes.data;
    const email = userData.email;

    // Find or create the user
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        email,
        name: userData.given_name || "No Name",
      });
    }

    // Generate JWT for our app
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ token, user });
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    res.status(401).json({ error: "Invalid Civic token" });
  }
});

module.exports = router;
