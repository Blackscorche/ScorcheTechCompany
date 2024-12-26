import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import About from "./components/About";
import Footer from "./components/Footer";
import Signup from "./components/signup";
import Login from "./components/Login";
import ForgotPassword from "./components/forgotpassword";
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            {/* Protect the homepage */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <>
                    <Hero />
                    <Services />
                    <About />
                    <Footer />
                  </>
                </PrivateRoute>
              }
            />

            {/* Public routes */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/footer" element={<Footer />} />

            {/* Fallback route */}
            <Route path="*" element={<div>404 Page Not Found</div>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
