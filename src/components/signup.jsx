import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '../assets/google_logo.svg'; // Ensure this is the correct path for your Google logo
import ClipLoader from 'react-spinners/ClipLoader'; // Import ClipLoader for the spinner
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false); // Loading state for both email/password signup and Google sign-in
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      toast.error('Passwords do not match.', { position: "top-right", autoClose: 3000 });
      return;
    }

    try {
      setLoading(true);
      
      // Signup with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Signup successful! Redirecting to homepage...', { position: "top-right", autoClose: 3000 });

      setTimeout(() => navigate("/home"), 3000); // Redirect to homepage after 3 seconds
    } catch (err) {
      toast.error(err.message, { position: "top-right", autoClose: 3000 });
    } finally {
      setLoading(false); // Stop the spinner
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setLoading(true); // Start the spinner
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      // Handle Google user logic here
      // You can save user details to Firestore if needed
      toast.success('Signup successful! Redirecting to homepage...', { position: "top-right", autoClose: 3000 });
      setTimeout(() => navigate("/home"), 3000);
      
    } catch (err) {
      toast.error(err.message, { position: "top-right", autoClose: 3000 });
    } finally {
      setLoading(false); // Stop the spinner
    }
  };

  return (
    <section className="signUpContainer">
      <div className="container">
        <h2>Signup</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input">
            <input
              type="text"
              id="username"
              placeholder="Username"
              required
              value={formData.username}
              onChange={handleChange}
            />
          </div>
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
          <div className="input">
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="button-container">
            <input
              type="submit"
              value={loading ? 'Signing Up...' : 'Sign up'}
              disabled={loading}
            />
          </div>
          
          {/* Display Spinner when loading */}
          {loading && (
            <div className="spinner-container">
              <ClipLoader color="red" loading={loading} size={50} />

            </div>
          )}

          <div className="footer-links">
            <a href="/login">Already have an account? Login</a>
          </div>
        </form>
        <div className="google-signin">
          <button onClick={handleGoogleSignIn} disabled={loading} className="google-button">
            <img src={GoogleIcon} alt="Google logo" className="google-icon" />
            Sign in with Google
          </button>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Signup;
