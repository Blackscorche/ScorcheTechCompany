import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc, getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import GoogleIcon from '../assets/google_logo.svg'
import './Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [loading, setLoading] = useState(false);
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

            // Check if the username already exists in Firestore
            const usersRef = collection(db, 'users');
            const q = query(usersRef, where('username', '==', username));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                toast.error('Username is already taken.', { position: "top-right", autoClose: 3000 });
                return;
            }

            // Proceed with signup
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Save username to Firestore
            await setDoc(doc(db, 'users', user.uid), {
                username,
                email,
            });

            toast.success('Signup successful! Redirecting to homepage...', { position: "top-right", autoClose: 3000 });
            navigate("/"); // Redirect to home immediately

        } catch (err) {
            toast.error(err.message, { position: "top-right", autoClose: 3000 });
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            setLoading(true);
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Save user info to Firestore
            await setDoc(doc(db, 'users', user.uid), {
                username: user.displayName,
                email: user.email,
            });

            toast.success('Google signup successful! Redirecting to homepage...', { position: "top-right", autoClose: 3000 });
            navigate("/"); // Redirect to home immediately
        } catch (err) {
            toast.error(err.message, { position: "top-right", autoClose: 3000 });
        } finally {
            setLoading(false);
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
                    {loading && (
                        <div className="spinner-container">
                            <ClipLoader color="#000" loading={loading} size={50} />
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