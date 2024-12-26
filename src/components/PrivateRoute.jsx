import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  // Allow access to the route if a user is logged in; otherwise, redirect to login
  return currentUser ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
