import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Image } from "@/components/ui/image";
import Link from "next/link";

interface HeroProps {
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaHref?: string;
}

export function Hero({
  subtitle,
  backgroundImage,
  ctaText,
  ctaHref = "#",
}: HeroProps) {
  return (
    <div className="relative h-[100svh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Marina d'Albori vista dall'alto"
          fill
          priority
          quality={100}
          sizes="100vw"
          containerClassName="object-cover brightness-110 contrast-105 saturate-105"
        />
        {/* Overlay scuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/40" />
      </div>

      {/* Content */}
      <Container className="relative h-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-full flex-col items-center justify-center text-center">
          {/* Logo bianco */}
          <div className="relative w-[280px] h-[60px] sm:w-[400px] sm:h-[84px] md:w-[500px] md:h-[105px] lg:w-[600px] lg:h-[126px] mb-4 sm:mb-6">
            <Image
              src="/images/logo-white.svg"
              alt="Marina d'Albori"
              fill
              priority
              quality={100}
              sizes="(max-width: 640px) 280px, (max-width: 768px) 400px, (max-width: 1024px) 500px, 600px"
              containerClassName="object-contain"
            />
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-white font-light tracking-wider max-w-[280px] sm:max-w-xl md:max-w-2xl lg:max-w-3xl [text-shadow:_0_2px_15px_rgba(0,0,0,0.5)] leading-relaxed px-4">
            {subtitle}
          </p>
          {ctaText && (
            <Button
              asChild
              size="lg"
              className="mt-8 bg-white hover:bg-white/90 text-black"
            >
              <Link href={ctaHref}>
                {ctaText}
              </Link>
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
}
