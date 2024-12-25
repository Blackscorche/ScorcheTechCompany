// ServicesCarousel.js
import React from "react";
import Slider from "react-slick";
import "./ServicesCarousel.css";
import Card from "./Card"; // Ensure this path is correct

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesCarousel = () => {
  const settings = {
    dots: true,
    arrows: true, // Explicitly enable arrows
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // 3 seconds between slides
    pauseOnHover: true, // Pause on hover (works for desktop)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          autoplay: false, // Disable autoplay on mobile
          pauseOnHover: false, // Disable hover pause on mobile
        },
      },
    ],
  };

  const services = [
    {
      icon: "https://via.placeholder.com/80", // Replace with your actual icon paths
      title: "Web Development",
      description:
        "We create sleek, secure, and fast web applications tailored to your needs.",
    },
    {
      icon: "https://via.placeholder.com/80",
      title: "App Development",
      description:
        "Build cutting-edge mobile apps for Android and iOS platforms.",
    },
    {
      icon: "https://via.placeholder.com/80",
      title: "UI/UX Design",
      description:
        "Crafting user-centric and visually engaging designs for your products.",
    },
    {
      icon: "https://via.placeholder.com/80",
      title: "Cloud Solutions",
      description:
        "Reliable cloud services to scale your applications seamlessly.",
    },
  ];

  return (
    <div className="services-carousel">
      <h2 className="carousel-title">Our Services</h2>
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index}>
            <Card
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServicesCarousel;
