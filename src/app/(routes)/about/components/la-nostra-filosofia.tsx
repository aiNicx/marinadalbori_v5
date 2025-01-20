import Image from "next/image";

export const LaNostraFilosofia = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-16 lg:gap-20">
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-zinc-800">L&apos;Esperienza Marina d&apos;Albori</h2>
              <p className="text-base md:text-lg text-zinc-600 max-w-[65ch] mx-auto leading-relaxed">
                Benvenuti a Marina d&apos;Albori, dove tradizione e modernità si fondono in un&apos;atmosfera unica sulla Costa Amalfitana. La nostra filosofia si fonda sulla creazione di esperienze autentiche che celebrano la bellezza naturale e il ricco patrimonio culturale del nostro territorio.
              </p>
              <p className="text-base md:text-lg text-zinc-600 max-w-[65ch] mx-auto leading-relaxed">
                Ci impegniamo a offrire un servizio d&apos;eccellenza che combina comfort moderno con il fascino locale. Ogni dettaglio è curato con attenzione, dalla qualità dei nostri servizi all&apos;atmosfera accogliente, per garantire ai nostri ospiti un&apos;esperienza unica sulla costa.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden rounded-xl group">
            <div className="absolute inset-0 bg-black/30 z-10" />
            <Image
              src="/images/experience/marina-experience.jpg"
              alt="L'Esperienza Marina d'Albori"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
            />
            
            <div className="absolute inset-0 z-20 flex flex-col justify-center p-6 md:p-12 lg:p-16 text-white">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6">
                Un'Esperienza Indimenticabile
              </h3>
              <p className="text-base md:text-lg max-w-[600px] leading-relaxed">
                Ogni momento trascorso da noi è pensato per creare ricordi unici, combinando comfort moderno e tradizione locale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};