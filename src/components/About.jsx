import React from 'react'
import './About.css'
function About() {
  return (
    <>
        <section id="about" class="about-section" style={{
                background: 'linear-gradient(135deg, #D7263D, #FF5733)',
                color: 'white',
                padding: '40px 20px',
                fontSize: '13px',
                fontWeight: 'normal',
                textAlign: 'center',
                borderRadius: '5px',
                marginBottom:'3rem',
                overflow:'hidden',
                height:'65vh'}}>
            <div class="container">
                <h1>About ScorcheTech</h1>
                <p>
                <strong>ScorcheTech</strong> is a forward-thinking web development and technology solutions provider, dedicated to creating innovative digital experiences for businesses and individuals. Our mission is to empower brands with modern, efficient, and user-friendly technology, helping them thrive in today’s competitive digital landscape.
                </p>

                <ul>
                <li>Cutting-edge technology tailored to your needs.</li>
                <li>Affordable and scalable solutions for businesses of all sizes.</li>
                <li>A focus on user experience and responsive designs.</li>
                </ul>
                <br />
                <a href="#contact" class="gradient-button">Let’s Work Together</a>
            </div>
        </section>

    </>
  )
}

export default About