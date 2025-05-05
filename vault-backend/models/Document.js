const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    filename: {
      type: String,
      required: true,
    },
    ipfsHash: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["ID", "Certificate", "Degree", "Other"],
      default: "Other",
    },
    shared: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Document", documentSchema);
const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  fileName: { type: String, required: true },
  cid: { type: String, required: true },
  size: { type: Number },
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Document", DocumentSchema);
