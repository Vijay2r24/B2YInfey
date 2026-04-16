import React, { useState, useEffect, useCallback } from 'react';
import { heroData, heroSlides } from '../data/mock';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useSectionActive } from './PagePiling';

const HeroSection = () => {
  const { isActive } = useSectionActive();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={`relative w-full h-full overflow-hidden bg-white ${isActive ? 'section-active' : ''}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1644088379091-d574269d422f?w=1920&h=1080&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover hero-bg-image"
        />
        <div className="absolute inset-0 bg-white/75"></div>
      </div>

      {/* White animated background */}
      <div className="hero-white-bg">
        {/* Soft gradient orbs */}
        <div className="hero-white-orb hero-white-orb-1"></div>
        <div className="hero-white-orb hero-white-orb-2"></div>
        <div className="hero-white-orb hero-white-orb-3"></div>

        {/* Subtle grid */}
        <div className="hero-white-grid"></div>

        {/* Floating dots */}
        <div className="hero-white-particles">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="hero-white-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${3 + Math.random() * 5}px`,
                height: `${3 + Math.random() * 5}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Flowing curves */}
        <svg className="hero-white-curves" viewBox="0 0 1920 800" preserveAspectRatio="none">
          <path className="hero-white-curve hero-white-curve-1" d="M-100,600 C400,300 800,500 1200,250 S1700,400 2020,300" />
          <path className="hero-white-curve hero-white-curve-2" d="M-100,700 C300,450 700,650 1100,400 S1600,550 2020,450" />
          <path className="hero-white-curve hero-white-curve-3" d="M-100,500 C500,200 900,400 1300,150 S1800,300 2020,200" />
        </svg>

        {/* Decorative shapes */}
        <div className="hero-white-shape hero-white-shape-1"></div>
        <div className="hero-white-shape hero-white-shape-2"></div>
        <div className="hero-white-shape hero-white-shape-3"></div>
      </div>

      {/* Established text */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block z-10">
        <div className="section-content delay-5 text-gray-400 text-xs tracking-[0.3em]"
          style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)', fontFamily: 'Poppins, sans-serif' }}>
          {heroData.established}
        </div>
      </div>

      {/* Embla Carousel */}
      <div className="relative z-10 h-full flex items-center" ref={emblaRef}>
        <div className="flex h-full">
          {heroSlides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 h-full flex items-center">
              <div className="max-w-[1200px] mx-auto px-6 lg:px-20 w-full">
                <div className="max-w-3xl">
                  <h1
                    className={`section-content delay-1 text-4xl md:text-5xl lg:text-[3.5rem] font-light mb-6 leading-tight transition-all duration-700 ${
                      selectedIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{
                      fontFamily: "'Myriad Pro', Arial, sans-serif",
                      background: 'linear-gradient(135deg, #0a0a2e 0%, #2a2a7a 50%, #00bcd4 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {slide.heading}
                  </h1>
                  <h3 className={`section-content delay-2 text-gray-600 text-[15px] mb-2 leading-relaxed transition-all duration-700 delay-100 ${
                    selectedIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {slide.subtitle}
                  </h3>
                  <h3 className={`section-content delay-3 text-gray-500 text-[15px] mb-10 transition-all duration-700 delay-200 ${
                    selectedIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {slide.description}
                  </h3>
                  <div className={`section-content delay-4 transition-all duration-700 delay-300 ${
                    selectedIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    <a href={heroData.ctaLink}
                      className="inline-block text-white text-[12px] tracking-wide px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 hover:shadow-[#00bcd4]/30"
                      style={{
                        background: 'linear-gradient(135deg, #2a2a7a, #00bcd4)',
                        fontFamily: 'Poppins, sans-serif',
                      }}>
                      {heroData.ctaText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright bottom */}
      <div className="absolute bottom-6 left-6 z-10">
        <p className="text-gray-400 text-xs tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Copyright &copy; {new Date().getFullYear()} b2bsoftech
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
