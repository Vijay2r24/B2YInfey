import React, { useState, useEffect } from 'react';
import { clients, testimonials } from '../data/mock';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const ClientsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative bg-[#0d1b1e] py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="text-white text-3xl md:text-4xl font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Clients & Testimonials
          </h2>
          <div className="w-16 h-0.5 bg-[#4ecdc4]/40 mx-auto"></div>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {clients.map((client, i) => (
            <div
              key={i}
              className="bg-[#111f22] border border-[#1a3535] rounded-lg p-6 flex items-center justify-center hover:border-[#4ecdc4]/30 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <span
                className="text-gray-400 text-sm font-medium text-center group-hover:text-white transition-colors duration-300"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {client.name}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <div className="text-center">
            <Quote className="w-10 h-10 text-[#4ecdc4]/30 mx-auto mb-6" />
            <div className="min-h-[120px] flex items-center justify-center">
              <div key={currentTestimonial} className="animate-fade-in">
                <p
                  className="text-gray-300 text-lg md:text-xl leading-relaxed italic mb-6"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <p
                  className="text-[#4ecdc4] text-sm font-medium"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  — {testimonials[currentTestimonial].author}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#4ecdc4] hover:text-[#4ecdc4] transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentTestimonial ? 'bg-[#4ecdc4] w-6' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#4ecdc4] hover:text-[#4ecdc4] transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* More link */}
        <div className="text-center mt-10">
          <a
            href="#clients"
            className="text-[#4ecdc4] text-sm hover:text-white transition-colors duration-300"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            ...More
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
