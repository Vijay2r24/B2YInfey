import React, { useState, useEffect, useCallback } from 'react';
import { clientLogos, testimonials } from '../data/mock';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import Autoplay from 'embla-carousel-autoplay';
import useScrollReveal from '../hooks/useScrollReveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ClientsSection = () => {
  const [titleRef, titleVisible] = useScrollReveal({ threshold: 0.2 });

  // Logo carousel - auto-scroll infinite
  const [logoRef, logoApi] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [AutoScroll({ speed: 1, stopOnInteraction: false, stopOnFocusIn: false })]
  );

  // Testimonials carousel
  const [testRef, testApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 6000, stopOnInteraction: true })]
  );
  const [testIndex, setTestIndex] = useState(0);

  const testPrev = useCallback(() => testApi && testApi.scrollPrev(), [testApi]);
  const testNext = useCallback(() => testApi && testApi.scrollNext(), [testApi]);

  const onTestSelect = useCallback(() => {
    if (!testApi) return;
    setTestIndex(testApi.selectedScrollSnap());
  }, [testApi]);

  useEffect(() => {
    if (!testApi) return;
    testApi.on('select', onTestSelect);
    onTestSelect();
    return () => testApi.off('select', onTestSelect);
  }, [testApi, onTestSelect]);

  return (
    <section
      id="clients"
      className="relative min-h-screen flex flex-col justify-center py-20 lg:py-28"
      style={{ backgroundColor: '#f5f5f5', fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 w-full">
        <div
          ref={titleRef}
          className={`mb-10 reveal-slide-top ${titleVisible ? 'revealed' : ''}`}
        >
          <h2
            className="text-[#222] text-3xl md:text-4xl font-semibold"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            Clients & Testimonials
          </h2>
        </div>

        {/* OwlCarousel-style Logo Carousel - Row 1 */}
        <div className="overflow-hidden mb-4" ref={logoRef}>
          <div className="flex">
            {[...clientLogos, ...clientLogos].map((client, i) => (
              <div key={i} className="flex-[0_0_25%] md:flex-[0_0_25%] min-w-0 px-2.5">
                <div
                  className="bg-white rounded-[20px] p-4 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ borderTop: '4px solid #45a3c5', minHeight: '100px' }}
                >
                  <img
                    src={client.img}
                    alt={client.name}
                    className="max-w-[140px] max-h-[70px] object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More link */}
        <div className="text-right mb-12">
          <a href="#clients" className="text-[#222] text-sm hover:text-[#45a3c5] transition-colors duration-300">
            ...More
          </a>
        </div>

        {/* OwlCarousel-style Testimonials Carousel */}
        <div className="mt-8">
          <div className="overflow-hidden" ref={testRef}>
            <div className="flex">
              {testimonials.map((item) => (
                <div key={item.id} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="max-w-2xl mx-auto text-center py-8">
                    <svg
                      className="w-10 h-10 text-[#45a3c5]/30 mx-auto mb-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p
                      className="text-[#333] text-lg md:text-xl leading-relaxed italic mb-6"
                      style={{ fontFamily: "'Libre Baskerville', serif" }}
                    >
                      "{item.quote}"
                    </p>
                    <p className="text-[#45a3c5] text-sm font-medium">
                      — {item.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Owl-style Nav + Dots */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={testPrev}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-[#45a3c5] hover:text-[#45a3c5] transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => testApi && testApi.scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === testIndex
                      ? 'bg-[#45a3c5] w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={testNext}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-[#45a3c5] hover:text-[#45a3c5] transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
