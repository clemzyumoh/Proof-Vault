// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";

// const SearchPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [results, setResults] = useState([]);

//   const handleSearch = async () => {
//     // Fetch crypto data from an API based on the search term
//     const response = await fetch(
//       `https://api.coingecko.com/api/v3/search?query=${searchTerm}`
//     );
//     const data = await response.json();
//     setResults(data.coins || []);
//   };

//   return (
//     <div className="p-6 dark:bg-gray-900 min-h-screen text-neutral-900 dark:text-neutral-200">
//       <div className="flex items-center mb-6 border-b pb-2">
//         <FaSearch className="mr-2 text-gray-500" />
//         <input
//           type="text"
//           className="w-full p-2 bg-transparent focus:outline-none"
//           placeholder="Search all crypto across networks..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           onKeyPress={(e) => e.key === "Enter" && handleSearch()}
//         />
//       </div>
//       <div>
//         {results.length > 0 ? (
//           <ul className="space-y-4">
//             {results.map((coin) => (
//               <li
//                 key={coin.id}
//                 className="p-4 bg-neutral-200 dark:bg-gray-700 rounded-lg flex items-center">
//                 <img
//                   src={coin.thumb}
//                   alt={coin.name}
//                   className="w-8 h-8 mr-4"
//                 />
//                 <span className="font-medium">
//                   {coin.name} ({coin.symbol.toUpperCase()})
//                 </span>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">
//             Search for a cryptocurrency to see results.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchPage;

// import React, { useEffect, useState } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";
// import axios from "axios";

// const SearchPage = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [searchTerm, setSearchTerm] = useState(searchParams.get("query") || "");
//   const [results, setResults] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (searchTerm) {
//       handleSearch();
//     }
//   }, [searchTerm]);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.coingecko.com/api/v3/search?query=${searchTerm}`
//       );
//       setResults(response.data.coins || []);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleNewSearch = () => {
//     if (searchTerm.trim() !== "") {
//       setSearchParams({ query: searchTerm });
//     }
//   };

//   return (
//     <div className="p-6 dark:bg-gray-900 min-h-screen text-neutral-900 dark:text-neutral-200">
//       {/* Search Bar in Search Page */}
//       <div className="flex items-center border-b pb-2 w-full max-w-md mx-auto mb-6">
//         <FaSearch className="mr-2 text-gray-500" />
//         <input
//           type="text"
//           className="w-full p-2 bg-transparent focus:outline-none"
//           placeholder="Search all crypto across networks..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           onKeyPress={(e) => e.key === "Enter" && handleNewSearch()}
//         />
//         <button
//           onClick={handleNewSearch}
//           className="ml-2 p-2 bg-blue-500 text-white rounded-lg">
//           Search
//         </button>
//       </div>

//       {/* Search Results */}
//       <h2 className="text-2xl font-bold mb-4">
//         Search Results for "{searchTerm}"
//       </h2>
//       {results.length > 0 ? (
//         <ul className="space-y-4">
//           {results.map((coin) => (
//             <li
//               key={coin.id}
//               className="p-4 bg-neutral-200 dark:bg-gray-700 rounded-lg flex items-center">
//               <img src={coin.thumb} alt={coin.name} className="w-8 h-8 mr-4" />
//               <span className="font-medium">
//                 {coin.name} ({coin.symbol.toUpperCase()})
//               </span>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="text-gray-500">No results found.</p>
//       )}
//     </div>
//   );
// };

// export default SearchPage;

// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";
// import axios from "axios";

// const SearchPage = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [searchTerm, setSearchTerm] = useState(searchParams.get("query") || "");
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     if (searchTerm) {
//       handleSearch();
//     }
//   }, [searchTerm]);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.coingecko.com/api/v3/search?query=${searchTerm}`
//       );
//       setResults(response.data.coins || []);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleNewSearch = (e) => {
//     if (e.key === "Enter" && searchTerm.trim() !== "") {
//       setSearchParams({ query: searchTerm });
//     }
//   };

//   return (
//     <div className="p-6 dark:bg-gray-900 min-h-screen text-neutral-900 dark:text-neutral-200">
//       {/* Search Bar in Search Page */}
//       <div className="flex items-center border-b lg:hidden pb-2 w-full max-w-md mx-auto mb-6">
//         <FaSearch className="mr-2 text-gray-500" />
//         <input
//           type="text"
//           className="w-full p-2 bg-transparent focus:outline-none"
//           placeholder="Search all crypto across networks..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           onKeyDown={handleNewSearch} // 🔥 Triggers on Enter key
//         />
//       </div>

//       {/* Search Results */}
//       <h2 className="text-2xl font-bold mb-4">
//         Search Results for "{searchTerm}"
//       </h2>
//       {results.length > 0 ? (
//         <ul className="space-y-4">
//           {results.map((coin) => (
//             <li
//               key={coin.id}
//               className="p-4 bg-neutral-200 dark:bg-gray-700 rounded-lg flex items-center">
//               <img src={coin.thumb} alt={coin.name} className="w-8 h-8 mr-4" />
//               <span className="font-medium">
//                 {coin.name} ({coin.symbol.toUpperCase()})
//               </span>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="text-gray-500">No results found.</p>
//       )}
//     </div>
//   );
// };

// export default SearchPage;

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTermFromURL = searchParams.get("query") || "";
  const [searchTerm, setSearchTerm] = useState(searchTermFromURL);
  const [results, setResults] = useState([]);

  // useEffect(() => {
  //   if (searchTermFromURL) {
  //     setSearchTerm(searchTermFromURL); // Update state when URL changes
  //     handleSearch(searchTermFromURL);
  //   }
  // }, [searchTermFromURL]); // 👈 Watch for query changes in the URL

  useEffect(() => {
    if (searchTermFromURL) {
      setSearchTerm(searchTermFromURL);
      handleSearch(searchTermFromURL);
    }
  }, [searchTermFromURL]); // ✅ R
  const handleSearch = async (query) => {
    if (!query.trim()) return;
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      );
      setResults(response.data.coins || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleNewSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      setSearchParams({ query: searchTerm });
    }
  };

  return (
    <div className="p-6 dark:bg-gray-900 min-h-screen text-neutral-900 dark:text-neutral-200">
      {/* Search Bar (For Phones & Tablets) */}
      <div className="lg:hidden flex items-center bg-gray-500 dark:bg-gray-700 p-2 rounded mb-6">
        <FaSearch className="text-gray-400 dark:text-gray-300 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none w-full text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleNewSearch} // 🔥 Triggers search on Enter
        />
      </div>

      {/* Search Results */}
      <h2 className="text-2xl font-bold mb-4">
        Search Results for "{searchTerm}"
      </h2>
      {results.length > 0 ? (
        <ul className="space-y-4">
          {results.map((coin) => (
            <li
              key={coin.id}
              className="p-4 bg-neutral-200 dark:bg-gray-700 rounded-lg flex items-center">
              <img src={coin.thumb} alt={coin.name} className="w-8 h-8 mr-4" />
              <span className="font-medium">
                {coin.name} ({coin.symbol.toUpperCase()})
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No results found.</p>
      )}
    </div>
  );
};

export default SearchPage;

