import React from 'react';
import { footerData } from '../data/mock';
import { useSectionActive } from './PagePiling';

const Footer = () => {
  const { isActive } = useSectionActive();

  return (
    <div className={`relative w-full h-full flex items-center bg-[#f5f5f5] ${isActive ? 'section-active' : ''}`}
      style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="section-slide-left delay-1">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                background: 'linear-gradient(135deg, #2a2a7a, #00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
              {footerData.companyName}
            </h2>
            <div className="section-fade-up delay-2 mb-6">
              {footerData.address.map((line, i) => (
                <p key={i} className="text-[#333] text-sm leading-relaxed">{line}</p>
              ))}
            </div>
            <div className="section-fade-up delay-3">
              <a href={`mailto:${footerData.email}`}
                className="text-[#333] text-lg underline hover:text-[#00bcd4] transition-colors duration-300 block mb-2">
                {footerData.email}
              </a>
              <a href={`tel:${footerData.phone}`}
                className="text-[#333] text-lg hover:text-[#00bcd4] transition-colors duration-300 block">
                {footerData.phone}
              </a>
            </div>
          </div>

          <div className="section-slide-right delay-2">
            <div className="rounded-xl overflow-hidden shadow-lg group" style={{ height: '300px' }}>
              <a href={footerData.mapLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <img src={footerData.mapImage} alt="B2B Location"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </a>
            </div>
          </div>
        </div>

        <div className="section-content delay-4 mt-8">
          <a href="#contact"
            className="inline-block px-8 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:scale-105 hover:shadow-[#00bcd4]/30"
            style={{ background: 'linear-gradient(135deg, #00bcd4, #00d4ff)' }}>
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
