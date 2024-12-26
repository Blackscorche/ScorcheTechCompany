import React from "react";
import './home.css';
function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page!</h1>
      <p>This page is only accessible to logged-in users.</p>
    </div>
  );
}

export default Home;
