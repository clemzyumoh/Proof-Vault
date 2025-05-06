import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaUser,
  FaBars,
  FaTimes,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { Sun, Moon } from "lucide-react";
import { MdOutlineManageSearch } from "react-icons/md";

import logo3 from "../assets/Group 34.png";
import { CiWallet } from "react-icons/ci";
import AnimatedText from "./AnimationText";
//import { UserButton } from "@civic/auth-web3/react"; // Import CivicAuthProvider
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { FaEthereum } from "react-icons/fa";
import { SiSolana } from "react-icons/si";

const Header = ({ darkMode, setDarkMode }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { user, ethereum, solana } = useContext(AuthContext);
   const [selectedWallet, setSelectedWallet] = useState("ethereum");
  // Handle search input (press Enter to search)
  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

   const shortenAddress = (address) =>
    `${address.slice(0, 6)}...${address.slice(-4)}`;
   const shortenAddressMob = (address) =>
     `${address.slice(0, 3)}...${address.slice(-3)}`;

  return (
    <motion.div className="fixed top-0 w-full lg:w-[80vw] lg:dark:bg-black md:px-14  flex justify-between items-center p-4 z-40 text-black dark:text-white  bg-white dark:bg-gray-800">
      {/* 🔹 Laptop Layout */}
      <div className="hidden lg:flex items-center justify-around w-full">
        {/* Logo / Title */}
        <div className="flex  justify-center items-center">
          <h1 className="font-bold text-2xl">PROOF</h1>
          <img src={logo3} alt="" className=" w-10 h-10 " />
          <h1 className="font-bold text-2xl">VAULT</h1>
        </div>

        {/* Search Bar */}
        <div className="flex items-center border-2 border-[#EBF2FD] shadow p-2 w-[30vw]  rounded  mx-10">
          <FaSearch className="text-neutral-400 text-xl mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-[80vw] text-neutral-500"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>

        {/* Right Side: Dark Mode Toggle & User Icon */}
        <div className="flex items-center space-x-4">
          <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            animate={{ rotate: darkMode ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setDarkMode(!darkMode)}
            className="w-[24px] ">
            {darkMode ? (
              <Sun size={24} className="dark:text-[#532BA6]" />
            ) : (
              <Moon size={24} />
            )}
          </motion.button>

          <div className="flex items-center justify-between p-4">
            <div className="flex items-center justify-center gap-4">
              <p className="text-lg font-bold">{user.name}</p>
              {/* <div className="">
                <select
                  className="bg-gray-800 text-white rounded p-2"
                  value={selectedWallet}
                  onChange={(e) => setSelectedWallet(e.target.value)}>
                  <option value="ethereum">Ethereum</option>
                  <option value="solana">Solana</option>
                </select>
                <p className="text-sm mt-2">
                  {selectedWallet === "ethereum"
                    ? shortenAddress(ethereum.address)
                    : shortenAddress(solana.address)}
                </p>
              </div> */}
              <div className="">
                <select
                  className="bg-purple-600 border-purple-600 text-white rounded p-2 border-none focus:outline-none focus:ring-0 hover:bg-purple-700"
                  value={selectedWallet}
                  onChange={(e) => setSelectedWallet(e.target.value)}>
                  <option value="ethereum"> Ethereum</option>
                  <option value="solana">Solana</option>
                </select>
                <p className="text-sm flex items-center gap-2 mt-2">
                  {selectedWallet === "ethereum" ? (
                    <>
                      <FaEthereum className="text-purple-600" />
                      {shortenAddress(ethereum.address)}
                    </>
                  ) : (
                    <>
                      <SiSolana className="text-purple-600" />
                      {shortenAddress(solana.address)}
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* <div className="">
            <p className=""></p>
            {user.name}
            <p className="">{ethereum.address}</p>
            <p className="">{solana.address}</p>
          </div> */}
        </div>
      </div>

      {/* 🔹 Mobile Layout */}
      <div className="lg:hidden flex w-full justify-between items-center">
        {/* Left: Settings Button */}

        <div className="flex  justify-center items-center">
          <h1 className="font-bold text-[15px]">PROOF</h1>
          <img src={logo3} alt="" className=" w-8 h-8 " />
          <h1 className="font-bold text-[15px]">VAULT</h1>
        </div>

        {/* Right: Menu Toggle & Search Icon */}
        <div className="flex items-center ">
          <div className="flex items-center justify-between ">
            <div className="flex items-center justify-center gap-2 ">
              
              <div className="">
                <select
                  className="bg-purple-600  border-none focus:outline-none text-[12px] focus:ring-0 text-white rounded p-1"
                  value={selectedWallet}
                  onChange={(e) => setSelectedWallet(e.target.value)}>
                  <option value="ethereum"> Ethereum</option>
                  <option value="solana">Solana</option>
                </select>
                <p className="text-[12px] flex items-center gap-2 mt-2">
                  {selectedWallet === "ethereum" ? (
                    <>
                      <FaEthereum className="text-purple-600" />
                      {shortenAddressMob(ethereum.address)}
                    </>
                  ) : (
                    <>
                      <SiSolana className="text-purple-600" />
                      {shortenAddressMob(solana.address)}
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Dropdown Menu */}
      {dropdownOpen && (
        <motion.div className="absolute left-0 right-0 top-14 h-screen bg-gray-100 dark:bg-gray-800 p-4 shadow-md z-50 flex flex-col justify-between pb-16 lg:hidden">
          {/* Search Input */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search for a project..."
              className="w-full p-3 pl-10 border rounded"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Menu Links */}
          <div>
            <button className="flex items-center space-x-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <FaUser /> <span>Profile</span>
            </button>
            <button className="flex items-center space-x-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <FaBell /> <span>Notifications</span>
            </button>

            {/* Dark Mode Toggle */}
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              animate={{ rotate: darkMode ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => {
                setDarkMode(!darkMode);
                setDropdownOpen(false);
              }}
              className="w-[24px]">
              {darkMode ? (
                <Sun size={24} className="dark:text-[#0085A8]" />
              ) : (
                <Moon size={24} className="text-[#1F1619]" />
              )}
            </motion.button>

            {/* Settings Link */}
            <NavLink
              to="/settings"
              onClick={() => setDropdownOpen(false)}
              className="flex items-center space-x-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <FaCog /> <span>Settings</span>
            </NavLink>
          </div>

          {/* Logout Button */}
          <button className="flex items-center space-x-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Header;
