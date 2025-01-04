import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/hero"; // Ensure the case matches
import Services from "./components/services"; // Ensure the case matches
import About from "./components/About"; // Ensure the case matches
import Signup from "./components/signup"; // Ensure the case matches
import Login from "./components/Login"; // Ensure the case matches
import ForgotPassword from "./components/forgotpassword"; // Ensure the case matches
import Home from "./components/home"; // Ensure the case matches
import PrivateRoute from "./components/PrivateRoute"; 
import { AuthProvider } from "./context/AuthContext"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            {/* Main page with Hero, Services, and About sections */}
            <Route
              path="/"
              element={
                <div>
                  <Hero />
                  <Services />
                  <About />
                </div>
              }
            />

            {/* Protected route for Home */}
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />

            {/* Other public pages */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />

            {/* Fallback route */}
            <Route path="*" element={<div>404 Page Not Found</div>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;