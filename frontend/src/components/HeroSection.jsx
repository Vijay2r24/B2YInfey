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
    <section className="relative min-h-screen bg-[#0d1b1e] flex items-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b1e] via-[#0d1b1e] to-[#142e2e] opacity-90"></div>
        {/* Subtle animated particles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1a3a3a] rounded-full filter blur-[120px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0f2a2a] rounded-full filter blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Established text - vertical on left */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block">
        <div
          className="text-gray-500 text-xs tracking-[0.4em] uppercase"
          style={{
            writingMode: 'vertical-lr',
            transform: 'rotate(180deg)',
            fontFamily: 'Poppins, sans-serif',
            letterSpacing: '0.4em',
          }}
        >
          {heroData.established}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-20 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <div
            ref={headingRef}
            className={`reveal-slide-top ${headingVisible ? 'revealed' : ''}`}
          >
            <h1
              className="text-white text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {heroData.heading}
            </h1>
          </div>

          <div
            ref={subtitleRef}
            className={`reveal-slide-top reveal-delay-2 ${subtitleVisible ? 'revealed' : ''}`}
          >
            <p
              className="text-gray-400 text-xs md:text-sm tracking-[0.15em] uppercase mb-4 max-w-2xl"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {heroData.subtitle}
            </p>

            <p
              className="text-gray-300 text-sm md:text-base mb-10 max-w-2xl font-light"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {heroData.description}
            </p>
          </div>

          <div
            ref={ctaRef}
            className={`reveal-slide-top reveal-delay-4 ${ctaVisible ? 'revealed' : ''}`}
          >
            <a
              href={heroData.ctaLink}
              className="inline-block bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white text-xs tracking-[0.15em] uppercase px-8 py-4 rounded transition-all duration-300 hover:shadow-lg hover:shadow-[#4ecdc4]/10"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {heroData.ctaText}
            </a>
          </div>
        </div>
      </div>

      {/* Slide Dots - right side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 border ${
              i === activeSlide
                ? 'border-[#4ecdc4] bg-transparent scale-125'
                : 'border-gray-600 bg-gray-600 hover:border-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Copyright bottom */}
      <div className="absolute bottom-6 left-6">
        <p className="text-gray-600 text-xs tracking-wider uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Copyright &copy; 2026 b2bsoftech
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
