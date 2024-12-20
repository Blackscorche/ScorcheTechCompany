import React from 'react';
import Slider from 'react-slick';
import './services.css';
import serviceImg from '../assets/services.png';
import WebLogo from '../assets/responsive.png';

function Services() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true, // Center slides on the carousel
    centerPadding: '20px', // Adjust this for centering slides
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    { id: 1, title: 'Website Development', description: 'Custom-built websites tailored to your needs.' },
    { id: 2, title: 'SEO Optimization', description: 'Boost your website visibility with SEO services.' },
    { id: 3, title: 'UI/UX Design', description: 'User-friendly and modern interfaces for great experiences.' },
    { id: 4, title: 'Mobile App Development', description: 'We create mobile applications for iOS and Android.' },
    { id: 5, title: 'E-commerce Solutions', description: 'Secure and scalable e-commerce platforms.' },
  ];

  return (
    <section className="services-page">
      {/* Main Content Section */}
      <div className="service-content">
        <div className="service-text">
          <h2>We offer sleek, fast, and highly secure software solutions</h2>
          <p>
            Explore our services, and if you have any doubts, take a look at our projects for proof of our expertise.
          </p>
          <a href="#" className="gradient-button">Projects</a>
        </div>

        <div className="service-img">
          <img src={serviceImg} alt="Service" className="services-image" />
        </div>
      </div>

    </section>
  );
}

export default Services;
