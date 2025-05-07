import { createContext, useContext, useState } from "react";

export const DocumentContext = createContext();

export const DocumentProvider = ({ children }) => {
    const [latestDocId, setLatestDocId] = useState(null);
    const [currentDocId, setCurrentDocId] = useState(null);

  return (
    <DocumentContext.Provider value={{ latestDocId, setLatestDocId , currentDocId, setCurrentDocId}}>
      {children}
    </DocumentContext.Provider>
  );
};

export const useDocument = () => useContext(DocumentContext);
