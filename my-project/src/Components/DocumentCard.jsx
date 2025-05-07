import {  useNavigate} from "react-router-dom";
import { useDocument } from "../Context/DocumentContext";


export default function DocumentCard({ document }) {
  const { setCurrentDocId } = useDocument();
  const navigate = useNavigate()

   const ipfsUrl = document
     ? `https://ipfs.io/ipfs/${document.ipfsHash}`
     : null;
  return (
    <div className="p-4 shadow-lg rounded-lg bg-neutral-200 dark:bg-gray-700 text-neutral-900 w-full dark:text-neutral-200 mb-3">
      <h3 className="text-lg font-medium truncate">{document.fileName}</h3>
      <p className="text-sm text-gray-500 mb-2">
        Uploaded: {new Date(document.uploadedAt).toLocaleDateString()}
      </p>

      <div className="flex items-center justify-between mt-3">
        <a
          href={ipfsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 py-2 border-2 border-purple-600 rounded-xl my-3 px-3 dark:text-white text-sm hover:underline">
          View on IPFS
        </a>

       
        <button
          
          onClick={() => {
            setCurrentDocId(document._id); // ✅ Set it when clicking view
            navigate(`/view/${document._id}`);
          }}>
          View
        </button>
      </div>
    </div>
  );
}
