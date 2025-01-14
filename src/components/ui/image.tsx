import { cn } from "@/lib/utils";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const imageVariants = cva("", {
  variants: {
    variant: {
      default: "object-cover",
      contain: "object-contain",
    },
    aspectRatio: {
      auto: "aspect-auto",
      square: "aspect-square",
      video: "aspect-video",
      portrait: "aspect-[3/4]",
      wide: "aspect-[16/9]",
    },
    fill: {
      true: "relative h-full w-full",
      false: "",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "default",
    aspectRatio: "auto",
    fill: false,
    rounded: "none",
  },
});

interface ImageProps
  extends Omit<NextImageProps, "fill">,
    VariantProps<typeof imageVariants> {
  containerClassName?: string;
  className?: string;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      variant,
      aspectRatio,
      fill: fillProp,
      rounded,
      className,
      containerClassName,
      ...props
    },
    ref
  ) => {
    const isDataUrl = typeof src === "string" && src.startsWith("data:");
    const isExternal = typeof src === "string" && (src.startsWith("http") || src.startsWith("//"));
    const unoptimized = isDataUrl || isExternal;

    return (
      <div
        className={cn(
          imageVariants({ variant, aspectRatio, fill: fillProp, rounded }),
          containerClassName
        )}
      >
        <NextImage
          ref={ref}
          src={src}
          alt={alt}
          fill={fillProp ?? false}
          unoptimized={unoptimized}
          rel="preload"
          fetchPriority="high"
          className={cn(
            "transition-all duration-300",
            fillProp ? "object-cover" : "",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Image.displayName = "Image";

export { Image, type ImageProps };
