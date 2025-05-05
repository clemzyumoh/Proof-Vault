

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

    useEffect(() => {
      const setupWallet = async () => {
        if (user && !userHasWallet({ user, ethereum ,solana})) {
          try {
            // Create wallet for the user if it doesn't exist
            await createWallet();
            console.log("Wallet created successfully!");
          } catch (err) {
            console.error("Wallet creation failed:", err);
            setError("Failed to create wallet.");
          }
        }
      };

      setupWallet();
    }, [user, ethereum, createWallet, solana]);

    useEffect(() => {
      if (civicUser) {
        //setUser(civicUser);
    
        setUser({
          name: civicUser.name,
        
        });
      } else {
        setUser(null);
      }
      setLoading(false); // done checking user status
    }, [civicUser]);



  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated, signIn, signOut ,ethereum,createWallet, solana}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
