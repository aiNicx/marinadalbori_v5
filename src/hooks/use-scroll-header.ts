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
      
      // Aggiorna lo stato dello scroll
      setScrollY(currentScrollY);
      
      // Determina se abbiamo scrollato oltre la soglia
      setHasScrolled(currentScrollY > threshold);
      
      // Se l'hero è visibile, gestiamo la trasparenza
      if (isHeroVisible) {
        setIsTransparent(currentScrollY <= threshold);
      } else {
        setIsTransparent(false);
      }
    };

    // Aggiungi l'event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Esegui un controllo iniziale
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, isHeroVisible]);

  return {
    isTransparent,
    hasScrolled,
    scrollY,
  };
}
