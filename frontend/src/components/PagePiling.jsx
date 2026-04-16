import React, { useState, useEffect, useRef, useCallback, createContext, useContext } from 'react';

// Context so children know if they're active
export const SectionContext = createContext({ isActive: false, direction: 'down' });
export const useSectionActive = () => useContext(SectionContext);

const PagePiling = ({ children }) => {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [prevSection, setPrevSection] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('down');
  const totalSections = React.Children.count(children);
  const touchStartY = useRef(0);
  const accumulatedDelta = useRef(0);
  const wheelTimeout = useRef(null);

  const scrollToSection = useCallback(
    (index) => {
      if (index < 0 || index >= totalSections || isAnimating || index === currentSection) return;
      setIsAnimating(true);
      setDirection(index > currentSection ? 'down' : 'up');
      setPrevSection(currentSection);
      setCurrentSection(index);
      accumulatedDelta.current = 0;

      // Allow next scroll after transition
      setTimeout(() => {
        setIsAnimating(false);
      }, 1200);
    },
    [totalSections, isAnimating, currentSection]
  );

  // Smooth wheel with accumulated delta
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      if (isAnimating) return;

      accumulatedDelta.current += e.deltaY;

      if (wheelTimeout.current) clearTimeout(wheelTimeout.current);
      wheelTimeout.current = setTimeout(() => {
        accumulatedDelta.current = 0;
      }, 200);

      if (Math.abs(accumulatedDelta.current) > 80) {
        if (accumulatedDelta.current > 0) {
          scrollToSection(currentSection + 1);
        } else {
          scrollToSection(currentSection - 1);
        }
        accumulatedDelta.current = 0;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [currentSection, scrollToSection, isAnimating]);

  // Touch
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const handleTouchEnd = (e) => {
      if (isAnimating) return;
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) > 60) {
        scrollToSection(delta > 0 ? currentSection + 1 : currentSection - 1);
      }
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, scrollToSection, isAnimating]);

  // Keyboard
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        scrollToSection(currentSection + 1);
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        scrollToSection(currentSection - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, scrollToSection]);

  return (
    <div ref={containerRef} className="pp-container" style={{ touchAction: 'none' }}>
      {React.Children.map(children, (child, index) => {
        const isActive = currentSection === index;
        const isPrev = prevSection === index;
        const isBelow = index > currentSection;
        const isAbove = index < currentSection;

        // Calculate transform for stacked parallax effect
        let transform = 'translateY(0)';
        let zIndex = 1;
        let opacity = 0;

        if (isActive) {
          transform = 'translateY(0)';
          zIndex = 10;
          opacity = 1;
        } else if (isPrev && isAnimating) {
          // Outgoing section shifts slightly with parallax
          transform = direction === 'down'
            ? 'translateY(-30vh) scale(0.95)'
            : 'translateY(30vh) scale(0.95)';
          zIndex = 5;
          opacity = 0.3;
        } else if (isBelow) {
          transform = 'translateY(100vh)';
          zIndex = 1;
          opacity = 0;
        } else if (isAbove) {
          transform = 'translateY(-100vh)';
          zIndex = 1;
          opacity = 0;
        }

        return (
          <SectionContext.Provider value={{ isActive, direction }}>
            <div
              key={index}
              className="pp-section"
              style={{
                transform,
                zIndex,
                opacity: isActive || (isPrev && isAnimating) ? opacity : 0,
                transition: isAnimating
                  ? 'transform 1s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.8s ease'
                  : 'none',
                visibility: isActive || (isPrev && isAnimating) ? 'visible' : 'hidden',
              }}
            >
              {child}
            </div>
          </SectionContext.Provider>
        );
      })}

      {/* Side dot navigation */}
      <div className="pp-dots">
        {Array.from({ length: totalSections }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(i)}
            className={`pp-dot ${i === currentSection ? 'pp-dot-active' : ''}`}
            aria-label={`Section ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PagePiling;
