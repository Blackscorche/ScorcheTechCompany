import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase'; // Import Firebase auth

const ProtectedRoute = ({ children }) => {
    const user = auth.currentUser; // Get the current authenticated user

    // If no user is logged in, redirect to login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // If the user is authenticated, allow access
    return children;
};

export default ProtectedRoute;
