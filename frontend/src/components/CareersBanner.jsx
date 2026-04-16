import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const CareersBanner = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="careers" className="relative min-h-screen flex items-center bg-[#0d1b1e]">
      <div className="slide-bg absolute inset-0 opacity-10 bg-gradient-to-br from-gray-800 to-gray-900"></div>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 w-full">
        <div className="row">
          <div className="lg:w-[58%]">
            <div
              ref={ref}
              className={`reveal-slide-top ${isVisible ? 'revealed' : ''}`}
            >
              <img
                src="https://avccpalmdale.com/B2B/img/career-banner.png"
                alt="Career opportunities at B2B Software"
                className="w-full rounded-lg"
                loading="lazy"
              />
              <br />
              <a
                href="#careers"
                className="inline-block mt-6 px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #c8a97e, #a08050)',
                  color: '#fff',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Explore Careers
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersBanner;
