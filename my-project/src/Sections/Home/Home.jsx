

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DocumentCard from "../../Components/DocumentCard";
import { useAuth } from "../../Context/AuthContext";
import { useDocument } from "../../Context/DocumentContext";

export default function Home() {
  const { user, ethereum } = useAuth();
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
   const { setLatestDocId } = useDocument();

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/docs`, {
          headers: {
            "X-Wallet-Address": ethereum?.address,
          },
        });
        setDocuments(res.data); // Updated here
      } catch (err) {
        console.error("Failed to load documents", err);
      } finally {
        setLoading(false);
      }
    };

    if (user && ethereum?.address) fetchDocuments();
  }, [user, ethereum]);

  useEffect(() => {
    if (documents && documents.length > 0) {
      setLatestDocId(documents[0]._id); // or last doc, depending on your preference
    }
  }, [documents]);

  return (
    <div className="p-6 my-20">
      <h1 className="text-2xl font-bold mb-4">Your Documents</h1>

      {loading ? (
        <p>Loading...</p>
      ) : documents.length > 0 ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {documents.map((doc) => (
            <DocumentCard key={doc._id} document={doc} />
          ))}
        </div>
      ) : (
        <p>No documents uploaded yet.</p>
      )}
      <Link to="/upload" className="bg-purple-600 mt-8 text-white px-4 py-2 rounded">
        Upload New
      </Link>
    </div>
  );
}
