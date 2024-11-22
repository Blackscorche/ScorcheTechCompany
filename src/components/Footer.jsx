import React from 'react';
import './Footer.css'; // Optional: Add CSS in a separate file if preferred
import scorcheTechLogo from '../assets/ScorcheTechLogo.png'; // Adjust the path to your logo

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '40px 20px', textAlign: 'center' }}>
      {/* Logo and Intro */}
      <div style={{ marginBottom: '20px' }}>
        <img
          src={scorcheTechLogo}
          alt="ScorcheTech Logo"
          style={{ width: '80px', marginBottom: '10px' }}
        />
        <p style={{ fontSize: '16px', color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
          Transforming businesses with innovative web and tech solutions, tailored for your needs.
        </p>
      </div>

      {/* Footer Sections */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'left',
      }}>
        {/* About Section */}
        <div style={{ flex: '1', minWidth: '150px', margin: '10px' }}>
          <h4 style={{ fontWeight: 'bold', color: '#343a40' }}>About Us</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/about" style={{ color: '#6c757d', textDecoration: 'none' }}>About</a></li>
            <li><a href="/team" style={{ color: '#6c757d', textDecoration: 'none' }}>Team</a></li>
            <li><a href="/blog" style={{ color: '#6c757d', textDecoration: 'none' }}>Blog</a></li>
            <li><a href="/success-stories" style={{ color: '#6c757d', textDecoration: 'none' }}>Success Stories</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div style={{ flex: '1', minWidth: '150px', margin: '10px' }}>
          <h4 style={{ fontWeight: 'bold', color: '#343a40' }}>Support</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/faq" style={{ color: '#6c757d', textDecoration: 'none' }}>FAQ</a></li>
            <li><a href="/contribute" style={{ color: '#6c757d', textDecoration: 'none' }}>Contribute</a></li>
            <li><a href="/contact" style={{ color: '#6c757d', textDecoration: 'none' }}>Contact Us</a></li>
          </ul>
        </div>

        {/* Guides Section */}
        <div style={{ flex: '1', minWidth: '150px', margin: '10px' }}>
          <h4 style={{ fontWeight: 'bold', color: '#343a40' }}>Guides</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/community-guides" style={{ color: '#6c757d', textDecoration: 'none' }}>Community Guides</a></li>
            <li><a href="/installation-guides" style={{ color: '#6c757d', textDecoration: 'none' }}>Installation Guides</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div style={{ flex: '1', minWidth: '150px', margin: '10px' }}>
          <h4 style={{ fontWeight: 'bold', color: '#343a40' }}>Legal</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/terms" style={{ color: '#6c757d', textDecoration: 'none' }}>Terms</a></li>
            <li><a href="/privacy" style={{ color: '#6c757d', textDecoration: 'none' }}>Privacy</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div style={{ marginTop: '20px', color: '#6c757d' }}>
        © 2024 ScorcheTech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
