import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Services from './components/services';
import About from './components/About';
import Footer from './components/Footer';
import Signup from './components/signup'; // Add your Signup component
import Login from './components/Login';

import ForgotPassword from './components/forgotpassword';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define routes */}
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <About />
            <Footer />
          </>
        } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<Services />} />
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
