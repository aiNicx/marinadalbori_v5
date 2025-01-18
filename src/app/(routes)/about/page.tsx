import { Header } from "@/components/layout/header";
import { Container } from "@/components/ui/container";
import { Metadata } from "next";
import { Hero } from "./components/hero";
import { OurStory } from "./components/our-story";
import { LaNostraFilosofia } from "./components/la-nostra-filosofia";
import { ParadisoLocal } from "./components/paradiso-local";
import ContactCTA from "./components/contact-cta";

export const metadata: Metadata = {
  title: "Marina d'Albori - La Nostra Storia e Filosofia | Ristorante in Costiera Amalfitana",
  description: "Scopri l'autentica esperienza gastronomica di Marina d'Albori, dove tradizione locale e innovazione si fondono per creare momenti indimenticabili sulla Costiera Amalfitana",
};

export default function AboutPage() {
  return (
    <>
      <Header isHeroVisible />
      <main className="relative w-full">
        <Hero
          subtitle="Dove tradizione e innovazione si incontrano sulla Costiera Amalfitana"
          backgroundImage="/images/restaurant-food.jpg"
        />
        <Container>
          <div className="flex flex-col gap-16 sm:gap-20 md:gap-24 lg:gap-28 py-16 md:py-20">
            <OurStory />
            <LaNostraFilosofia />
            <ParadisoLocal />
            <ContactCTA />
          </div>
        </Container>
      </main>
    </>
  );
}
