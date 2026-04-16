import React, { useState, useEffect, useRef, useCallback } from 'react';

const PagePiling = ({ children }) => {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalSections = React.Children.count(children);
  const touchStartY = useRef(0);
  const lastScrollTime = useRef(0);

  const scrollToSection = useCallback(
    (index) => {
      if (index < 0 || index >= totalSections || isAnimating) return;
      setIsAnimating(true);
      setCurrentSection(index);
      setTimeout(() => setIsAnimating(false), 1000);
    },
    [totalSections, isAnimating]
  );

  // Mouse wheel handler
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastScrollTime.current < 1000) return;
      lastScrollTime.current = now;

      if (e.deltaY > 0) {
        scrollToSection(currentSection + 1);
      } else if (e.deltaY < 0) {
        scrollToSection(currentSection - 1);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [currentSection, scrollToSection]);

  // Touch handlers
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const now = Date.now();
      if (now - lastScrollTime.current < 1000) return;
      lastScrollTime.current = now;

      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) > 50) {
        if (delta > 0) {
          scrollToSection(currentSection + 1);
        } else {
          scrollToSection(currentSection - 1);
        }
      }
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, scrollToSection]);

  // Keyboard handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollToSection(currentSection + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToSection(currentSection - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSection(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSection(totalSections - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, scrollToSection, totalSections]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden"
      style={{ touchAction: 'none' }}
    >
      {/* Sections container */}
      <div
        className="transition-transform duration-[1000ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
        style={{
          transform: `translateY(-${currentSection * 100}vh)`,
          height: `${totalSections * 100}vh`,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className="h-screen w-full relative overflow-hidden"
          >
            <div
              className={`w-full h-full transition-all duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
                currentSection === index
                  ? 'opacity-100 translate-y-0 scale-100'
                  : Math.abs(currentSection - index) === 1
                  ? 'opacity-70 translate-y-0 scale-[0.98]'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: currentSection === index ? '200ms' : '0ms' }}
            >
              {child}
            </div>
          </div>
        ))}
      </div>

      {/* Side dot navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        {Array.from({ length: totalSections }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(i)}
            className={`w-3 h-3 rounded-full transition-all duration-500 border ${
              i === currentSection
                ? 'border-[#c8a97e] bg-transparent scale-125 shadow-[0_0_8px_rgba(200,169,126,0.4)]'
                : 'border-gray-500 bg-gray-500/50 hover:border-gray-300 hover:scale-110'
            }`}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PagePiling;
