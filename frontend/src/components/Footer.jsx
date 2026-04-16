import React from 'react';
import { footerData } from '../data/mock';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const Footer = () => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <footer id="contact" className="bg-[#0d1b1e] border-t border-[#1a3535]">
      <div
        ref={ref}
        className={`max-w-[1400px] mx-auto px-6 lg:px-20 py-16 reveal-slide-top ${isVisible ? 'revealed' : ''}`}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3
              className="text-white text-xl font-semibold mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {footerData.companyName}
            </h3>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-[#4ecdc4] mt-0.5 shrink-0" />
              <div>
                {footerData.address.map((line, i) => (
                  <p
                    key={i}
                    className="text-gray-400 text-sm leading-relaxed"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-white text-lg font-semibold mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href={`mailto:${footerData.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-[#4ecdc4] transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {footerData.email}
                </span>
              </a>
              <a
                href={`tel:${footerData.phone}`}
                className="flex items-center gap-3 text-gray-400 hover:text-[#4ecdc4] transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {footerData.phone}
                </span>
              </a>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 bg-[#4ecdc4] hover:bg-[#3dbdb5] text-[#0d1b1e] text-sm font-semibold px-6 py-3 rounded transition-all duration-300"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Contact us
            </a>
          </div>

          {/* Map */}
          <div>
            <h3
              className="text-white text-lg font-semibold mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Find Us
            </h3>
            <a
              href={footerData.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group overflow-hidden rounded-lg"
            >
              <div className="w-full h-[200px] bg-[#111f22] rounded-lg flex items-center justify-center border border-[#1a3535] group-hover:border-[#4ecdc4]/30 transition-all duration-300">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-[#4ecdc4] mx-auto mb-2" />
                  <span className="text-gray-400 text-xs" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Hyderabad, India
                  </span>
                  <div className="flex items-center gap-1 text-[#4ecdc4] text-xs mt-2 justify-center">
                    <span>View on Maps</span>
                    <ExternalLink size={12} />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1a3535]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-6">
          <p
            className="text-gray-600 text-xs text-center tracking-wider"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
