const { Web3Storage, File } = require("web3.storage");
const Document = require("../models/Document");

const token = process.env.WEB3_STORAGE_TOKEN;

const storage = new Web3Storage({ token });

const uploadDocument = async (req, res) => {
  try {
    const file = req.file;
    const userId = req.body.userId;

    if (!file || !userId) {
      return res.status(400).json({ error: "Missing file or user ID" });
    }

    const web3File = new File([file.buffer], file.originalname, {
      type: file.mimetype,
    });

    const cid = await storage.put([web3File]);

    const newDoc = await Document.create({
      userId,
      fileName: file.originalname,
      cid,
      size: file.size,
    });

    res.status(201).json({ message: "Document uploaded", document: newDoc });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Failed to upload document" });
  }
};

module.exports = { uploadDocument };
