import React from 'react';
import { investorData } from '../data/mock';

const InvestorSection = () => {
  return (
    <div className="relative w-full h-full flex items-center bg-[#f5f5f5]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 w-full">
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-7 relative overflow-hidden">
              <img src={investorData.graphImage} alt="Annual Report" className="w-full h-[250px] lg:h-full object-cover" loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <span className="text-white text-lg font-medium">{investorData.reportTitle}</span>
              </div>
            </div>
            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-6" style={{ background: 'linear-gradient(135deg, #4ecdc4, #44a08d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {investorData.sectionTitle}
              </h4>
              <div className="space-y-3 mb-6">
                <div className="border-b border-gray-200 pb-3">
                  <small className="text-gray-500 text-xs block mb-1">Results</small>
                  <a href={investorData.reportLink} className="text-[#333] text-sm font-medium hover:text-[#4ecdc4] transition-colors duration-300">
                    Annual Report – 2025
                  </a>
                </div>
              </div>
              <a href="#investors" className="text-[#4ecdc4] text-sm font-medium hover:text-[#333] transition-colors duration-300">View All →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorSection;
