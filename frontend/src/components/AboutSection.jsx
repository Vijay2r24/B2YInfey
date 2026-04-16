import React, { useState, useEffect, useRef } from 'react';
import { aboutData } from '../data/mock';
import useScrollReveal from '../hooks/useScrollReveal';

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return (
    <span ref={ref} className="text-7xl md:text-8xl lg:text-[120px] font-bold leading-none" style={{
      background: 'linear-gradient(135deg, #4ecdc4, #44a08d)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontFamily: 'Poppins, sans-serif',
    }}>
      {count}
    </span>
  );
};

const AboutSection = () => {
  const [counterRef, counterVisible] = useScrollReveal({ threshold: 0.2 });
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="about" className="relative min-h-screen flex items-center bg-[#f5f5f5] py-20 lg:py-28 overflow-hidden">
      {/* Circle background decoration */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gray-300/30 opacity-20"></div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Counter */}
          <div
            ref={counterRef}
            className={`flex flex-col items-center lg:items-start reveal-slide-top ${counterVisible ? 'revealed' : ''}`}
          >
            <Counter target={aboutData.yearsCount} />
            <div className="flex flex-col items-center lg:items-start mt-2">
              <span className="text-[#333] text-2xl font-light tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {aboutData.yearsLabel}
              </span>
              <span className="text-gray-500 text-lg tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {aboutData.experienceLabel}
              </span>
            </div>
          </div>

          {/* Right - Content */}
          <div
            ref={contentRef}
            className={`reveal-slide-top reveal-delay-2 ${contentVisible ? 'revealed' : ''}`}
          >
            <h3
              className="text-[#4ecdc4] text-xl md:text-2xl font-bold mb-6 leading-tight relative inline-block"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {aboutData.heading}
            </h3>
            <p
              className="text-[#555] text-sm leading-relaxed mb-5"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {aboutData.description}
            </p>
            <p
              className="text-[#555] text-sm leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {aboutData.description2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
