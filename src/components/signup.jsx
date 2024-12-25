import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            toast.error('Passwords do not match.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }

        try {
            setLoading(true);

            // Check if the username already exists in Firestore
            const usersRef = collection(db, 'users');
            const q = query(usersRef, where('username', '==', username));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                toast.error('Username is already taken.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
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

            toast.success('Signup successful! Redirecting to homepage...', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            // Redirect to home page after a delay
            setTimeout(() => {
                window.location.href = '/';
            }, 3000);

        } catch (err) {
            toast.error(err.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
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
                    <div className="footer-links">
                        <a href="/login">Already have an account? Login</a>
                    </div>
                    
                </form>
            </div>
            <ToastContainer />
        </section>
    );
};

export default Signup;
