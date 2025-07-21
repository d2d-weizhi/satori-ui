import React from "react";
import { Check } from "lucide-react";

/**
 * Props for the SatoriCheckBox component.
 *
 * Defines a styled, accessible checkbox for boolean fields in the Satori UI system.
 */
interface ISatoriCheckBoxProps {
  /** Whether the checkbox is checked (true) or unchecked (false). */
  checked: boolean;

  /**
   * Callback fired when the checkbox is toggled.
   * Receives the new checked state (true/false).
   */
  onChange: (checked: boolean) => void;

  /** Optional label text displayed next to the checkbox. */
  label?: string;

  /** If true, disables user interaction and applies disabled styling. */
  disabled?: boolean;

  /** Additional className(s) for custom styling of the checkbox container. */
  className?: string;
}

/**
 * SatoriCheckBox
 * -----------------------------------------------------------------------------
 * A custom, accessible checkbox component for use in the Satori UI system.
 *
 * Renders a styled checkbox with optional label, supports disabled mode, and
 * fires a callback on user toggle. Fully keyboard and screen reader accessible.
 *
 * ## Props
 * - `checked`     – Current checked state (true/false).
 * - `onChange`    – Callback fired when the checked state changes.
 * - `label`       – Optional label text shown next to the checkbox.
 * - `disabled`    – Disables the checkbox when true.
 * - `className`   – Additional className(s) for custom styling.
 *
 * ## Usage
 * ```tsx
 * <SatoriCheckBox
 *   checked={agree}
 *   onChange={setAgree}
 *   label="I agree to the terms"
 * />
 * ```
 *
 * @param {ISatoriCheckBoxProps} props – See interface for prop details.
 * @returns {JSX.Element} The styled checkbox component.
 */
export default function SatoriCheckBox({
  checked,
  onChange,
  label,
  disabled = false,
  className = "",
}: ISatoriCheckBoxProps) {
  return (
    <label className={`flex items-center gap-2 cursor-pointer select-none ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}>
      <div
        className={`
          relative flex items-center justify-center
          w-5 h-5 rounded-md transition-all duration-150
          border ${checked ? "border-blue-500 bg-blue-500 scale-100" : "border-gray-400 bg-gradient-to-b from-[#f8fafc] to-[#e5e7eb] scale-90"}
          shadow-inner
        `}
        style={{
          boxShadow: "0 1.5px 7px 0 rgba(30, 41, 59, 0.05)",
					transition: "all 0.18s cubic-bezier(.4,0,.2,1)",
        }}
        tabIndex={0}
        role="checkbox"
        aria-checked={checked}
        onClick={() => !disabled && onChange(!checked)}
        onKeyDown={e => {
          if ((e.key === "Enter" || e.key === " ") && !disabled) onChange(!checked);
        }}
      >
        {/* Fill when checked */}
				{checked && <Check size={14} color={"#fefefe"} strokeWidth={4} strokeLinecap="square" />}
    	</div>
			{label && (
				<span className="text-sm text-gray-600">{label}</span>
			)}
		</label>
  );
}