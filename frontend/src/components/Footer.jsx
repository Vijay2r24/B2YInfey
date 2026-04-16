import React from 'react';
import { footerData } from '../data/mock';
import useScrollReveal from '../hooks/useScrollReveal';

const Footer = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="contact" className="relative min-h-screen flex items-center bg-[#f5f5f5]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 w-full">
        <div
          ref={ref}
          className={`reveal-slide-top ${isVisible ? 'revealed' : ''}`}
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left - Company Info */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-semibold mb-6"
                style={{
                  color: '#4ecdc4',
                  fontFamily: "'Libre Baskerville', serif",
                }}
              >
                {footerData.companyName}
              </h2>
              <div className="mb-6">
                {footerData.address.map((line, i) => (
                  <p key={i} className="text-[#333] text-sm leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
              <div className="mb-4">
                <a
                  href={`mailto:${footerData.email}`}
                  className="text-[#333] text-lg underline hover:text-[#4ecdc4] transition-colors duration-300 block mb-2"
                >
                  {footerData.email}
                </a>
                <a
                  href={`tel:${footerData.phone}`}
                  className="text-[#333] text-lg hover:text-[#4ecdc4] transition-colors duration-300 block"
                >
                  {footerData.phone}
                </a>
              </div>
            </div>

            {/* Right - Map */}
            <div>
              <div className="rounded-xl overflow-hidden shadow-lg" style={{ height: '350px' }}>
                <a
                  href={footerData.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <img
                    src={footerData.mapImage}
                    alt="B2B Software Technologies Location"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 hover:shadow-lg"
              style={{
                background: '#4ecdc4',
              }}
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
