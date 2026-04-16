import React, { useState, useEffect, useRef } from 'react';
import { aboutData } from '../data/mock';
import { useSectionActive } from './PagePiling';

const Counter = ({ target, duration = 2000, active }) => {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return (
    <span className="text-7xl md:text-8xl lg:text-[120px] font-bold leading-none" style={{
      background: 'linear-gradient(135deg, #3b6bb5, #00d4ff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontFamily: 'Poppins, sans-serif',
    }}>
      {count}
    </span>
  );
};

const AboutSection = () => {
  const { isActive } = useSectionActive();

  return (
    <div className={`relative w-full h-full flex items-center bg-white overflow-hidden ${isActive ? 'section-active' : ''}`}>
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#00d4ff]/10 opacity-30"></div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="section-slide-left delay-1 flex flex-col items-center lg:items-start">
            <Counter target={aboutData.yearsCount} active={isActive} />
            <div className="flex flex-col items-center lg:items-start mt-2">
              <span className="text-[#333] text-2xl font-light tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {aboutData.yearsLabel}
              </span>
              <span className="text-gray-500 text-lg tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {aboutData.experienceLabel}
              </span>
            </div>
          </div>

          <div className="section-slide-right delay-2">
            <h3 className="section-fade-up delay-2 text-xl md:text-2xl font-bold mb-6 leading-tight" style={{
              fontFamily: 'Poppins, sans-serif',
              background: 'linear-gradient(135deg, #2a2a7a, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {aboutData.heading}
            </h3>
            <p className="section-fade-up delay-3 text-[#555] text-sm leading-relaxed mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {aboutData.description}
            </p>
            <p className="section-fade-up delay-4 text-[#555] text-sm leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {aboutData.description2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
