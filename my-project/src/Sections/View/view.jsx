import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";

export default function View() {
  const { id } = useParams();
  const [document, setDocument] = useState(null);
  const { ethereum} = useAuth();
  const navigate = useNavigate();

const [error, setError] = useState(null);


  
  useEffect(() => {
    const fetchDoc = async () => {
      try {
        const apiUrl = `${import.meta.env.VITE_API_URL}/api/docs/${id}`;
        const response = await fetch(apiUrl, {
          headers: { "X-Wallet-Address": ethereum.address},
        });
        if (response.ok) {
          const document = await response.json();
          setDocument(document); // ✅
        } else {
          throw new Error("Document not found");
        }
      } catch (err) {
        console.error(err);
        setError("Document not found or failed to load.");
      }
    };

    if (id) fetchDoc();
  }, [id]);


  // const handleDelete = async () => {
  //   try {
  //     await axios.delete(`${import.meta.env.VITE_API_URL}/docs/${id}`, {
  //       //headers: { Authorization: `Bearer ${token}` },
  //       headers: { "X-Wallet-Address": ethereum.address },
  //     });
  //     navigate("/");
  //   } catch (err) {
  //     console.error("Delete failed", err);
  //   }
  // };
  const handleDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/docs/${id}`, {
        headers: { "X-Wallet-Address": ethereum.address }, // Send wallet address for validation
      });
      navigate("/"); // Redirect to the home page after deletion
    } catch (err) {
      console.error("Delete failed", err);
      alert("Failed to delete the document.");
    }
  };


  //if (!document) return <p>Loading document...</p>;
   const ipfsUrl = document
     ? `https://ipfs.io/ipfs/${document.ipfsHash}`
     : null;

if (error) return <p className="text-red-500 mt-20">{error}</p>;
if (!document) return <p className="mt-20">Loading document...</p>;

  return (
    <div className="flex justify-center items-center  ">
      <div className="p-4 shadow-lg  bg-neutral-200 dark:bg-gray-800 lg:mt-40 text-neutral-900 flex justify-center items-center flex-col rounded-2xl md:w-[60vw] w-[90vw] dark:text-neutral-200 mb-6  mt-28">
        <h2 className="text-2xl font-semibold">{document.fileName}</h2>
        <p className="text-sm text-gray-500 mb-4">
          Uploaded on: {new Date(document.uploadedAt).toLocaleString()}
        </p>
        <a
          href={ipfsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 border-purple-600 border-2 py-2 px-3 rounded-xl my-4">
          View on IPFS
        </a>
        <div className="mt-4">
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
