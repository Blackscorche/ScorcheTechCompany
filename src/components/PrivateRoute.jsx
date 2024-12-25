import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth(); // Get the user state from Auth Context

  // If no user is logged in, redirect to the login page
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
