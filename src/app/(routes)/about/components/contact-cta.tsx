"use client";

import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:info@marinadalbori.it";
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Pronti a Vivere un'Esperienza Unica?
          </h2>
          <p className="text-lg text-muted-foreground max-w-[600px]">
            Siamo qui per rendere il tuo soggiorno indimenticabile. Contattaci per informazioni, prenotazioni o qualsiasi domanda tu possa avere.
          </p>
          <Button
            onClick={handleContactClick}
            size="lg"
            className="mt-4"
          >
            Contattaci Ora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;