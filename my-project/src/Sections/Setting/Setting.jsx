
import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import {
 
  FaTelegram,
  FaFacebook,
  FaReddit,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaSignOutAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { AuthContext } from "../../Context/AuthContext";
import { CiMail } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

import { FaIdBadge } from "react-icons/fa";
const Settings = ({ darkMode, setDarkMode }) => {
  
  const { user,  signOut } = useContext(AuthContext);

  const handleLogout = () => {
    signOut();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [profileImage, setProfileImage] = useState(null);

  return (
    <motion.div className="p-6 mt-18 dark:bg-gray-800 pb-28">
      <motion.h2
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Settings
      </motion.h2>

      {/* Avatar + Info */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative w-24 h-24">
          <img
            src={user.picture || "https://via.placeholder.com/96"}
            alt="avatar"
            className="rounded-full w-full h-full object-cover"
          />
          <label className="absolute bottom-0 right-0 bg-purple-600 text-white rounded-full p-1 cursor-pointer">
            ✎
            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          </label>
        </div>
        <h3 className="mt-4 text-lg font-semibold">{user?.name || "Username"}</h3>
        <p className="text-sm text-gray-400">{user?.email || "user@email.com"}</p>
      </div>

      {/* Info & Dark Mode */}
      <div className="p-4 shadow-lg rounded-lg bg-neutral-200 dark:bg-gray-700 text-neutral-900 dark:text-neutral-200 mb-6 space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-lg">Dark Mode</p>
          <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            animate={{ rotate: darkMode ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setDarkMode(!darkMode)}
            className="w-[24px]"
          >
            {darkMode ? (
              <Sun size={24} className="dark:text-purple-600" />
            ) : (
              <Moon size={24} className="text-[#1F1619]" />
            )}
          </motion.button>
        </div>
        <div className="flex items-center gap-2">
          <IoMdNotificationsOutline className="text-xl" />
          <span>Notifications</span>
        </div>
        <div className="flex items-center gap-2">
          <CiMail className="text-xl" />
          <span>{user?.email || "user@email.com"}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaIdBadge className="text-xl" />
          <span>{user?.id || "+123 456 7890"}</span>
        </div>
      </div>

      {/* Social Media */}
      <div className="p-4 shadow-lg rounded-lg bg-neutral-200 dark:bg-gray-700 text-neutral-900 dark:text-neutral-200 mb-6">
        <p className="text-lg font-bold mb-2">Social Media</p>
        <ul className="space-y-2">
          <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
            <FaXTwitter className="text-xl mr-2" />X
          </li>
          <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
            <FaTelegram className="text-xl mr-2" />Telegram
          </li>
          <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
            <FaFacebook className="text-xl mr-2" />Facebook
          </li>
          <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
            <FaReddit className="text-xl mr-2" />Reddit
          </li>
          <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
            <FaYoutube className="text-xl mr-2" />YouTube
          </li>
          <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
            <FaInstagram className="text-xl mr-2" />Instagram
          </li>
          <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
            <FaTiktok className="text-xl mr-2" />TikTok
          </li>
        </ul>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center space-x-2 py-4 px-8 rounded shadow-[2px_2px_2px_#040f4c] text-purple-600 dark:text-gray-100 hover:border hover:border-[#040f4c] dark:hover:border-[#ecb705] hover:scale-105"
      >
        <FaSignOutAlt /> <span>Logout</span>
      </button>
    </motion.div>
  );
};

export default Settings;
