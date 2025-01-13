import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const BeachSection = () => {
  return (
    <section className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
      {/* Contenuto */}
      <div className="flex flex-col gap-6 text-center lg:text-left">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Le Spiagge</h2>
          <p className="text-lg text-muted-foreground">
            Un paradiso tra mare e roccia
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Marina d&apos;Albori è un gioiello incastonato nella Costiera Amalfitana, 
            dove le scogliere si tuffano nel mare cristallino creando un panorama 
            di straordinaria bellezza.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Le nostre spiagge attrezzate offrono comfort e relax, mentre il panorama 
            mozzafiato della costa regala momenti indimenticabili. Ogni angolo racconta 
            una storia millenaria, ogni scorcio è una cartolina da vivere.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Vieni a scoprire la magia delle nostre spiagge, dove il blu del mare si 
            fonde con il fascino delle antiche tradizioni marinare della Costiera.
          </p>
        </div>
        <Button 
          asChild 
          size="lg"
          className="mt-4 w-full lg:w-auto bg-black hover:bg-black/90 text-white"
        >
          <Link href="/spiagge">
            Scopri le Spiagge
          </Link>
        </Button>
      </div>

      {/* Immagini */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden group">
          <Image
            src="/images/beaches/beach-1.jpg"
            alt="Vista panoramica della spiaggia di Marina d'Albori"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden group mt-8">
          <Image
            src="/images/beaches/beach-2.jpg"
            alt="Dettaglio della spiaggia di Marina d'Albori"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};
