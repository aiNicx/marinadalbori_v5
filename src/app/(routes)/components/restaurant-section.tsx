import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const RestaurantSection = () => {
  return (
    <section className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
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
      <div className="flex flex-col gap-6 text-center lg:text-left">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Il Ristorante</h2>
          <p className="text-lg text-muted-foreground">
            Tradizione e Sapori del Mediterraneo
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Marinadalbori non è solo un ristorante, ma un&apos;esperienza che abbraccia 
            l&apos;anima della Costiera Amalfitana. Con la sua incredibile posizione in riva al 
            mare, il ristorante offre un panorama mozzafiato e tramonti indimenticabili.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Ogni piatto che serviamo al ristorante di Marina d&apos;Albori è un&apos;espressione 
            della passione per la cucina mediterranea. Con il pescato del giorno, le 
            verdure fresche di stagione e una selezione di vini pregiati, il nostro menù 
            celebra la semplicità e la ricchezza della tradizione locale.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Vieni a trovarci e lasciati conquistare dall&apos;atmosfera accogliente e dal 
            panorama unico, per un&apos;esperienza culinaria che rispecchia il legame 
            profondo con la nostra terra.
          </p>
        </div>
        <Button 
          asChild 
          size="lg"
          className="mt-4 w-full lg:w-auto bg-black hover:bg-black/90 text-white"
        >
          <Link href="/prenota">
            Prenota un Tavolo
          </Link>
        </Button>
      </div>
    </section>
  )
}
