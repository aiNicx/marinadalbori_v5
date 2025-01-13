import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const LaNostaCucina = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight mb-6">La Nostra Cucina</h2>
          <p className="text-muted-foreground/60 leading-relaxed">
            La nostra filosofia in cucina è semplice: utilizzare ingredienti freschi e di alta qualità per creare piatti che esaltino i sapori autentici della tradizione mediterranea. Il nostro chef seleziona personalmente i migliori prodotti locali, dando particolare attenzione al pesce fresco del giorno e alle verdure di stagione.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="mt-8 bg-black hover:bg-black/90 text-white"
          >
            <Link href="/menu">
              Scopri il Menu
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={`/images/dishes/dish-${index}.jpg`}
                alt={`Piatto ${index}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
