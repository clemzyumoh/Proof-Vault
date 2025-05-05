// pages/Upload.jsx
import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      setUploading(true);

      // Get userId from localStorage (or replace with context if using context)
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user || !user._id) {
        alert("User not logged in.");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("userId", user._id);

      const res = await axios.post("/api/docs/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Uploaded:", res.data);
      alert("Upload successful!");
      setFile(null);
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed. Check console for details.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 mt-20">
      <h1 className="text-2xl font-bold mb-4">Upload Document</h1>
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className="ml-4 bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50">
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default Upload;
