import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const containerVariants = cva("mx-auto px-4 w-full", {
  variants: {
    size: {
      default: "max-w-7xl",
      small: "max-w-5xl",
      large: "max-w-[1600px]",
    },
    padding: {
      default: "py-8 md:py-12 lg:py-16",
      small: "py-4 md:py-6 lg:py-8",
      large: "py-12 md:py-16 lg:py-24",
      none: "py-0",
    },
  },
  defaultVariants: {
    size: "default",
    padding: "default",
  },
});

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: React.ElementType;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, padding, as: Component = "div", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(containerVariants({ size, padding, className }))}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";

export { Container, type ContainerProps };
