
// // //const express = require("express");
// // import express from "express";
// // const router = express.Router();
// // //const multer = require("multer");
// // import multer from "multer";
// // const upload = multer();

// // import {
// //   uploadDocument,
// //   getUserDocuments,
// // } from "../controllers/documentController.js";
// // import { verifyCivicJWT } from "../middleware/verifyCivicJWT.js";

// // // Upload document (already exists)
// // router.post("/upload", verifyCivicJWT, upload.single("file"), uploadDocument);

// // // New: Fetch documents belonging to the authenticated user
// // router.get("/", verifyCivicJWT, getUserDocuments);

// // export default router;

// import express from "express";
// import multer from "multer";
// import {
//   uploadDocument,
//   getUserDocuments,
// } from "../controllers/documentController.js";
// //import { verifyCivicJWT } from "../middleware/verifyCivicJWT.js";

// const router = express.Router();
// const upload = multer({
//   limits: { fileSize: 20 * 1024 * 1024 }, // 20MB max
// }); // Middleware to handle multipart/form-data (file uploads)

// // @route   POST /api/documents/upload
// // @desc    Upload a document (requires Civic auth)
// // @access  Private
// router.post("/upload",  upload.single("file"), uploadDocument);

// // @route   GET /api/documents/
// // @desc    Get all documents for authenticated user
// // @access  Private
// router.get("/",  getUserDocuments);

// export default router;


import express from "express";
import multer from "multer";
import {
  uploadDocument,
  getUserDocuments,
  getDocumentById,
} from "../controllers/documentController.js";

const router = express.Router();
const upload = multer({
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB max
});

// @route   POST /api/documents/upload
// @desc    Upload a document (requires wallet address)
// @access  Private
router.post("/upload", upload.single("file"), uploadDocument);

// @route   GET /api/documents/
// @desc    Get all documents for authenticated user using wallet address
// @access  Private
router.get("/", getUserDocuments);




router.get("/:id", getDocumentById);

export default router;
