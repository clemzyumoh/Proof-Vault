import { Link } from "react-router-dom";

export default function DocumentCard({ document }) {
  return (
    <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-medium truncate">{document.name}</h3>
      <p className="text-sm text-gray-500 mb-2">
        Uploaded: {new Date(document.uploadedAt).toLocaleDateString()}
      </p>

      <div className="flex items-center justify-between mt-3">
        <a
          href={document.ipfsHash}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 text-sm hover:underline">
          View on IPFS
        </a>

        <Link
          to={`/view/${document._id}`}
          className="text-sm text-blue-500 hover:underline">
          View
        </Link>
      </div>
    </div>
  );
}
