import React from 'react';
import { ArrowRight } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const CareersBanner = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="careers" className="relative overflow-hidden">
      {/* Background */}
      <div className="relative h-[400px] md:h-[450px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b1e] via-[#142e2e] to-[#0d1b1e]"></div>
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1400&h=450&fit=crop&q=60"
          alt="Career opportunities"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b1e]/80 via-transparent to-[#0d1b1e]/80"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            ref={ref}
            className={`text-center px-6 reveal-slide-top ${isVisible ? 'revealed' : ''}`}
          >
            <h2
              className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Join Our Team
            </h2>
            <p
              className="text-gray-300 text-base md:text-lg max-w-xl mx-auto mb-8"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Build your career with B2B Software Technologies. We’re looking for passionate individuals to shape the future of enterprise solutions.
            </p>
            <a
              href="#careers"
              className="inline-flex items-center gap-2 bg-[#4ecdc4] hover:bg-[#3dbdb5] text-[#0d1b1e] text-sm font-semibold px-8 py-3.5 rounded transition-all duration-300 hover:shadow-lg hover:shadow-[#4ecdc4]/20"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Explore Careers
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersBanner;
