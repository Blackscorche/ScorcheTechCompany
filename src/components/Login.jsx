import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Import firebase auth
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { useAuth } from "../context/AuthContext"; // Import AuthContext

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // For redirection
  const { user } = useAuth(); // Get user from AuthContext

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      setLoading(true);

      // Firebase Login
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User logged in:", user);

      // Show success toast
      toast.success("Login successful! Redirecting...", {
        position: "top-center",
        autoClose: 2000,
      });

      // Redirect to homepage
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Login failed:", error.message);
      toast.error("Login failed: " + error.message, {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginContainer">
      <ToastContainer />
      <div className="container">
        <h2>Login</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input">
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="button-container">
            <input type="submit" value={loading ? "Signing in..." : "Sign in"} disabled={loading} />
          </div>
        </form>
        <div className="footer-links">
          <a href="/forgotPassword">Forgot Password?</a>
          <a href="/signup">Signup</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
