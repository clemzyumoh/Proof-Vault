import { NavLink } from "react-router-dom";
import { FaEye, FaCog } from "react-icons/fa";
import { HiOutlineUpload } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { FaSignOutAlt } from "react-icons/fa";



const Sidebar = () => {
   const { user, signOut } = useContext(AuthContext);

   const handleLogout = () => {
     signOut(); // This will remove the user from localStorage and update the state
   };

  return (
    <div className="w-64 rounded-2xl mr-8 hidden lg:block dark:bg-transparent fixed  left-0 top-0 h-screen text-black dark:text-white p-6">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-[#532ba6] dark:text-gray-100 mb-6">
        DASHBOARD
      </h1>

      {/* Navigation Links */}
      <nav className="space-y-4 mt-16 font-bold">
        {[
          { to: "/", label: "Home", icon: <IoHomeOutline /> },
          { to: "/upload", label: "Upload", icon: <HiOutlineUpload /> },
          { to: "/view/:id", label: "View", icon: <FaEye /> },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center space-x-2 py-4 px-8 rounded transition ${
                isActive
                  ? "hover:scale-105 text-white bg-[#532BA6] border-r-4"
                  : "text-neutral-400 dark:text-gray-400 hover:scale-105"
              }`
            }>
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="absolute bottom-20 left-6 font-bold space-y-4">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center space-x-2 py-4 px-8 rounded transition ${
              isActive
                ? "hover:scale-105 text-white bg-[#532BA6] border-r-4"
                : "text-neutral-400 dark:text-neutral-400 hover:scale-105"
            }`
          }>
          <FaCog /> <span>Settings</span>
        </NavLink>
     
        {user && (
         <button
                onClick={handleLogout}
                className="flex items-center space-x-2 py-4 px-8 rounded shadow-[2px_2px_2px_#040f4c] text-purple-600 dark:text-gray-100 hover:border hover:border-[#040f4c] dark:hover:border-[#ecb705] hover:scale-100 ">
                <FaSignOutAlt /> <span>Logout</span>
              </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
