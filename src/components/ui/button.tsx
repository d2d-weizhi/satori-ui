import React from "react";

/**
 * Props for the SatoriButton component.
 *
 * Defines a customizable, theme-aware button for the Satori UI system.
 * Supports variant and size styling, disabled state, and all standard button behavior.
 */
interface ISatoriButtonProps {
  /** The button contents (text, icon, etc.). */
  children: React.ReactNode;

  /**
   * Optional click handler.
   * Receives the click event as its argument.
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * The button type.
   * - "button" (default)
   * - "submit"
   * - "reset"
   */
  type?: "button" | "submit" | "reset";

  /**
   * Visual style variant for the button.
   * - "primary"   (default)
   * - "secondary" (subtle, lower emphasis)
   * - "ghost"     (minimal background/border)
   * - "danger"    (for destructive actions)
   * - "light"     (ultra-light/outline)
   */
  variant?: "primary" | "secondary" | "ghost" | "danger" | "light";

  /**
   * Button size.
   * - "sm" (small)
   * - "md" (medium, default)
   * - "lg" (large)
   */
  size?: "sm" | "md" | "lg";

  /** If true, disables the button and applies disabled styling. */
  disabled?: boolean;

  /** Additional className(s) for custom styling of the button. */
  className?: string;
}

/**
 * SatoriButton
 * -----------------------------------------------------------------------------
 * A flexible, themeable button component for the Satori UI system.
 *
 * Supports variant and size styling, disabled mode, and all standard button types.
 * Designed for consistent, accessible actions across your application.
 *
 * ## Props
 * - `children`    – Button contents (text, icon, etc.).
 * - `onClick`     – Click handler (optional).
 * - `type`        – Button type ("button", "submit", or "reset"; default: "button").
 * - `variant`     – Visual style ("primary", "secondary", "ghost", "danger", or "light"; default: "primary").
 * - `size`        – Button size ("sm", "md", or "lg"; default: "md").
 * - `disabled`    – Disables the button when true.
 * - `className`   – Additional classes for custom styling.
 *
 * ## Usage
 * ```tsx
 * <SatoriButton variant="primary" size="md" onClick={handleClick}>
 *   Save Changes
 * </SatoriButton>
 * ```
 *
 * @param {ISatoriButtonProps} props – See interface for full prop details.
 * @returns {JSX.Element} The styled button element.
 */
export default function SatoriButton({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
}: ISatoriButtonProps) {
  // Theme classes by variant/size
  const base =
    "inline-flex items-center justify-center font-medium rounded-md transition focus:outline-none min-h-8 focus:ring-2 focus:ring-blue-400 shadow-inner";
  const variants = {
    primary: "bg-blue-400 hover:bg-blue-500 text-white shadow",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-700",
    light: `
      bg-gradient-to-b from-[#f8fafc] to-[#e5e7eb] 
      border border-gray-300 
      text-gray-700
      hover:border-blue-400 hover:text-blue-500
      focus:border-blue-400 focus:text-blue-500
      active:bg-blue-50
      transition-colors
    `,
    ghost: "bg-transparent hover:bg-gray-100 text-blue-400 border border-blue-400",
    danger: "bg-red-500 hover:bg-red-600 text-white"
  };
  const sizes = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}