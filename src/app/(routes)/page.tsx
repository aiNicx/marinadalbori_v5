import { Header } from "@/components/layout/header";
import { Hero } from "./components/hero";
import { RestaurantSection } from "./components/restaurant-section";
import { LaNostaCucina } from "./components/la-nostra-cucina";
import { BeachSection } from "./components/beach-section";
import { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Marina d'Albori - Home",
  description: "Un'esperienza unica tra mare e sapori in Costiera Amalfitana",
};

export default function HomePage() {
  return (
    <>
      <Header isHeroVisible />
      <main className="relative w-full">
        <Hero
          subtitle="Un'esperienza unica tra mare e sapori in Costiera Amalfitana"
          backgroundImage="/images/hero.jpg"
          ctaText="Guarda il menu"
          ctaHref="#menu"
        />
        <Container>
          <div className="flex flex-col gap-32 sm:gap-40 md:gap-48 lg:gap-56 py-24 md:py-32">
            <RestaurantSection />
            <LaNostaCucina />
            <BeachSection />
            {/* Altre sezioni della home page verranno aggiunte qui */}
          </div>
        </Container>
      </main>
    </>
  );
}
