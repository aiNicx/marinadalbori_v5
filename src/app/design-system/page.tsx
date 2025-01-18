"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading, Text } from "@/components/ui/typography";

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-background py-12">
      <Container>
        {/* Header */}
        <div className="mb-12">
          <Heading className="mb-4">Design System</Heading>
          <Text>A comprehensive guide to Marina d&apos;Albori&apos;s design language and components.</Text>
        </div>

        {/* Colors */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 rounded-lg bg-primary text-white">Primary</div>
            <div className="p-6 rounded-lg bg-secondary">Secondary</div>
            <div className="p-6 rounded-lg bg-background border">Background</div>
            <div className="p-6 rounded-lg bg-foreground text-white">Foreground</div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Typography</h2>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">H1 Heading</h1>
            <h2 className="text-3xl font-bold">H2 Heading</h2>
            <h3 className="text-2xl font-bold">H3 Heading</h3>
            <p className="text-lg">Large Text</p>
            <p>Regular Text</p>
            <p className="text-sm">Small Text</p>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">Basic Card</h3>
              <p>A simple card component with padding and rounded corners.</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">Card with Button</h3>
              <p className="mb-4">A card with a call-to-action button.</p>
              <Button>Action</Button>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2">Interactive Card</h3>
              <p className="mb-4">Hover and focus states demonstration.</p>
              <Button variant="outline">Learn More</Button>
            </Card>
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Spacing</h2>
          <div className="space-y-4">
            <div className="p-4 bg-secondary rounded-lg">Padding 4 (1rem)</div>
            <div className="p-6 bg-secondary rounded-lg">Padding 6 (1.5rem)</div>
            <div className="p-8 bg-secondary rounded-lg">Padding 8 (2rem)</div>
          </div>
        </section>

        {/* Grid Layouts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Grid Layouts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="p-4 bg-secondary rounded-lg text-center">
                Grid Item {item}
              </div>
            ))}
          </div>
        </section>

        {/* Responsive Patterns */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Responsive Patterns</h2>
          <div className="text-sm md:text-base lg:text-lg p-4 bg-secondary rounded-lg">
            This text scales with viewport size
          </div>
        </section>
      </Container>
    </div>
  );
}