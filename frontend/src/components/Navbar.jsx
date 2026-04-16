import React, { useState } from 'react';
import { navItems, sideMenuItems } from '../data/mock';
import { ChevronDown, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (label) => {
    setExpandedItems((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#2d2d2d]/80 backdrop-blur-md" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <img
              src="https://customer-assets.emergentagent.com/job_b2b-react-preview/artifacts/3hqwqfxw_logoPinkTransperant.c6af2d1c926f2e4ba7f1%20%281%29.png"
              alt="B2Y Infy"
              className="h-12 md:h-14 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white text-sm font-medium hover:text-[#00bcd4] transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00bcd4] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </header>

      {/* Full-screen Side Menu */}
      <div className={`fixed inset-0 z-[55] transition-all duration-500 ${menuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-[#0a0a2e]/95 backdrop-blur-md" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-full md:w-[450px] bg-[#0a0a2e] overflow-y-auto transition-transform duration-500 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#00d4ff] transition-colors"
          >
            <X size={28} />
          </button>

          <div className="pt-24 px-10 pb-10">
            <ul className="space-y-1">
              {sideMenuItems.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleExpand(item.label)}
                        className="flex items-center justify-between w-full text-white text-lg py-3 border-b border-gray-800/30 hover:text-[#00d4ff] transition-colors duration-300"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${expandedItems[item.label] ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${expandedItems[item.label] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <ul className="pl-4 py-2 space-y-1">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <a href={child.href}
                                className="block text-gray-400 text-sm py-2 hover:text-[#00d4ff] transition-colors duration-300"
                                onClick={() => setMenuOpen(false)}>
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <a href={item.href || '#'}
                      className={`block text-lg py-3 border-b border-gray-800/30 transition-colors duration-300 ${
                        item.active ? 'text-[#00d4ff]' : 'text-white hover:text-[#00d4ff]'
                      }`}
                      onClick={() => setMenuOpen(false)}>
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-6 border-t border-gray-800/30">
              <p className="text-gray-600 text-[10px]">
                Copyright &copy; {new Date().getFullYear()} <strong>b2yinfy</strong>. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
