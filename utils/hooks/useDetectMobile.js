import { useEffect, useState } from 'react';

export const useDetectMobile = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth < 768,
    isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
    isTabletOrGreater: window.innerWidth >= 768,
    isTouch: window.innerWidth < 1024,
    isDesktop: window.innerWidth >= 1024,
    isLargeDesktop: window.innerWidth >= 1280,
    isWidescreen: window.innerWidth >= 1366,
    isHD: window.innerWidth >= 1440,
    isSuperHD: window.innerWidth >= 1680,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 768,
        isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
        isTabletOrGreater: window.innerWidth >= 768,
        isTouch: window.innerWidth < 1024,
        isDesktop: window.innerWidth >= 1024,
        isLargeDesktop: window.innerWidth >= 1280,
        isWidescreen: window.innerWidth >= 1366,
        isHD: window.innerWidth >= 1440,
        isSuperHD: window.innerWidth >= 1680,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
