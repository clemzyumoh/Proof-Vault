
// import { Link } from "react-router-dom";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import DocumentCard from "../../Components/DocumentCard";
// import { useAuth } from "../../Context/AuthContext";

// export default function Home() {
//   const { user, ethereum } = useAuth();
//   const [documents, setDocuments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDocuments = async () => {
//       //const token = localStorage.getItem("id_token"); // Civic JWT
//       try {
//         const res = await axios.get(`${import.meta.env.VITE_API_URL}/docs`, {
//           headers: { "X-Wallet-Address": ethereum.address },
//           //walletAddress: ethereum, // Sending wallet address in request body
//         });
//         setDocuments(res.data);
//       } catch (err) {
//         console.error("Failed to load documents", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (user) fetchDocuments();
//   }, [user]);

  
//     return (
//       <div className="p-6 mt-20">
//         <h1 className="text-2xl font-bold mb-4">Your Documents</h1>
//         <Link to="/upload" className="bg-blue-500 text-white px-4 py-2 rounded">
//           Upload New
//         </Link>
//             {loading ? (
//         <p>Loading...</p>
//       ) : documents.length > 0 ? (
//         <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
//           {documents.map((doc) => (
//             <DocumentCard key={doc._id} document={doc} />
//           ))}
//         </div>
//       ) : (
//         <p>No documents uploaded yet.</p>
//       )}
       
//       </div>
//     );
// }

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DocumentCard from "../../Components/DocumentCard";
import { useAuth } from "../../Context/AuthContext";

export default function Home() {
  const { user, ethereum } = useAuth();
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/docs`, {
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

  return (
    <div className="p-6 mt-20">
      <h1 className="text-2xl font-bold mb-4">Your Documents</h1>
      <Link to="/upload" className="bg-blue-500 text-white px-4 py-2 rounded">
        Upload New
      </Link>
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
    </div>
  );
}
