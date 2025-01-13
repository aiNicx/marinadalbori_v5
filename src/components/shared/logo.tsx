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
    <Link href="/" className={cn("block w-[180px] h-[38px] relative", className)}>
      <Image
        src={isTransparent ? "/images/logo-white.svg" : "/images/logo-black.svg"}
        alt="Marina d'Albori"
        fill
        className="object-contain"
        priority
      />
    </Link>
  );
}
