// pages/View.jsx
import React from "react";
import { useParams } from "react-router-dom";

const view = () => {
  const { docId } = useParams();

  return (
    <div className="p-6 mt-20">
      <h1 className="text-2xl font-bold mb-4">Viewing Document ID: {docId}</h1>
      <div className="border p-4 bg-gray-100">Mock document preview</div>
    </div>
  );
};

export default view;
