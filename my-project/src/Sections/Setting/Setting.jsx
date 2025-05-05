

// export default Settings;
import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import {
  FaWallet,
  FaBell,
  FaQrcode,
  FaUserShield,
  FaCog,
  FaLifeRing,
  FaInfoCircle,
  
  FaTelegram,
  FaFacebook,
  FaReddit,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";


const Settings = ({ darkMode, setDarkMode }) => {
  const [selectedWallet, setSelectedWallet] = useState("Main Wallet");
  const { user,ethereum, solana , signOut} = useContext(AuthContext);
 const handleLogout = () => {
   signOut(); // This will remove the user from localStorage and update the state
 };


  return (
    <motion.div className="p-6 mt-18 dark:bg-gray-800 pb-28">
      <motion.h2
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        Settings
      </motion.h2>

      {/* Wallet & Dark Mode Section */}
      {/* <div className="p-4 shadow-lg bg-neutral-200 dark:bg-gray-700 text-neutral-900 dark:text-neutral-200 rounded-lg mb-6">
        <p className="text-lg mb-2 flex items-center">
          <FaWallet className="mr-2" /> Wallet
        </p>
        <select
          className="w-full p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-md focus:outline-none"
          value={selectedWallet}
          onChange={(e) => setSelectedWallet(e.target.value)}>
          <option>Main Wallet</option>
          <option>Wallet 2</option>
          <option>Wallet 3</option>
          <option>Wallet 4</option>
        </select>
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg">Dark Mode</p>
          <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            animate={{ rotate: darkMode ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setDarkMode(!darkMode)}
            className="w-[24px]">
            {darkMode ? (
              <Sun size={24} className="dark:text-[#E9771D]" />
            ) : (
              <Moon size={24} className="text-[#1F1619]" />
            )}
          </motion.button>
        </div>
      </div> */}
     

      {/* Price Alert & More */}
      <div className="p-4 shadow-lg rounded-lg bg-neutral-200 dark:bg-gray-700 text-neutral-900 dark:text-neutral-200 mb-6">
        <p className="text-lg font-bold mb-2">Quick Actions</p>
        <ul className="space-y-2">
          <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
            <FaBell className="mr-2" /> Price Alert
          </li>
          <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
            <FaUserShield className="mr-2" /> Address Book
          </li>
          <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
            <FaQrcode className="mr-2" /> Scan QR Code
          </li>
          <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
            <FaCog className="mr-2" /> WalletConnect
          </li>
        </ul>
      </div>

      {/* Preferences, Security, Notifications */}
      <div className="p-4 shadow-lg rounded-lg bg-neutral-200 dark:bg-gray-700 text-neutral-900 dark:text-neutral-200 mb-6">
        <p className="text-lg font-bold mb-2">Settings</p>
        <ul className="space-y-2">
          <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
            <FaCog className="mr-2" /> Preferences
          </li>
          <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
            <FaUserShield className="mr-2" /> Security
          </li>
          <NavLink to="/notifications" className="text-xl">
            <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
              <FaBell className="mr-2" /> Notifications
            </li>
          </NavLink>
        </ul>
      </div>

      {/* Help Center, Support, About */}
      <div className="p-4 shadow-lg rounded-lg bg-neutral-200 dark:bg-gray-700 text-neutral-900 dark:text-neutral-200 mb-6">
        <p className="text-lg font-bold mb-2">Help & Support</p>
        <ul className="space-y-2">
          <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
            <FaLifeRing className="mr-2" /> Help Center
          </li>
          <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
            <FaUserShield className="mr-2" /> Support
          </li>
          <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
            <FaInfoCircle className="mr-2" /> About
          </li>
        </ul>
      </div>

      {/* Social Media */}

      <div className="p-4 shadow-lg rounded-lg bg-neutral-200 dark:bg-gray-700 text-neutral-900 dark:text-neutral-200 mb-6">
        <p className="text-lg font-bold mb-2">Social Media</p>
        <ul className="space-y-2">
          <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
            <FaXTwitter className="text-xl mr-2" />X
          </li>
          <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
            <FaTelegram className="text-xl mr-2" />
            Telegram
          </li>
          <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
            <FaFacebook className="text-xl mr-2" />
            Facebook
          </li>
          <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
            <FaReddit
              className="text-xl mr-2
            "
            />
            Reddit
          </li>
          <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
            <FaYoutube
              className="text-xl mr-2
            "
            />
            Youtube
          </li>
          <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
            <FaInstagram className="text-xl mr-2" />
            Instagram
          </li>
          <li className="flex items-center hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded">
            <FaTiktok
              className="text-xl mr-2
            "
            />
            TikTok
          </li>
        </ul>
      </div>
      <button
        onClick={handleLogout}
        className="flex items-center space-x-2 py-4 px-8 rounded shadow-[2px_2px_2px_#040f4c] text-purple-600 dark:text-gray-100 hover:border hover:border-[#040f4c] dark:hover:border-[#ecb705] hover:scale-105 ">
        <FaSignOutAlt /> <span>Logout</span>
      </button>
    </motion.div>
  );
};

export default Settings;
