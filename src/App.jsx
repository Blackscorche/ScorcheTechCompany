import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import Services from "./components/services";
import About from "./components/About";
import Signup from "./components/signup";
import Login from "./components/Login";
import ForgotPassword from "./components/forgotpassword";
import Home from "./components/home"; // Import Home component
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          {/* Navbar appears on every page */}
          <Navbar />

          {/* App Routes */}
          <Routes>
            {/* Default route: Show Hero, Services, About */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Hero />
                  <Services/>
                  <About/>

                </PrivateRoute>
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

          {/* Footer appears on every page */}
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
