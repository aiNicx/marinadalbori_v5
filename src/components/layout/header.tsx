"use client";

import { useScrollHeader } from "@/hooks/use-scroll-header";
import { Logo } from "@/components/shared/logo";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "../ui/sheet";

interface HeaderProps {
  isHeroVisible?: boolean;
}

export function Header({ isHeroVisible = true }: HeaderProps) {
  const { isTransparent, hasScrolled } = useScrollHeader({ isHeroVisible });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        hasScrolled && "shadow-md",
        isTransparent
          ? "bg-transparent"
          : "bg-white border-b"
      )}
    >
      <div className="w-full h-16 sm:h-20 lg:h-24 flex items-center justify-between px-4 sm:px-6 lg:px-16">
        {/* Logo */}
        <Logo 
          isTransparent={isTransparent} 
          className="w-[120px] sm:w-[140px] lg:w-[180px]" 
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-end flex-1 ml-8 lg:ml-16">
          <nav className="flex items-center space-x-6 lg:space-x-12">
            <Link
              href="/ristorante"
              className={cn(
                "text-sm lg:text-base font-medium transition-colors hover:opacity-80",
                isTransparent ? "text-white" : "text-foreground"
              )}
            >
              Ristorante
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-sm lg:text-base font-medium transition-colors hover:opacity-80",
                isTransparent ? "text-white" : "text-foreground"
              )}
            >
              Chi siamo
            </Link>
            <Link
              href="/alloggi"
              className={cn(
                "text-sm lg:text-base font-medium transition-colors hover:opacity-80",
                isTransparent ? "text-white" : "text-foreground"
              )}
            >
              Alloggi
            </Link>
            <Link
              href="/blog"
              className={cn(
                "text-sm lg:text-base font-medium transition-colors hover:opacity-80",
                isTransparent ? "text-white" : "text-foreground"
              )}
            >
              Blog
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4 lg:space-x-6 ml-8 lg:ml-16">
            <Button
              asChild
              size="lg"
              className={cn(
                "bg-white/90 hover:bg-white text-black border border-black/10",
                isTransparent && "bg-black/90 hover:bg-black text-white border-white/10"
              )}
            >
              <Link href="/sign-in">
                Sign in
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className={cn(
                "bg-black hover:bg-black/90 text-white",
                isTransparent && "bg-white hover:bg-white/90 text-black"
              )}
            >
              <Link href="/prenota">
                Prenota un tavolo
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  "ml-4 p-2",
                  isTransparent
                    ? "border-white/20 text-white hover:bg-white/20 bg-black/20 backdrop-blur-sm"
                    : "border-black/20 text-black hover:bg-black/10 bg-white/80"
                )}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full px-0"
            >
              <SheetTitle className="px-6 sm:px-8 text-xl sm:text-2xl font-semibold">
                Menu di Navigazione
              </SheetTitle>
              <SheetDescription className="px-6 sm:px-8 text-muted-foreground">
                Accedi alle diverse sezioni del sito
              </SheetDescription>
              <nav className="flex flex-col space-y-6 px-6 sm:px-8 pt-8 sm:pt-12">
                <Link
                  href="/ristorante"
                  className="text-lg sm:text-xl font-medium py-2 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Ristorante
                </Link>
                <Link
                  href="/about"
                  className="text-lg sm:text-xl font-medium py-2 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Chi siamo
                </Link>
                <Link
                  href="/alloggi"
                  className="text-lg sm:text-xl font-medium py-2 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Alloggi
                </Link>
                <Link
                  href="/blog"
                  className="text-lg sm:text-xl font-medium py-2 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <div className="pt-6 sm:pt-8 flex flex-col gap-3 sm:gap-4">
                  <Button 
                    asChild
                    size="lg"
                    className={cn(
                      "bg-white/90 hover:bg-white text-black border border-black/10",
                      isTransparent && "bg-black/90 hover:bg-black text-white border-white/10"
                    )}
                  >
                    <Link href="/sign-in">
                      Sign in
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    size="lg"
                    className={cn(
                      "bg-black hover:bg-black/90 text-white",
                      isTransparent && "bg-white hover:bg-white/90 text-black"
                    )}
                  >
                    <Link href="/prenota">
                      Prenota un tavolo
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
