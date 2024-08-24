import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo/logoPinkTransperant.png";
import {
  FaArrowUp,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./index.css";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000); // Update every minute to catch year change
    return () => clearInterval(interval);
  }, []); // Run only once on component mount

  const companyMailId = "info@b2yinfy.com";
  const companyNumber = 8886123105;

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-b2y">
          <Link to="/">
            <img src={Logo} alt="logo" className="logo_img" />
          </Link>
          <p>
            B2Y is a dynamic and innovative IT solutions provider dedicated to
            empowering businesses with cutting-edge technology. With passion for
            excellence and commitment to customer satisfaction, we strive to
            deliver tailored solutions that drive growth, efficiency, and
            success.
          </p>
          <div className="footer-social-links">
            <a
              href="https://www.facebook.com/b2yinfy"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook"
            >
              <FaFacebookF className="social_icons" />
            </a>

            <a
              href="https://www.instagram.com/b2yinfy"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram"
            >
              <FaInstagram className="social_icons" />
            </a>

            <a
              href="https://www.linkedin.com/in/b2yinfy"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <FaLinkedinIn className="social_icons" />
            </a>
            <a
              href="https://twitter.com/b2yinfy"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter"
            >
              <FaTwitter className="social_icons" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=OSG3sdSiOi8"
              target="_blank"
              rel="noopener noreferrer"
              className="youtube"
            >
              <IoLogoYoutube className="social_icons white" />
            </a>
            <a
              href="https://www.whatsapp.com/channel/0029VaZpddKF1YlQjvFsbH2A"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp"
            >
              <FaWhatsapp className="social_icons white" />
            </a>
          </div>
        </div>

        <div className="footer-company">
          <h1>COMPANY</h1>

          <Link to="/about">
            <p onClick={handleScrollToTop}>About Us</p>
          </Link>
          <Link to="/services">
            <p onClick={handleScrollToTop}>Our Services</p>
          </Link>
          <Link to="/contact">
            <p onClick={handleScrollToTop}>Contact Us</p>
          </Link>
        </div>

        <div className="footer-support">
          <h1>SUPPORT</h1>
          <a href={`mailto:${companyMailId}`}>info@b2yinfy.com</a>
          <a href={`tel:${companyNumber}`}>+91 8886123105</a>
        </div>
        <div className="footer-address">
          <h1>REGISTERED ADDRESS</h1>
          <address>
            301/302, 3rd Floor, Saket Callipolis,
            <br />
            Sarjapur - Marathahalli Road,
            <br />
            Doddakannelli, Bengaluru, Karnataka 560035
          </address>
        </div>
        <button className="arrow-up" onClick={handleScrollToTop}>
          <FaArrowUp />
        </button>
      </div>

      <div className="copy-rights">
        &copy; {currentYear} All rights reserved. Developed by{" "}
        <span>B2Y Infy Solutions Pvt. Ltd.</span>
      </div>
    </div>
  );
};

export default Footer;
