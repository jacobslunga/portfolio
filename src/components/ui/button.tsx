import React from "react";
import { cn } from "../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center gap-1 justify-center active:scale-95 rounded-full font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white",
        secondary: "bg-primary/10 text-primary hover:bg-primary/20",
        outline:
          "border border-primary/30 text-primary bg-transparent hover:bg-primary/10",
        link: "text-primary hover:underline",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6",
        lg: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
