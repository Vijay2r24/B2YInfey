import React, { useState, useEffect, useCallback } from 'react';
import { products } from '../data/mock';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSectionActive } from './PagePiling';

const ProductCard = ({ product, index }) => (
  <article className="group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full"
    style={{ transitionDelay: `${index * 80}ms` }}>
    <div className="h-full rounded-2xl p-6 md:p-8 flex flex-col transition-all duration-500"
      style={{
        borderTop: `8px solid ${product.borderColor}`,
        backgroundColor: 'rgba(15, 15, 50, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}>
      <h3 className="text-white text-[17px] font-medium mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <a href={product.link} className="hover:text-[#00d4ff] transition-colors duration-300">{product.title}</a>
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {product.description}
      </p>
      <a href={product.link}
        className="text-[#00d4ff] text-[15px] hover:text-white transition-colors duration-300 group-hover:translate-x-1 inline-flex items-center gap-1"
        style={{ fontFamily: 'Poppins, sans-serif' }}>
        Read More
        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>
    </div>
  </article>
);

const ProductsSection = () => {
  const { isActive } = useSectionActive();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i) => emblaApi && emblaApi.scrollTo(i), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={`relative w-full h-full flex items-center py-10 ${isActive ? 'section-active' : ''}`}
      style={{ background: 'linear-gradient(to top, #0a0a2e, #1a1a5e, #0f0c29)' }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 w-full">
        <div className="section-content delay-1 mb-8 flex items-center justify-between">
          <p className="text-gray-300 text-sm tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Products and add-on's
          </p>
          <div className="flex items-center gap-2">
            <button onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all duration-300 hover:scale-110">
              <ChevronLeft size={18} />
            </button>
            <button onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all duration-300 hover:scale-110">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="section-scale-in delay-2 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {products.map((product, i) => (
              <div key={product.id} className="flex-[0_0_100%] md:flex-[0_0_48%] lg:flex-[0_0_31.5%] min-w-0">
                <ProductCard product={product} index={i} />
              </div>
            ))}
          </div>
        </div>

        <div className="section-content delay-3 flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, i) => (
            <button key={i} onClick={() => scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === selectedIndex ? 'bg-[#00d4ff] w-8' : 'bg-gray-600 w-2 hover:bg-gray-400'
              }`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
