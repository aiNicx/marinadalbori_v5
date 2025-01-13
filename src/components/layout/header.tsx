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
          : "bg-background/80 backdrop-blur-sm border-b"
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
              href="/chi-siamo"
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
              variant="ghost"
              size="sm"
              className={cn(
                "rounded-full px-4 lg:px-6 text-sm lg:text-base font-medium hidden sm:inline-flex",
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-foreground hover:bg-foreground/10"
              )}
            >
              Sign in
            </Button>
            <Button
              size="sm"
              className={cn(
                "rounded-full px-4 lg:px-6 text-sm lg:text-base font-medium",
                isTransparent
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-primary text-white hover:bg-primary/90"
              )}
            >
              Prenota un Tavolo
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "h-10 w-10 sm:h-12 sm:w-12",
                  isTransparent
                    ? "text-white hover:text-white/80 hover:bg-white/10"
                    : "text-foreground"
                )}
              >
                <Menu className="h-6 w-6 sm:h-8 sm:w-8" />
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
                  href="/chi-siamo"
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
                    variant="outline" 
                    size="lg" 
                    className="rounded-full text-base sm:text-lg"
                  >
                    Sign in
                  </Button>
                  <Button 
                    size="lg" 
                    className="rounded-full text-base sm:text-lg"
                  >
                    Prenota un Tavolo
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
