import React from 'react'
import './Navbar.css'
import Logo from '../assets/ScorcheTechLogo.png'
function Navbar() {
  return (
    <>
      <div className="header">
        <div className="navbar">
          <div className="logo">
              <img src={Logo} alt="" />
              <h4><span className='txtGrad'>Scorche</span>Tech</h4>
          </div>

          <div className="navlinks">
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">About</a></li>
              </ul>

              <button className="gradient-button btn">
                  Contact Me
              </button>
          </div>


        </div>

      </div>

    </>
  )
}

export default Navbar