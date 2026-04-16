import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useSectionActive } from './PagePiling';
import { ChevronDown } from 'lucide-react';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=1920&h=1080&fit=crop&q=80',
    welcome: 'Welcome to,',
    title1: 'B2Y INFY',
    title2: 'SOLUTIONS',
    subtitle: 'Transforming Ideas into Innovation',
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=80',
    welcome: 'We Deliver,',
    title1: 'DIGITAL',
    title2: 'EXCELLENCE',
    subtitle: 'ERP, AI & Healthcare Technology Solutions',
  },
  {
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=1080&fit=crop&q=80',
    welcome: 'Empowering,',
    title1: 'BUSINESS',
    title2: 'GROWTH',
    subtitle: '25 Years of Enabling Digital Transformation',
  },
];

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
    <div className={`relative w-full h-full overflow-hidden ${isActive ? 'section-active' : ''}`} id="home">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex h-full">
          {heroSlides.map((slide, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 h-full relative">
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover hero-bg-image"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-[#2d2d2d]/75"></div>

      {/* Content - centered */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div>
          {/* Welcome text */}
          <p
            className={`section-content delay-1 text-white text-xl md:text-2xl font-light italic mb-3 transition-all duration-700 ${
              isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            {heroSlides[selectedIndex].welcome}
          </p>

          {/* Main Title */}
          <h1
            className={`section-content delay-2 text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight transition-all duration-700`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <span
              style={{
                background: 'linear-gradient(135deg, #2a2a7a, #00bcd4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {heroSlides[selectedIndex].title1}
            </span>{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #e91e63, #ff4081)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {heroSlides[selectedIndex].title2}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`section-content delay-3 text-white text-lg md:text-xl font-light mb-10 transition-all duration-700`}
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            {heroSlides[selectedIndex].subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="section-content delay-4 flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="px-8 py-3.5 border-2 border-white text-white text-sm font-medium rounded hover:bg-white hover:text-[#2d2d2d] transition-all duration-300"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Let's Talk
            </a>
            <a
              href="#about"
              className="px-8 py-3.5 bg-[#2a2a7a] text-white text-sm font-medium rounded flex items-center gap-2 hover:bg-[#1a1a5e] transition-all duration-300"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Explore Us
              <ChevronDown size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators - bottom center */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === selectedIndex ? 'bg-white w-8' : 'bg-white/40 w-4'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
