import { Header } from "@/components/layout/header";
import { Container } from "@/components/ui/container";
import { Metadata } from "next";
import { Hero } from "./components/hero";
import { OurStory } from "./components/our-story";

export const metadata: Metadata = {
  title: "Marina d'Albori - Chi Siamo",
  description: "Scopri la storia e la passione dietro Marina d'Albori, un'oasi di gusto e relax nella Costiera Amalfitana",
};

export default function AboutPage() {
  return (
    <>
      <Header isHeroVisible />
      <main className="relative w-full">
        <Hero
          subtitle="La nostra storia, la nostra passione"
          backgroundImage="/images/restaurant-food.jpg"
        />
        <Container>
          <div className="flex flex-col gap-16 sm:gap-20 md:gap-24 lg:gap-28 py-16 md:py-20">
            <OurStory />
            {/* Altre sezioni verranno aggiunte qui */}
          </div>
        </Container>
      </main>
    </>
  );
}
