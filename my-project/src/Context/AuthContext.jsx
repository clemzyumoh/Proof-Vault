

import React, { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "@civic/auth-web3/react"; // Use the correct Civic Web3 SDK
import { userHasWallet } from "@civic/auth-web3";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
  const {
    user: civicUser,
    signIn,
    signOut,
    ethereum,
      createWallet,
    solana,
  } = useUser();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // NEW

    // useEffect(() => {
    //   const setupWallet = async () => {
    //     if (user && !userHasWallet({ user, ethereum ,solana})) {
    //       try {
    //         // Create wallet for the user if it doesn't exist
    //         await createWallet();
    //         console.log("Wallet created successfully!");
    //       } catch (err) {
    //         console.error("Wallet creation failed:", err);
    //         setError("Failed to create wallet.");
    //       }
    //     }
    //   };

    //   setupWallet();
    // }, [user, ethereum, createWallet, solana]);
useEffect(() => {
  if (!user || !ethereum) return;

  const setupWallet = async () => {
    const hasWallet = userHasWallet({ user, ethereum, solana });
    if (!hasWallet) {
      try {
        await createWallet();
        console.log("Wallet created successfully!");
      } catch (err) {
        console.error("Wallet creation failed:", err);
        // optionally surface to UI
      }
    }
  };

  setupWallet();
}, [user, ethereum, solana, createWallet]);

  // useEffect(() => {
  //     console.log("userdeatils,", civicUser)
  //     if (civicUser) {
  //       //setUser(civicUser);
    
  //       setUser({
  //         name: civicUser.name,
  //         email: civicUser.email,
  //         picture: civicUser.picture,
  //         _id: civicUser.id,
        
  //       });
  //     } else {
  //       setUser(null);
  //     }
  //     setLoading(false); // done checking user status
  //   }, [civicUser]);
useEffect(() => {
  if (civicUser) {
    setUser({
      name: civicUser.name,
      email: civicUser.email,
      picture: civicUser.picture,
      _id: civicUser.id,
    });
    setLoading(false); // ✅ Only mark loading as done after setting user
  } else {
    setUser(null);
    setLoading(false); // Optional: mark as done even if user is null
  }
}, [civicUser]);



  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated, signIn, signOut ,ethereum,createWallet, solana}}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
