import React from "react";
import "./Digital.css";

const Digital = () => {
  return (
    <div className="digital_container">
      <div className="digital_heading">
        <h1 className="digital_head">
          Digital <span className="color">Solutions</span>
        </h1>
        <p className="digital_para">
          {" "}
          Empowering businesses digitally. From web design to e-commerce, our
          innovative solutions are customized to your needs, guaranteeing a
          unique online presence and fostering growth in the digital age."
        </p>
      </div>
      <div className="digital_card_container">
        {/* services card */}
        <div className="digital_card">
          <div className="digital_card_top">
            <h2 className="digital_card_top_head">Services</h2>
          </div>
          <div className="digital_card_mid">
            <ul className="digital_card_points">
              <li className="digital_card_points">
                Tailored solutions across diverse industries
              </li>
              <li className="digital_card_points">
                Flexible delivery models for client convenience
              </li>
              <li className="digital_card_points">
                Proven success with dedicated client-focused teams
              </li>
              <li className="digital_card_points">
                Emphasis on quality, scalability, and ongoing support
              </li>
            </ul>
          </div>
          <div className="digital_card_bottom"></div>
        </div>
        {/* consulting card */}
        <div className="digital_card">
          <div className="digital_card_top bg_color bg_color">
            <h2 className="digital_card_top_head">Consulting</h2>
          </div>
          <div className="digital_card_mid">
            <ul className="digital_card_points">
              <li className="digital_card_points">
                Strategic advice based on thorough analysis.
              </li>
              <li className="digital_card_points">
                Implementation support for effective execution.
              </li>
              <li className="digital_card_points">
                Industry-specific expertise and recommendations.
              </li>
              <li className="digital_card_points">
                Continuous monitoring and evaluation of outcomes.
              </li>
            </ul>
          </div>
          <div className="digital_card_bottom bg_color"></div>
        </div>
        {/* product card */}
        <div className="digital_card">
          <div className="digital_card_top bg_color_1">
            <h2 className="digital_card_top_head">Product</h2>
          </div>
          <div className="digital_card_mid">
            <ul className="digital_card_points">
              <li className="digital_card_points">
                Innovative product development to meet market demands.
              </li>
              <li className="digital_card_points">
                Product design focused on usability and functionality.
              </li>
              <li className="digital_card_points">
                Regular updates based on customer feedback.
              </li>
              <li className="digital_card_points">
                Emphasis on quality, scalability, and ongoing support
              </li>
            </ul>
          </div>
          <div className="digital_card_bottom bg_color_1"></div>
        </div>
      </div>
    </div>
  );
};

export default Digital;
