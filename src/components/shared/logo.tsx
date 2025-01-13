"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  isTransparent?: boolean;
  className?: string;
}

export function Logo({ isTransparent, className }: LogoProps) {
  return (
    <Link href="/" className={cn("block relative", className)}>
      <div className="relative w-[120px] h-[25px] sm:w-[140px] sm:h-[30px] lg:w-[180px] lg:h-[38px]">
        <Image
          src={isTransparent ? "/images/logo-white.svg" : "/images/logo-black.svg"}
          alt="Marina d'Albori"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 120px, (max-width: 1024px) 140px, 180px"
          priority
        />
      </div>
    </Link>
  );
}
