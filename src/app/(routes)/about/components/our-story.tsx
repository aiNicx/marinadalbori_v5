import Image from "next/image";

export const OurStory = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center max-w-[800px] mx-auto text-center">
        <h2 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold mb-4">
          Il Ristorante
        </h2>
        <p className="text-gray-600 text-xl md:text-2xl mb-8">
          Tradizione e Sapori del Mediterraneo
        </p>
        <div className="space-y-8">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Marinadalbori non è solo un ristorante, ma un&apos;esperienza che abbraccia l&apos;anima della Costiera Amalfitana. Con la sua incredibile posizione in riva al mare, il ristorante offre un panorama mozzafiato e tramonti indimenticabili.
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Ogni piatto che serviamo al ristorante di Marina d&apos;Albori è un&apos;espressione della passione per la cucina mediterranea. Con il pescato del giorno, le verdure fresche di stagione e una selezione di vini pregiati, il nostro menù celebra la semplicità e la ricchezza della tradizione locale.
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Vieni a trovarci e lasciati conquistare dall&apos;atmosfera accogliente e dal panorama unico, per un&apos;esperienza culinaria che rispecchia il legame profondo con la nostra terra.
          </p>
        </div>
        <button className="mt-12 bg-black text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-black/90 transition-colors">
          Prenota un Tavolo
        </button>
      </div>
      <div className="mt-16 relative h-[600px] w-full overflow-hidden">
        <Image
          src="/images/restaurant-food.jpg"
          alt="Il nostro ristorante"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
    </section>
  );
};
