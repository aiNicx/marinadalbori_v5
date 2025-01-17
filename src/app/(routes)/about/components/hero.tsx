import { Container } from "@/components/ui/container";
import { Image } from "@/components/ui/image";

interface HeroProps {
  subtitle: string;
  backgroundImage: string;
}

export function Hero({ subtitle, backgroundImage }: HeroProps) {
  return (
    <div className="relative h-[70vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Marina d'Albori Chi Siamo"
          fill
          priority
          quality={100}
          sizes="100vw"
          variant="default"
          containerClassName="w-full h-full"
          className="object-cover object-center"
        />
        {/* Overlay scuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <Container className="relative h-full">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Chi Siamo
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
            {subtitle}
          </p>
        </div>
      </Container>
    </div>
  );
}
