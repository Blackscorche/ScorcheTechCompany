import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase"; // Import your Firebase auth configuration
import { onAuthStateChanged } from "firebase/auth"; // Adjust if not using Firebase

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false); // Ensure loading stops once user state is determined
    });

    return unsubscribe; // Cleanup subscription on unmount
  }, []);

  const value = {
    currentUser, // Provide current user to the app
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Render children only when loading completes */}
    </AuthContext.Provider>
  );
}
