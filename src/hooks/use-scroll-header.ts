import { useEffect, useState } from "react";

interface UseScrollHeaderOptions {
  threshold?: number;
  isHeroVisible?: boolean;
}

interface UseScrollHeaderReturn {
  isTransparent: boolean;
  hasScrolled: boolean;
  scrollY: number;
}

export function useScrollHeader({
  threshold = 50,
  isHeroVisible = true,
}: UseScrollHeaderOptions = {}): UseScrollHeaderReturn {
  const [scrollY, setScrollY] = useState(0);
  const [isTransparent, setIsTransparent] = useState(isHeroVisible);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      const transitionStart = heroHeight * 0.8; // Start transition at 80% of hero height
      const transitionEnd = heroHeight; // Complete transition at 100% of hero height
      
      // Update scroll state
      setScrollY(currentScrollY);
      
      // Determine if we've scrolled past threshold
      setHasScrolled(currentScrollY > threshold);
      
      // Handle transparency when hero is visible
      if (isHeroVisible) {
        if (currentScrollY <= transitionStart) {
          // Fully transparent
          setIsTransparent(true);
        } else if (currentScrollY >= transitionEnd) {
          // Fully opaque
          setIsTransparent(false);
        } else {
          // Calculate transition progress
          const progress = (currentScrollY - transitionStart) / (transitionEnd - transitionStart);
          setIsTransparent(progress < 0.5); // Switch at 50% of transition
        }
      } else {
        setIsTransparent(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Perform initial check
    handleScroll();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, isHeroVisible]);

  return {
    isTransparent,
    hasScrolled,
    scrollY,
  };
}
