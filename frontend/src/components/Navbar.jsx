import React, { useState } from 'react';
import { navItems } from '../data/mock';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0d1b1e]/95 backdrop-blur-sm">
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl tracking-wide leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              B2B SOFTWARE
            </span>
            <span className="text-[#4ecdc4] text-[10px] tracking-[0.25em] uppercase font-medium">
              Technologies Ltd
            </span>
            <span className="text-gray-400 text-[8px] tracking-[0.15em] uppercase mt-0.5">
              People . Values . Technologies
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item, i) => (
            <React.Fragment key={item.label}>
              <a
                href={item.href}
                className="text-gray-300 hover:text-white text-sm px-4 py-2 transition-colors duration-300 whitespace-nowrap"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {item.label}
              </a>
              {i < navItems.length - 1 && (
                <span className="text-gray-600 text-xs">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Microsoft Partner Badge + Hamburger */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 border border-gray-600 rounded px-3 py-1.5">
            <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
              <div className="bg-[#f25022] w-full h-full"></div>
              <div className="bg-[#7fba00] w-full h-full"></div>
              <div className="bg-[#00a4ef] w-full h-full"></div>
              <div className="bg-[#ffb900] w-full h-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-[10px] font-semibold leading-tight">Microsoft</span>
              <span className="text-gray-400 text-[8px] leading-tight">Solutions Partner</span>
              <span className="text-gray-400 text-[8px] leading-tight">Business Applications</span>
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white hover:text-[#4ecdc4] transition-colors duration-300"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0d1b1e]/98 backdrop-blur-md border-t border-gray-800">
          <div className="flex flex-col py-4 px-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white py-3 border-b border-gray-800/50 text-sm transition-colors duration-300"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
