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
            <Route
              path="/"
              element={
                <PrivateRoute> {/* Protect the homepage */}
                  <>
                    <Hero />
                    <Services />
                    <About />
                    <Footer />
                  </>
                </PrivateRoute>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/services" element={<Services />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<div>404 Page Not Found</div>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
