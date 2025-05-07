


// App.jsx
import { useState, useEffect, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./Components/SideBar";
import Home from "./Sections/Home/Home";
import Upload from "./Sections/Upload/upload";
import View from "./Sections/View/view";
import Settings from "./Sections/Setting/Setting";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Login from "./Components/Login";
//import {  useLocation } from "react-router-dom";
//import { useAuth } from "./Context/AuthContext";
import { AuthContext } from "./Context/AuthContext";
import "./index.css";
import { useLocation } from "react-router-dom";
//import { DocumentProvider } from "./Context/DocumentContext";



// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   const location = useLocation();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return children;
// };



//export default ProtectedRoute;

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};


const App = () => {
  
const location = useLocation();
const isLoginPage = location.pathname === "/login";
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setDarkMode(storedTheme !== "light");
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <main className="overflow-x-hidden">
      <div className="flex relative lg:pl-72 w-full dark:bg-black bg-white text-black dark:text-gray-300 min-h-screen">
        
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <>
                    <Sidebar />
                    <div className="flex-2 md:flex-1">
                      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
                    </div>
                  </>
                </ProtectedRoute>
              }
            />

            <Route
              path="/upload"
              element={
                <ProtectedRoute>
                  <>
                    <Sidebar />
                    <div className="flex-2 md:flex-1">
                      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                      <Upload darkMode={darkMode} setDarkMode={setDarkMode} />
                    </div>
                  </>
                </ProtectedRoute>
              }
            />

            <Route
              path="/view/:id"
              element={
                <ProtectedRoute>
                  <>
                    <Sidebar />
                    <div className="flex-2 md:flex-1">
                      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                      <View darkMode={darkMode} setDarkMode={setDarkMode} />
                    </div>
                  </>
                </ProtectedRoute>
              }
            />

            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <>
                    <Sidebar />
                    <div className="flex-2 md:flex-1">
                      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                      <Settings darkMode={darkMode} setDarkMode={setDarkMode} />
                    </div>
                  </>
                </ProtectedRoute>
              }
            />
          </Routes>
    
      </div>

      {!isLoginPage && (
        <div className="lg:hidden">
          {" "}
          <Navigation />{" "}
        </div>
      )}
    </main>
  );
};

export default App;
