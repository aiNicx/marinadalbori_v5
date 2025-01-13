import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const BeachSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center max-w-[1400px] mx-auto">
        {/* Contenuto */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto lg:max-w-none">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-zinc-800">Le Spiagge</h2>
            <p className="text-lg md:text-xl text-zinc-500">
              Un paradiso tra mare e roccia
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-[65ch]">
              Marina d&apos;Albori è un gioiello incastonato nella Costiera Amalfitana, 
              dove le scogliere si tuffano nel mare cristallino creando un panorama 
              di straordinaria bellezza.
            </p>
            <p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-[65ch]">
              Le nostre spiagge attrezzate offrono comfort e relax, mentre il panorama 
              mozzafiato della costa regala momenti indimenticabili. Ogni angolo racconta 
              una storia millenaria, ogni scorcio è una cartolina da vivere.
            </p>
            <p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-[65ch]">
              Vieni a scoprire la magia delle nostre spiagge, dove il blu del mare si 
              fonde con il fascino delle antiche tradizioni marinare della Costiera.
            </p>
          </div>
          <Button 
            asChild 
            size="lg"
            className="mt-8 bg-zinc-900 hover:bg-zinc-800 text-white max-w-xs"
          >
            <Link href="/spiagge">
              Scopri le Spiagge
            </Link>
          </Button>
        </div>

        {/* Immagini */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden group">
            <Image
              src="/images/beaches/beach-1.jpg"
              alt="Vista panoramica della spiaggia di Marina d'Albori"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden group mt-8 lg:mt-12">
            <Image
              src="/images/beaches/beach-2.jpg"
              alt="Dettaglio della spiaggia di Marina d'Albori"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
