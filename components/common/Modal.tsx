"use client";
import React, { useEffect } from "react";
import { X } from "lucide-react";

type ModalSize = "sm" | "md" | "lg" | "xl";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: ModalSize;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  className?: string;
  overlayClassName?: string;
  closeButtonPosition?: "top-right" | "top-left" | "outside";
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen,
      onClose,
      title,
      children,
      size = "md",
      showCloseButton = true,
      closeOnOverlayClick = true,
      className = "",
      overlayClassName = "",
      closeButtonPosition = "top-right",
    },
    ref,
  ) => {
    // Handle ESC key press
    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape" && isOpen) {
          onClose();
        }
      };

      if (isOpen) {
        document.addEventListener("keydown", handleEscape);
        // Prevent body scroll when modal is open
        document.body.style.overflow = "hidden";
      }

      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "unset";
      };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const sizeStyles = {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
    };

    const getCloseButtonPosition = () => {
      switch (closeButtonPosition) {
        case "top-left":
          return "absolute top-4 left-4";
        case "outside":
          return "absolute -top-4 left-4";
        case "top-right":
        default:
          return "absolute top-4 right-4";
      }
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (closeOnOverlayClick && e.target === e.currentTarget) {
        onClose();
      }
    };

    return (
      <>
        {/* Background overlay */}
        <div
          className={`fixed inset-0 bg-black/50 z-[100] ${overlayClassName}`}
          onClick={handleOverlayClick}
          aria-hidden="true"
        />

        {/* Modal container */}
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 pointer-events-none"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "modal-title" : undefined}
        >
          <div
            ref={ref}
            className={`bg-white rounded-xl shadow-2xl w-full ${sizeStyles[size]} p-6 relative pointer-events-auto animate-in fade-in zoom-in duration-200 ${className}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            {showCloseButton && (
              <button
                onClick={onClose}
                className={`${getCloseButtonPosition()} p-1 bg-white hover:bg-gray-100 rounded-full transition-colors z-10 cursor-pointer`}
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-black" />
              </button>
            )}

            {/* Title */}
            {title && (
              <h3
                id="modal-title"
                className="font-primary text-center mb-4 pr-8"
              >
                {title}
              </h3>
            )}

            {/* Content */}
            <div>{children}</div>
          </div>
        </div>
      </>
    );
  },
);

Modal.displayName = "Modal";

export default Modal;
