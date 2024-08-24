import React from "react";

import { FaArrowDown } from "react-icons/fa6";

import "./index.css";

import { Front } from "../styledComponent";
import { servicesList } from "../../constants/index";

const Services = () => {
  const handleButtonClick = () => {
    // Scroll down by 100vh
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Front>
        <div className="services-page">
          <h1>Our Services</h1>
          <p>
            At B2Y, we offer a comprehensive range of IT services tailored to
            meet the diverse needs of our clients. With our team of experienced
            professionals and cutting-edge technology, we strive to deliver
            innovative solutions that drive business growth and success.
          </p>
          <div className="services-page-buttons">
            <button className="arrow-button" onClick={handleButtonClick}>
              Explore Our Services
              <span className="arrow-icon">
                <FaArrowDown />
              </span>
            </button>
          </div>
        </div>
      </Front>
      <div className="our_services_section">
        <div className="our_service">
          <h1 className="our_service_heading">
            Our <span className="color">Services</span>
          </h1>
          <p className="our_service_para">
            Empowering businesses through tailored IT solutions, driven by
            innovation and expertise.
          </p>
        </div>
        <div className="our_service_content">
          {servicesList.map((item) => (
            <div className="our_service_card" key={item.title}>
              <div className="icon">
                <img src={item.svg} alt={item.title} />
              </div>
              <div className="service_card_content">
                <h3 className="card_heading">{item.title}</h3>
                <p className="card_para">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
