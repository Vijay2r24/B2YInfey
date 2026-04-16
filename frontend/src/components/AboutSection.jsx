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
    <span ref={ref} className="text-7xl md:text-8xl lg:text-9xl font-bold text-[#4ecdc4]" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {count}
    </span>
  );
};

const AboutSection = () => {
  const [counterRef, counterVisible] = useScrollReveal({ threshold: 0.2 });
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="about" className="relative bg-[#0d1b1e] py-20 lg:py-32 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4ecdc4]/20 to-transparent"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Counter */}
          <div
            ref={counterRef}
            className={`flex flex-col items-center lg:items-start reveal-slide-top ${counterVisible ? 'revealed' : ''}`}
          >
            <Counter target={aboutData.yearsCount} />
            <div className="flex flex-col items-center lg:items-start mt-4">
              <span className="text-white text-2xl font-light tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
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
            <h2
              className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {aboutData.heading}
            </h2>
            <p
              className="text-gray-400 text-sm md:text-base leading-relaxed mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {aboutData.description}
            </p>
            <p
              className="text-gray-400 text-sm md:text-base leading-relaxed"
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
