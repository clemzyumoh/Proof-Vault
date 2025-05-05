// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router } from "react-router-dom";
// //import { Provider } from "react-redux";
// //import store from "./Redux/store.js";
// import App from "./App.jsx";
// import "./index.css";
// import { AuthProvider } from "./Context/AuthContext.jsx";
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Router>
//       <AuthProvider>
//         <App />
//       </AuthProvider>
//     </Router>
//   </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter  } from "react-router-dom";
import { CivicAuthProvider } from "@civic/auth-web3/react"; // Import CivicAuthProvider
import { AuthProvider } from "./Context/AuthContext.jsx";
import App from "./App.jsx";
import "./index.css";

// Make sure to wrap with CivicAuthProvider here
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CivicAuthProvider clientId={import.meta.env.VITE_CIVIC_CLIENT_ID}>
      
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </CivicAuthProvider>
  </StrictMode>
);
