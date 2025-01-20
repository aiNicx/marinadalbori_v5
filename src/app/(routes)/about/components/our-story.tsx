import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const OurStory = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center max-w-[1400px] mx-auto">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group">
          <Image
            src="/images/marina-view.jpg"
            alt="Marina d'Albori vista panoramica"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>
        
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto lg:max-w-none">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight text-zinc-800">
              La Nostra Storia
            </h2>
            <p className="text-lg md:text-xl text-zinc-500">
              Un Angolo di Paradiso sulla Costa d'Amalfi
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-[65ch]">
              Dal 1960, Marina d&apos;Albori rappresenta un punto di riferimento sulla Costiera Amalfitana, dove la bellezza naturale si fonde con l&apos;ospitalità autentica. La nostra storia è profondamente radicata in questo angolo di paradiso, dove ogni giorno il mare racconta storie di tradizione e passione.
            </p>
            <p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-[65ch]">
              Nel corso degli anni, ci siamo evoluti mantenendo sempre vivo il legame con le nostre radici. Oggi, Marina d&apos;Albori è un luogo dove passato e futuro si fondono, offrendo ai nostri ospiti un&apos;esperienza unica che combina comfort contemporaneo e autenticità locale.
            </p>
            <p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-[65ch]">
              La nostra missione è preservare e condividere la magia di questo luogo speciale, garantendo ai nostri ospiti ricordi indelebili immersi nella bellezza della Costiera Amalfitana.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-zinc-900 hover:bg-zinc-800 text-white max-w-xs"
          >
            <Link href="/contatti">
              Contattaci
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};