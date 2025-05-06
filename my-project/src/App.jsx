// //import { useSelector } from "react-redux";
// import { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Sidebar from "../src/Components/SideBar";
// import Home from "../src/Sections/Home/Home";
// import Upload from "./Sections/Upload/upload";
// import View from "./Sections/View/view";

// import Settings from "../src/Sections/Setting/Setting";

// import Header from "./Components/Header";
// import "../src/index.css";

// import Navigation from "./Components/Navigation";

// import { useAuth } from "./Context/AuthContext";
// import Login from "../src/Components/Login";


//  const ProtectedRoute = ({ children }) => {
//    const { user } = useAuth();
//    return user ? children : <Navigate to="/login" />;
//  };



// const App = () => {
//   //const { darkMode } = useSelector((state) => state.settings);
//   const [darkMode, setDarkMode] = useState(false); // Default to dark mode

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme");
//     if (storedTheme === "light") {
//       setDarkMode(false);
//     } else {
//       setDarkMode(true);
//     }
//   }, []);

 
//   useEffect(() => {
//     console.log("Dark Mode:", darkMode);
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   return (
//     <main className="  overflow-x-hidden">
//       <div>
//         <div className="flex  relative  lg:pl-72 w-full dark:bg-gradient-to-bl dark:from-black dark:to-black dark:via-black bg-[#ffffff] border-none border-[#040f4c] dark:bg-black text-black dark:text-gray-300 min-h-screen">
//           <Route path="/login" element={<Login />} />
//           <ProtectedRoute>
//             <Sidebar />
//           </ProtectedRoute>
//           <div className="flex-2 md:flex-1">
//             <ProtectedRoute>
//               <Header darkMode={darkMode} setDarkMode={setDarkMode} />
//             </ProtectedRoute>

//             <Routes>
//               <Route
//                 path="/"
//                 element={
//                   <ProtectedRoute>
//                     <Home darkMode={darkMode} setDarkMode={setDarkMode} />
//                   </ProtectedRoute>
//                 }
//               />

//               <Route
//                 path="/upload"
//                 element={
//                   <ProtectedRoute>
//                     <Upload darkMode={darkMode} setDarkMode={setDarkMode} />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="/view"
//                 element={
//                   <ProtectedRoute>
//                     <View darkMode={darkMode} setDarkMode={setDarkMode} />
//                   </ProtectedRoute>
//                 }
//               />
//               {/* <Route path="/search" element={<SearchPage />} />
//               <Route path="/notifications" element={<NotificationPage />} />
//               <Route
//                 path="/launchpad"
//                 element={
//                   <Launchpad darkMode={darkMode} setDarkMode={setDarkMode} />
//                 }
//               />
//               <Route
//                 path="/discover"
//                 element={
//                   <Saxophone darkMode={darkMode} setDarkMode={setDarkMode} />
//                 }
//               /> */}
//               <Route
//                 path="/settings"
//                 element={
//                   <ProtectedRoute>
//                     <Settings darkMode={darkMode} setDarkMode={setDarkMode} />
//                   </ProtectedRoute>
//                 }
//               />
//             </Routes>
//           </div>
//         </div>
//       </div>

//       <ProtectedRoute>
//         <Navigation />
//       </ProtectedRoute>
//     </main>
//   );
// };

// export default App;


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

      <ProtectedRoute></ProtectedRoute>
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
