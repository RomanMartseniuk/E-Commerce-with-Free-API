import { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

type ScreenSize = 'xs' |'sm' | 'md' | 'lg' | 'xl';

type ResponsiveState = {
  screenSize: ScreenSize;
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isLaptopL: boolean;
  isDesktop: boolean;
};

export const useResponsive = (): ResponsiveState => {
  const isMobile = useMediaQuery({ query: '(max-width: 639.98px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 640px) and (max-width: 767.98px)' });
  const isLaptop = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023.98px)' });
  const isLaptopL = useMediaQuery({ query: '(min-width: 1024px) and (max-width: 1279.98px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const screenSize = useMemo<ScreenSize>(() => {
    if (isMobile) return 'xs';
    if (isTablet) return 'sm';
    if (isLaptop) return 'md';
    if(isLaptopL) return 'lg';
    return 'xl';
  }, [isMobile, isTablet, isLaptop, isLaptopL]);

  return {
    screenSize,
    isMobile,
    isTablet,
    isLaptop,
    isLaptopL,
    isDesktop,
  };
};
