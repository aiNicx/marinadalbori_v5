import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const RestaurantSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center max-w-[1400px] mx-auto">
        {/* Immagine */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group">
          <Image
            src="/images/restaurant-food.jpg"
            alt="Piatto gourmet al Ristorante Marina d'Albori"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>

        {/* Contenuto */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto lg:max-w-none">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-zinc-800">Il Ristorante</h2>
            <p className="text-lg md:text-xl text-zinc-500">
              Tradizione e Sapori del Mediterraneo
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-[65ch]">
              Marinadalbori non è solo un ristorante, ma un&apos;esperienza che abbraccia 
              l&apos;anima della Costiera Amalfitana. Con la sua incredibile posizione in riva al
              mare, il ristorante offre una vista spettacolare e tramonti da cartolina.
            </p>
            <p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-[65ch]">
              Ogni piatto che serviamo al ristorante di Marina d&apos;Albori è un&apos;espressione 
              della passione per la cucina mediterranea. Con il pescato del giorno, le 
              verdure fresche di stagione e una selezione di vini pregiati, il nostro menù 
              celebra la semplicità e la ricchezza della tradizione locale.
            </p>
            <p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-[65ch]">
              Vieni a trovarci e lasciati conquistare dall&apos;atmosfera accogliente e dal 
              panorama unico, per un&apos;esperienza culinaria che rispecchia il legame 
              profondo con la nostra terra.
            </p>
          </div>
          <Button 
            asChild 
            size="lg"
            className="mt-8 bg-zinc-900 hover:bg-zinc-800 text-white max-w-xs"
          >
            <Link href="/prenota">
              Prenota un Tavolo
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
