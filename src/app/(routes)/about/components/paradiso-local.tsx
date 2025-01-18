import Image from "next/image";

export const ParadisoLocal = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-16 lg:gap-20">
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-zinc-800">Il Paradiso dei Local</h2>
              <p className="text-base md:text-lg text-zinc-600 max-w-[65ch] mx-auto leading-relaxed">
                Marina d&apos;Albori è un luogo dove la modernità incontra l&apos;autenticità. Abbiamo creato uno spazio che celebra il carattere unico della nostra location, offrendo ai nostri ospiti un&apos;esperienza contemporanea senza perdere il fascino della tradizione locale.
              </p>
              <p className="text-base md:text-lg text-zinc-600 max-w-[65ch] mx-auto leading-relaxed">
                Il nostro impegno è quello di preservare l&apos;essenza del territorio mentre innoviamo per garantire il massimo comfort e qualità. Ogni dettaglio, dall&apos;arredamento al servizio, è stato pensato per creare un ambiente che rispecchi l&apos;anima della Costiera Amalfitana.
              </p>
              <p className="text-base md:text-lg text-zinc-600 max-w-[65ch] mx-auto leading-relaxed">
                Qui, i nostri ospiti possono godere di servizi moderni e comfort contemporanei, sempre circondati dall&apos;atmosfera autentica e dal calore dell&apos;ospitalità locale che caratterizza la nostra terra.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl group">
              <Image
                src="/images/local/local.jpg"
                alt="Il Paradiso dei Local"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            <div className="space-y-6 lg:space-y-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-zinc-800">Un'Atmosfera Unica</h3>
              <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
                La nostra location combina design moderno con elementi tradizionali, creando uno spazio accogliente che rispecchia l'essenza della Costiera Amalfitana.
              </p>
              <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
                Ogni dettaglio è stato curato per offrire un'esperienza autentica, dal design degli interni alla selezione dei materiali locali.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};