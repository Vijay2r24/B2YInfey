import React from "react";

import { FaArrowDown } from "react-icons/fa6";
import { aboutList } from "../../constants/index";
import { whatWeOffer } from "../../constants/index";
import OurStoryImg from "../../assets/images/ourStory.jpg";
import OurMissionImg from "../../assets/images/mission.jpg";

import "./index.css";
import { Front } from "../styledComponent";
// import { Value } from "./styledComponent";
const About = () => {
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
        <div className="about-heading">
          <h5>OUR STORY</h5>
          <h1>About US</h1>
          <p>
            At B2Y, we are not just a team of tech enthusiasts; we are
            architects of innovation, builders of solutions, and champions of
            digital transformation. Founded on the belief that technology has
            the power to reshape the future, our startup journey began with a
            simple yet ambitious goal – to redefine the IT landscape and empower
            businesses for success.
          </p>
          <div className="about-buttons">
            <button className="arrow-button" onClick={handleButtonClick}>
              Explore Us
              <span className="arrow-icon">
                <FaArrowDown />
              </span>
            </button>
          </div>
        </div>
      </Front>
      <div className="advantages_Container">
        {aboutList.map((item) => (
          <div className="advantages_card">
            <div className="svg_icons">
              <img src={item.svg} alt="advantage" width={60} height={60} />
            </div>
            <div className="advantages_text">
              <h2 className="advantages_head">{item.title}</h2>
              <p className="advantages_para">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="storyContainer">
        <div className="storySection">
          <div className="story_img1">
            <img src={OurStoryImg} alt="Our_Story" className="storyimg1" />
          </div>
          <div className="storyText">
            <div className="storyText_head_section">
              <h2 className="our_story_head">
                Our<span className="color space">Story</span>
              </h2>
              <span className="out_story_subheading">
                From Vision to Venture
              </span>
            </div>
            <p className="our-story_para1">
              Established from a mutual enthusiasm for pioneering technology,
              B2Y was conceived by a consortium of experienced professionals
              united by a common goal to establish a company transcending
              traditional IT offerings. Our team, encompassing backgrounds in
              software development and cybersecurity, amalgamates a spectrum of
              proficiency and a unified dedication to unparalleled quality.
            </p>
          </div>
        </div>
        <div className="storySection reverse">
          <div className="storyText">
            <div className="storyText_head_section">
              <h2 className="our_story_head">
                Our<span className="color space">Mission</span>
              </h2>
              <span className="out_story_subheading">
                Empowering Your Digital Journey
              </span>
            </div>
            <p className="our-story_para1">
              Born from a shared passion for cutting-edge technology, B2Y was
              founded by a group of seasoned professionals with a collective
              vision to create a company that goes beyond conventional IT
              services. With backgrounds ranging from software development to
              cybersecurity, our diverse team brings a wealth of expertise and a
              shared commitment to excellence.
            </p>
          </div>
          <div className="story_img1">
            <img src={OurMissionImg} alt="Our_Story" className="storyimg1" />
          </div>
        </div>
      </div>

      {/* What we Offer */}

      <div className="what_we_offer_container">
        <div className="what_we_offer_text">
          <h1 className="what_we_offer_heading">
            What We <span className="color">Offer</span> ?
          </h1>
          <p className="what_we_offer_subheading">
            At B2Y, we stand prepared to deliver exceptional service...
          </p>
        </div>
        <div className="what_we_offer_cards">
          {whatWeOffer.map((item) => (
            <div
              className="what_we_offer_card"
              style={{ backgroundColor: item.bgcolor }}
            >
              <span
                className="what_we_offer_card_heading"
                style={{ color: item.color }}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
