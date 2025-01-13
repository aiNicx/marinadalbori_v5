import { Header } from "@/components/layout/header";
import { Hero } from "./components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marina d'Albori - Home",
  description: "Un'esperienza unica tra mare e sapori in Costiera Amalfitana",
};

export default function HomePage() {
  return (
    <>
      <Header isHeroVisible />
      <main>
        <Hero
          subtitle="Un'esperienza unica tra mare e sapori in Costiera Amalfitana"
          backgroundImage="/images/hero.jpg"
          ctaText="Guarda il menu"
          ctaHref="#menu"
        />
        {/* Altre sezioni della home page verranno aggiunte qui */}
      </main>
    </>
  );
}
