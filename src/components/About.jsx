import React from 'react'
function About() {
  return (
    <>
        <section id="about" class="about-section" style={{
                background: 'linear-gradient(135deg, #D7263D, #FF5733)',
                color: 'white',
                padding: '40px 20px',
                fontSize: '18px',
                fontWeight: 'normal',
                textAlign: 'center',
                borderRadius: '5px',
                height:'100vh'}}>
            <div class="container">
                <h2>About ScorcheTech</h2>
                <p>
                <strong>ScorcheTech</strong> is a forward-thinking web development and technology solutions provider, dedicated to creating innovative digital experiences for businesses and individuals. Our mission is to empower brands with modern, efficient, and user-friendly technology, helping them thrive in today’s competitive digital landscape.
                </p>
                <p>
                With expertise in custom website development, e-commerce solutions, web and mobile apps, and UI/UX design, ScorcheTech turns ideas into reality. We prioritize functionality, aesthetics, and scalability to deliver solutions tailored to meet unique needs.
                </p>
                <p>
                At ScorcheTech, we believe in simplicity, creativity, and results-driven solutions. Whether it’s a small personal project or a complex business platform, we’re committed to delivering exceptional quality every step of the way.
                </p>
                <ul>
                <li>Cutting-edge technology tailored to your needs.</li>
                <li>Affordable and scalable solutions for businesses of all sizes.</li>
                <li>A focus on user experience and responsive designs.</li>
                </ul>
                <a href="#contact" class="gradient-button">Let’s Work Together</a>
            </div>
        </section>

    </>
  )
}

export default About