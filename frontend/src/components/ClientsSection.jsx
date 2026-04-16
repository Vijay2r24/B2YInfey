import React from 'react';
import { clientLogos } from '../data/mock';
import useScrollReveal from '../hooks/useScrollReveal';

const ClientsSection = () => {
  const [titleRef, titleVisible] = useScrollReveal({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="clients"
      className="relative min-h-screen flex items-center py-20 lg:py-28"
      style={{
        backgroundColor: '#f5f5f5',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 w-full">
        <div
          ref={titleRef}
          className={`mb-10 reveal-slide-top ${titleVisible ? 'revealed' : ''}`}
        >
          <h2 className="text-[#222] text-3xl md:text-4xl font-semibold" style={{ fontFamily: "'Libre Baskerville', serif" }}>
            Clients & Testimonials
          </h2>
        </div>

        {/* Row 1 - 4 logos */}
        <div
          ref={gridRef}
          className={`reveal-slide-top reveal-delay-2 ${gridVisible ? 'revealed' : ''}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5">
            {clientLogos.slice(0, 4).map((client, i) => (
              <div
                key={i}
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
            ))}
          </div>

          {/* Row 2 - 4 logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5">
            {clientLogos.slice(4, 8).map((client, i) => (
              <div
                key={i}
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
            ))}
          </div>

          {/* Row 3 - 4 logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {clientLogos.slice(8, 12).map((client, i) => (
              <div
                key={i}
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
            ))}
          </div>

          {/* More link */}
          <div className="text-right mt-4">
            <a
              href="#clients"
              className="text-[#222] text-sm hover:text-[#45a3c5] transition-colors duration-300"
            >
              ...More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
