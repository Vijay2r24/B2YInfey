import React, { useState, useEffect, useCallback } from 'react';

const AnimsitionOverlay = ({ children }) => {
  const [overlayState, setOverlayState] = useState('loading'); // 'loading' | 'sliding-in' | 'idle' | 'sliding-out'
  const [navigateTo, setNavigateTo] = useState(null);

  // Initial page load animation
  useEffect(() => {
    // Small delay to ensure overlay is visible before animation starts
    const loadTimer = setTimeout(() => {
      setOverlayState('sliding-in');
    }, 300);

    return () => clearTimeout(loadTimer);
  }, []);

  // After slide-in animation completes
  useEffect(() => {
    if (overlayState === 'sliding-in') {
      const timer = setTimeout(() => {
        setOverlayState('idle');
      }, 1500); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [overlayState]);

  // Handle slide-out navigation
  useEffect(() => {
    if (overlayState === 'sliding-out' && navigateTo) {
      const timer = setTimeout(() => {
        // Scroll to target section
        const target = document.querySelector(navigateTo);
        if (target) {
          target.scrollIntoView({ behavior: 'instant' });
        }
        // After scrolling, slide back in
        setOverlayState('sliding-in');
        setNavigateTo(null);
      }, 800); // Match out animation duration
      return () => clearTimeout(timer);
    }
  }, [overlayState, navigateTo]);

  // Intercept internal link clicks for animsition effect
  const handleLinkClick = useCallback((e) => {
    const link = e.target.closest('a[href^="#"]');
    if (link && overlayState === 'idle') {
      e.preventDefault();
      const href = link.getAttribute('href');
      setNavigateTo(href);
      setOverlayState('sliding-out');
    }
  }, [overlayState]);

  useEffect(() => {
    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, [handleLinkClick]);

  return (
    <>
      {children}

      {/* Animsition Overlay */}
      <div
        className={`animsition-overlay-slide ${
          overlayState === 'loading'
            ? 'animsition-overlay-visible'
            : overlayState === 'sliding-in'
            ? 'animsition-overlay-slide-in-top'
            : overlayState === 'sliding-out'
            ? 'animsition-overlay-slide-out-top'
            : 'animsition-overlay-hidden'
        }`}
      >
        {/* Loading indicator shown during initial load */}
        {overlayState === 'loading' && (
          <div className="animsition-loading-wrapper">
            <div className="animsition-spinner">
              <div className="animsition-bounce1"></div>
              <div className="animsition-bounce2"></div>
              <div className="animsition-bounce3"></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AnimsitionOverlay;
