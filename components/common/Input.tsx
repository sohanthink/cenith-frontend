import React from "react";
import { LucideIcon } from "lucide-react";

type InputSize = "sm" | "md" | "lg";
type InputVariant = "default" | "error" | "success";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  size?: InputSize;
  variant?: InputVariant;
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      size = "md",
      variant = "default",
      fullWidth = false,
      className = "",
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substring(2, 11)}`;
    const hasError = variant === "error" || !!error;

    const baseStyles =
      "w-full outline-none transition-all duration-200 font-primary disabled:opacity-50 disabled:cursor-not-allowed";

    const sizeStyles = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-3 text-base",
      lg: "px-5 py-4 text-lg",
    };

    const variantStyles = {
      default:
        "border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20",
      error:
        "border border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20",
      success:
        "border border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20",
    };

    const containerBaseStyles =
      "flex items-center gap-3 rounded-xl transition-all duration-200";
    const containerVariantStyles = {
      default: "border border-gray-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20",
      error: "border border-red-500 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500/20",
      success: "border border-green-500 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-500/20",
    };

    const iconSizeStyles = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    };

    const iconColorStyles = {
      default: "text-gray-400",
      error: "text-red-500",
      success: "text-green-500",
    };

    const inputClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`.trim();
    const containerClassName = `${containerBaseStyles} ${containerVariantStyles[variant]} ${fullWidth ? "w-full" : ""} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`.trim();

    return (
      <div className={fullWidth ? "w-full" : ""}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-text mb-2 font-primary"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className={containerClassName}>
          {LeftIcon && (
            <LeftIcon
              className={`${iconSizeStyles[size]} ${iconColorStyles[variant]} flex-shrink-0`}
            />
          )}

          <input
            ref={ref}
            id={inputId}
            className={inputClassName}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              error || helperText
                ? `${inputId}-${error ? "error" : "helper"}`
                : undefined
            }
            {...props}
          />

          {RightIcon && (
            <RightIcon
              className={`${iconSizeStyles[size]} ${iconColorStyles[variant]} flex-shrink-0`}
            />
          )}
        </div>

        {(error || helperText) && (
          <div
            id={`${inputId}-${error ? "error" : "helper"}`}
            className={`mt-2 text-sm font-primary ${
              error ? "text-red-500" : "text-gray-600"
            }`}
          >
            {error || helperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

