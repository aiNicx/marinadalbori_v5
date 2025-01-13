import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const LaNostaCucina = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto">
      <div className="flex flex-col gap-16 lg:gap-20">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-zinc-800">La Nostra Cucina</h2>
            <p className="text-base md:text-lg text-zinc-600 max-w-[65ch] mx-auto leading-relaxed">
              La nostra filosofia in cucina è semplice: utilizzare ingredienti freschi e di alta qualità per creare piatti che esaltino i sapori autentici della tradizione mediterranea. Il nostro chef seleziona personalmente i migliori prodotti locali, dando particolare attenzione al pesce fresco del giorno e alle verdure di stagione.
            </p>
          </div>
          <Button 
            asChild 
            size="lg"
            className="bg-zinc-900 hover:bg-zinc-800 text-white max-w-xs"
          >
            <Link href="/menu">
              Scopri il Menu
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[1, 2, 3, 4].map((index) => (
            <div 
              key={index} 
              className="relative aspect-square overflow-hidden rounded-xl group"
            >
              <Image
                src={`/images/dishes/dish-${index}.jpg`}
                alt={`Piatto ${index}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
