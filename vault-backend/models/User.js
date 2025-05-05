const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    civicId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
    },
    name: {
      type: String,
    },
    avatarUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
