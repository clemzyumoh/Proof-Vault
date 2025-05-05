import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext"; // Ensure this path is correct
import { useContext } from "react";
const Home = () => {
  const { user } = useContext(AuthContext); // Access the user object from your AuthContext
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const res = await axios.get("/api/docs", {
          headers: { Authorization: `Bearer ${user.jwt}` },
        });
        setDocs(res.data);
      } catch (err) {
        console.error("Auth failed", err);
      }
    };

    if (user?.jwt) fetchDocs();
  }, [user]);

  return (
    <div className="p-6 mt-20">
      <h1 className="text-2xl font-bold mb-4">Your Documents</h1>
      <Link to="/upload" className="bg-blue-500 text-white px-4 py-2 rounded">
        Upload New
      </Link>
      <ul className="mt-4">
        {docs.map((doc) => (
          <li key={doc.id} className="mt-2">
            <Link to={`/view/${doc.id}`} className="text-blue-600 underline">
              {doc.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
