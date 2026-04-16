import React from 'react';
import { investorData } from '../data/mock';
import { ArrowRight, FileText, TrendingUp } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const InvestorSection = () => {
  const [imageRef, imageVisible] = useScrollReveal({ threshold: 0.2 });
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="investors" className="relative bg-[#0a1517] py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div
            ref={imageRef}
            className={`relative group reveal-slide-top ${imageVisible ? 'revealed' : ''}`}
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={investorData.graphImage}
                alt="Annual Report"
                className="w-full h-[300px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1517] via-transparent to-transparent rounded-lg"></div>
            </div>
            <div className="absolute bottom-4 left-4">
              <span
                className="text-white text-sm bg-[#0d1b1e]/80 backdrop-blur-sm px-4 py-2 rounded"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {investorData.reportTitle}
              </span>
            </div>
          </div>

          {/* Right - Content */}
          <div
            ref={contentRef}
            className={`reveal-slide-top reveal-delay-2 ${contentVisible ? 'revealed' : ''}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-[#4ecdc4]" />
              <h3
                className="text-[#4ecdc4] text-sm tracking-[0.2em] uppercase"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {investorData.sectionTitle}
              </h3>
            </div>

            <h2
              className="text-white text-2xl md:text-3xl font-semibold mb-8"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Stay Informed with Our Latest Reports
            </h2>

            <div className="space-y-4">
              <a
                href={investorData.reportLink}
                className="flex items-center gap-4 bg-[#111f22] border border-[#1a3535] rounded-lg p-5 hover:border-[#4ecdc4]/40 transition-all duration-300 group"
              >
                <FileText className="w-8 h-8 text-[#4ecdc4]" />
                <div className="flex-1">
                  <span
                    className="text-white text-sm font-medium block"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Results
                  </span>
                  <span
                    className="text-gray-400 text-xs"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Annual Report – 2025
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[#4ecdc4] group-hover:translate-x-1 transition-all duration-300" />
              </a>
            </div>

            <a
              href="#investors"
              className="inline-flex items-center gap-2 text-[#4ecdc4] text-sm font-medium mt-8 hover:text-white transition-colors duration-300"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              View All
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;
