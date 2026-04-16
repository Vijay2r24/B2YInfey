import React, { useState, useEffect } from 'react';
import { heroData } from '../data/mock';
import useScrollReveal from '../hooks/useScrollReveal';

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 5;
  const [headingRef, headingVisible] = useScrollReveal({ threshold: 0.1 });
  const [subtitleRef, subtitleVisible] = useScrollReveal({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useScrollReveal({ threshold: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d1b1e]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://player.vimeo.com/video/1106428062?title=0&byline=0&portrait=0&autoplay=1&autopause=0&muted=1&background=1"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2"
          style={{
            opacity: 0.9,
            backgroundColor: 'hsla(210, 20%, 10%, 0.7)',
            backdropFilter: 'blur(15px)',
            filter: 'contrast(0.9)',
            border: 'none',
            width: '100vw',
            height: '500%',
          }}
          allow="autoplay; fullscreen"
          allowFullScreen
          title="B2B Background Video"
        />
      </div>

      {/* Established text - vertical on left */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block z-10">
        <div
          className="text-gray-500 text-xs tracking-[0.3em]"
          style={{
            writingMode: 'vertical-lr',
            transform: 'rotate(180deg)',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          {heroData.established}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-20 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <div
            ref={headingRef}
            className={`reveal-slide-top ${headingVisible ? 'revealed' : ''}`}
          >
            <h1
              className="text-white text-4xl md:text-5xl lg:text-[3.5rem] font-light mb-6 leading-tight"
              style={{ fontFamily: "'Myriad Pro', Arial, sans-serif" }}
            >
              {heroData.heading}
            </h1>
          </div>

          <div
            ref={subtitleRef}
            className={`reveal-slide-top reveal-delay-2 ${subtitleVisible ? 'revealed' : ''}`}
          >
            <h3
              className="text-gray-300 text-[15px] mb-2 leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {heroData.subtitle}
            </h3>
            <h3
              className="text-gray-300 text-[15px] mb-10"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {heroData.description}
            </h3>
          </div>

          <div
            ref={ctaRef}
            className={`reveal-slide-top reveal-delay-4 ${ctaVisible ? 'revealed' : ''}`}
          >
            <a
              href={heroData.ctaLink}
              className="inline-block text-white text-[11px] tracking-wide px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
              style={{
                opacity: 0.9,
                backgroundColor: 'hsla(210, 20%, 10%, 0.7)',
                backdropFilter: 'blur(15px)',
                filter: 'contrast(0.9)',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              {heroData.ctaText}
            </a>
          </div>
        </div>
      </div>

      {/* Slide Dots - right side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-10">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 border ${
              i === activeSlide
                ? 'border-[#c8a97e] bg-transparent scale-125'
                : 'border-gray-600 bg-gray-600 hover:border-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Copyright bottom */}
      <div className="absolute bottom-6 left-6 z-10">
        <p className="text-gray-600 text-xs tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Copyright &copy; {new Date().getFullYear()} b2bsoftech
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
