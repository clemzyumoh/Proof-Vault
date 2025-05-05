const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const { uploadDocument } = require("../controllers/documentController");

router.post("/upload", upload.single("file"), uploadDocument);

module.exports = router;

// import express from "express";
// import { verifyToken } from "../middleware/authMiddleware.js";

// const router = express.Router();

// router.get("/", verifyToken, async (req, res) => {
//   // now you can use req.user to get the logged in user info
//   const userWallet = req.user.wallet;
//   // Fetch documents for userWallet...
//   res.json({ message: `Documents for ${userWallet}` });
// });

// export default router;

// import express from "express";
// import { verifyCivicJWT } from "../middleware/verifyCivicJWT.js";

// const router = express.Router();

// // Protect this route using the Civic JWT middleware
// router.get("/docs", verifyCivicJWT, (req, res) => {
//   const wallet = req.user.sub; // `sub` holds the wallet address in Civic's JWT
//   res.json({ message: `Docs for wallet: ${wallet}` });
// });

// export default router;
