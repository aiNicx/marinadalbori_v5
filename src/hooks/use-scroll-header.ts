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
      const transitionStart = heroHeight * 0.8; // Inizia la transizione all'80% dell'hero
      const transitionEnd = heroHeight; // Completa al 100%
      
      // Aggiorna lo stato dello scroll
      setScrollY(currentScrollY);
      
      // Determina se abbiamo scrollato oltre la soglia
      setHasScrolled(currentScrollY > threshold);
      
      // Se l'hero è visibile, gestiamo la trasparenza
      if (isHeroVisible) {
        if (currentScrollY <= transitionStart) {
          // Completamente trasparente
          setIsTransparent(true);
        } else if (currentScrollY >= transitionEnd) {
          // Completamente opaco
          setIsTransparent(false);
        } else {
          // Durante la transizione, calcoliamo la percentuale
          const progress = (currentScrollY - transitionStart) / (transitionEnd - transitionStart);
          setIsTransparent(progress < 0.5); // Cambia a metà della transizione
        }
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
