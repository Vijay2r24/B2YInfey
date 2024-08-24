import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Import the styles for react-phone-number-input
import { toast } from "react-toastify";

import "./index.css";

import { Front } from "../styledComponent";
import { FaArrowDown } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneInputDisabled, setPhoneInputDisabled] = useState(false);

  const handleButtonClick = () => {
    // Scroll down by 100vh
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const handlePhoneInputChange = (value) => {
    // Check if the value is not undefined
    if (value !== undefined && value !== null) {
      // Limit phone number length based on country code
      const maxLength = getMaxLengthForCountry(countryCode);
      if (value.length > maxLength) {
        setPhoneInputDisabled(true); // Disable input field if max length exceeded
      } else {
        setPhoneInputDisabled(false);
      }
      setPhoneNumber(value);
    }
  };

  const handleCountryChange = (value) => {
    setCountryCode(value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Perform form validation here
    const formData = new FormData(e.target);
    const subject = formData.get("subject");
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    // Validate each field individually
    if (!subject || !name || !email || !phoneNumber || !message) {
      // If any field is missing, show a general error message
      toast.error("Please fill out all fields.");
      return; // Exit function if any field is missing
    }

    // Additional validation for name and subject
    if (name.length < 6) {
      toast.error("Name must be at least 6 characters long.");
      return; // Exit function if name is too short
    }

    if (subject.length < 15) {
      toast.error("Subject must be at least 15 characters long.");
      return; // Exit function if subject is too short
    }

    // Validate email
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return; // Exit function if email is not valid
    }

    // Validate phone number based on country code
    if (!isValidPhoneNumber(phoneNumber)) {
      toast.error("Please enter a valid phone number.");
      return; // Exit function if phone number is not valid
    }

    // If form is valid, proceed with sending email
    emailjs
      .sendForm("service_zgs567s", "template_u972blr", e.target, {
        publicKey: "1TZ7n1SIQrUe1p72B",
      })
      .then(
        () => {
          toast.success("Thank you for sending Email");
        },
        (error) => {
          toast.error(`Failed to send email: ${error.text}`);
        }
      );

    e.target.reset(); // Reset form after submission
    setPhoneNumber(""); // Reset phone number state
    setCountryCode(""); // Reset country code state
    setPhoneInputDisabled(false); // Reset phone input disabled state
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    // Basic email format validation using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Function to get maximum phone number length for a country
  const getMaxLengthForCountry = (countryCode) => {
    // Define maximum lengths for different countries
    const maxLengths = {
      US: 10,
      IN: 10,
      // Add more countries as needed
    };
    return maxLengths[countryCode] || 15; // Default length if country code not found
  };

  return (
    <>
      <Front>
        <div className="contact-heading">
          <h1>Contact Us</h1>
          <p>
            Welcome to B2Y, where innovation meets connectivity. We are thrilled
            to connect with you and explore how our expertise in IT solutions
            can empower your business.
          </p>
          <div className="contact-buttons">
            <button className="arrow-button" onClick={handleButtonClick}>
              Contact Us
              <span className="arrow-icon">
                <FaArrowDown />
              </span>
            </button>
          </div>
        </div>
      </Front>
      <div className="contact-us">
        <div className="contact-us-left">
          <h1>
            How to Connect with <span className="color">Us</span>?
          </h1>
          <p>
            Whether you have a specific project in mind or need guidance on the
            best IT strategies for your business, our team is ready to assist
            you. Here's how you can get in touch:
          </p>
          <div className="contact-icons-container">
            <div className="contact-icon-container">
              <div className="contact-icon">
                <FaLocationDot />
              </div>
              <div className="contact-icon-content">
                <h1>
                  Registered <span className="color">Address</span>
                </h1>
                <address>
                  301/302, 3rd Floor, Saket Callipolis,
                  <br />
                  Sarjapur - Marathahalli Road,
                  <br />
                  Doddakannelli, Bengaluru, Karnataka 560035
                </address>
              </div>
            </div>

            <div className="contact-icon-container">
              <div className="contact-icon">
                <MdEmail />
              </div>
              <div className="contact-icon-content">
                <h1>
                  Our <span className="color">Email</span>
                </h1>
                <p>info@b2yinfy.com</p>
              </div>
            </div>

            <div className="contact-icon-container">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>
              <div className="contact-icon-content">
                <h1>
                  Our <span className="color">Phone Number</span>
                </h1>
                <p>+91 8886123105</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-us-right">
          <form ref={form} onSubmit={sendEmail}>
            <h1>
              Get in <span className="color">Touch</span>
            </h1>
            <input type="text" placeholder="Subject" name="subject" />
            <input type="text" placeholder="Your Name" name="user_name" />
            <input type="email" placeholder="Email" name="user_email" />
            <PhoneInput
              className="phone"
              placeholder="Mobile number"
              value={phoneNumber}
              onChange={handlePhoneInputChange}
              defaultCountry="IN"
              country={countryCode}
              onCountryChange={handleCountryChange}
              name="user_phone"
              disabled={phoneInputDisabled}
            />
            <textarea
              type="text"
              placeholder="Your Message"
              rows="5"
              cols="60"
              name="message"
            ></textarea>
            <button type="submit" className="submit_btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
