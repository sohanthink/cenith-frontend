import React from "react";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "size"
> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  href?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      href,
      className = "",
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed font-secondary cursor-pointer";

    const variantStyles = {
      primary: "bg-primary text-white hover:bg-opacity-90",
      secondary: "bg-accent text-white hover:bg-opacity-90",
      outline:
        "border-2 border-primary text-primary hover:bg-primary hover:text-white",
      ghost: "text-black hover:bg-himalayan-white hover:text-primary",
      link: "text-primary hover:underline p-0",
    };

    const sizeStyles = {
      sm: "px-4 py-1.5 text-sm",
      md: "px-8 py-2.5 text-base",
      lg: "px-10 py-3.5 text-lg",
    };

    const widthStyles = fullWidth ? "w-full" : "";

    const combinedClassName =
      `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`.trim();

    // If href is provided, render as Link
    if (href) {
      return (
        <Link
          href={href}
          className={combinedClassName}
          onClick={
            props.onClick as
              | React.MouseEventHandler<HTMLAnchorElement>
              | undefined
          }
        >
          {LeftIcon && <LeftIcon className="w-4 h-4 mr-2" />}
          {children}
          {RightIcon && <RightIcon className="w-4 h-4 ml-2" />}
        </Link>
      );
    }

    // Default button render
    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled}
        {...props}
      >
        {LeftIcon && <LeftIcon className="w-4 h-4 mr-2" />}
        {children}
        {RightIcon && <RightIcon className="w-4 h-4 ml-2" />}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
