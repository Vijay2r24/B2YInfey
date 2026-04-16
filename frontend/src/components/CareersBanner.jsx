import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useSectionActive } from './PagePiling';

const careerSlides = [
  { image: 'https://avccpalmdale.com/B2B/img/career-banner.png', title: '', subtitle: '' },
  { image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop&q=60', title: 'Innovation & Growth', subtitle: 'Work on cutting-edge Dynamics 365 & AI projects' },
  { image: 'https://images.unsplash.com/photo-1581089781785-603411fa81e5?w=800&h=400&fit=crop&q=60', title: 'Global Opportunities', subtitle: 'Projects across India & international markets' },
];

const CareersBanner = () => {
  const { isActive } = useSectionActive();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);
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
    <div className={`relative w-full h-full flex items-center bg-[#0a0a2e] ${isActive ? 'section-active' : ''}`}>
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-[#1a1a5e] to-[#0a0a2e]"></div>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 w-full">
        <div className="lg:w-[70%]">
          <div className="section-scale-in delay-1 overflow-hidden rounded-lg" ref={emblaRef}>
            <div className="flex">
              {careerSlides.map((slide, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0">
                  <div className="relative">
                    <img src={slide.image} alt={slide.title || 'Career at B2B'}
                      className="w-full rounded-lg max-h-[380px] object-cover" loading="lazy" />
                    {slide.title && (
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a2e]/80 via-transparent to-transparent rounded-lg flex flex-col justify-end p-8">
                        <h3 className="text-white text-2xl font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{slide.title}</h3>
                        <p className="text-gray-300 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>{slide.subtitle}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section-content delay-3 flex items-center gap-4 mt-6">
            <a href="#careers" className="inline-block px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #ff4081, #e91e63)', color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
              Explore Careers
            </a>
            <div className="flex gap-2">
              {careerSlides.map((_, i) => (
                <button key={i} onClick={() => emblaApi && emblaApi.scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${i === selectedIndex ? 'bg-[#ff4081] w-8' : 'bg-gray-600 w-2'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersBanner;
