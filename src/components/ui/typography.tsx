import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const headingVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "font-archivo text-4xl font-bold md:text-5xl lg:text-6xl",
      h2: "font-archivo text-3xl font-bold md:text-4xl lg:text-5xl",
      h3: "font-archivo text-2xl font-bold md:text-3xl lg:text-4xl",
      h4: "font-archivo text-xl font-bold md:text-2xl lg:text-3xl",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

const textVariants = cva("text-foreground", {
  variants: {
    variant: {
      default: "text-base leading-7",
      large: "text-lg leading-7 md:text-xl md:leading-8",
      small: "text-sm leading-6",
      muted: "text-sm text-muted-foreground leading-6",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
    },
  },
  defaultVariants: {
    variant: "default",
    weight: "normal",
  },
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean;
}

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, ...props }, ref) => {
    const Comp = variant === "h1" ? "h1" : variant === "h2" ? "h2" : variant === "h3" ? "h3" : "h4";
    return (
      <Comp
        className={cn(headingVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Heading.displayName = "Heading";

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, weight, ...props }, ref) => {
    return (
      <p
        className={cn(textVariants({ variant, weight, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Text.displayName = "Text";

export { Heading, Text, type HeadingProps, type TextProps };
