import React, { useState, useEffect, useCallback } from 'react';
import { heroData, heroSlides } from '../data/mock';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const HeroSection = () => {
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

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0d1b1e]">
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

      {/* Embla Carousel (OwlCarousel-style) */}
      <div className="relative z-10 min-h-screen flex items-center" ref={emblaRef}>
        <div className="flex min-h-screen">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 min-h-screen flex items-center"
            >
              <div className="max-w-[1200px] mx-auto px-6 lg:px-20 w-full">
                <div className="max-w-3xl">
                  <h1
                    className={`text-white text-4xl md:text-5xl lg:text-[3.5rem] font-light mb-6 leading-tight transition-all duration-700 ${
                      selectedIndex === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ fontFamily: "'Myriad Pro', Arial, sans-serif" }}
                  >
                    {slide.heading}
                  </h1>

                  <h3
                    className={`text-gray-300 text-[15px] mb-2 leading-relaxed transition-all duration-700 delay-100 ${
                      selectedIndex === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {slide.subtitle}
                  </h3>

                  <h3
                    className={`text-gray-300 text-[15px] mb-10 transition-all duration-700 delay-200 ${
                      selectedIndex === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {slide.description}
                  </h3>

                  <div
                    className={`transition-all duration-700 delay-300 ${
                      selectedIndex === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
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
            </div>
          ))}
        </div>
      </div>

      {/* Owl-style Dots - right side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-20">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 border ${
              i === selectedIndex
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
