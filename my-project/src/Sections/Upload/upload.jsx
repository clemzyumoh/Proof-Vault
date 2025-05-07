

import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { ethereum, user } = useAuth(); // ensure user._id exists
  const navigate = useNavigate();

  // const handleUpload = async (e) => {
  //   e.preventDefault();
  //   if (!file || !user?._id || !ethereum) {
  //     console.error("Missing file or user or wallet");
  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     // Step 1: Upload file to IPFS
  //     const formData = new FormData();
  //     formData.append("file", file);
  // formData.append("userId", user._id);
  // formData.append("fileName", file.name);

  // formData.append("type", "Other");
  // formData.append("size", file.size);
  //     const ipfsRes = await axios.post(
  //       `${import.meta.env.VITE_API_URL}/ipfs/upload`, // 👈 Make sure this endpoint exists
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     const { cid, ipfsHash } = ipfsRes.data;

  //     // Step 2: Upload document metadata to DB
  //     await axios.post(`${import.meta.env.VITE_API_URL}/docs/upload`,     formData, ipfsRes,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           "x-wallet-address": ethereum,
  //         },
  //       });

  //     navigate("/");
  //   } catch (err) {
  //     console.error("Upload failed", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
const handleUpload = async (e) => {
  e.preventDefault();
  if (!file || !user?._id || !ethereum) {
    console.error("Missing file or user or wallet");
    return;
  }

  setLoading(true);
  try {
    // Step 1: Upload file to IPFS
    const formData = new FormData();
    formData.append("file", file);
    const ipfsRes = await axios.post(
      `${import.meta.env.VITE_API_URL}/ipfs/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const { cid, ipfsHash } = ipfsRes.data;

    // Step 2: Save document metadata to DB (DO NOT pass formData again)
    const docPayload = {
      userId: user._id,
      fileName: file.name,
      cid,
      ipfsHash,
      type: "Other",
      size: file.size,
    };
console.log("Ethereum Wallet Address to be sent:", ethereum);
    await axios.post(
      `${import.meta.env.VITE_API_URL}/docs/upload`,
      docPayload,
      {
        headers: {
          "x-wallet-address": ethereum.address,
        },
      }
    );

    navigate("/");
  } catch (err) {
    console.error("Upload failed", err);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="p-6 mt-20 lg:mt-32">
      <h2 className="text-2xl font-semibold mb-4">Upload a Document</h2>
      <form onSubmit={handleUpload} className="space-y-4">
       
        <label className="border p-2 cursor-pointer lg:w-[40vw] rounded-2xl block">
          {file ? file.name : "Select a file"}
          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="hidden"
            required
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="bg-purple-600 text-white px-4 py-2 rounded">
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
}
