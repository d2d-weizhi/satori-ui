import React from "react";

/**
 * Props for the SatoriSwitch component.
 *
 * Defines a flexible, accessible toggle switch for boolean options in the Satori UI system.
 */
interface ISatoriSwitchProps {
  /** Whether the switch is in the "on" (true) or "off" (false) state. */
  checked: boolean;

  /**
   * Callback fired when the switch is toggled.
   * Receives the new checked state (true for "on", false for "off").
   */
  onChange: (checked: boolean) => void;

  /** Optional label text displayed next to the switch. */
  label?: string;

  /** If true, disables user interaction and applies disabled styling. */
  disabled?: boolean;

  /** Additional className(s) for custom styling of the switch container. */
  className?: string;
}
interface ISatoriSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

/**
 * SatoriSwitch
 * -----------------------------------------------------------------------------
 * A modern, themeable toggle switch for boolean options in the Satori UI system.
 *
 * Renders a fully custom, animated on/off switch, optionally with a label.
 * Accessible by keyboard and screen reader, with clear visual feedback for all states.
 * Supports disabled mode, custom sizing, and easy styling via className.
 *
 * ## Props
 * - `checked`     – Current on/off state (true for "on", false for "off").
 * - `onChange`    – Callback when the switch is toggled.
 * - `label`       – Optional label text shown next to the switch.
 * - `disabled`    – Disables interaction when true.
 * - `className`   – Additional className(s) for outer container.
 *
 * ## Usage
 * ```tsx
 * <SatoriSwitch
 *   checked={enabled}
 *   onChange={setEnabled}
 *   label="Enable feature"
 * />
 * ```
 *
 * @param {ISatoriSwitchProps} props – See interface for details.
 * @returns {JSX.Element} The styled toggle switch.
 */
export default function SatoriSwitch({
  checked,
  onChange,
  label,
  disabled = false,
  className = "",
}: ISatoriSwitchProps) {
  return (
    <label className={
			label
				? `flex justify-between items-center w-full gap-3 cursor-pointer select-none ${className}`
				: `inline-flex items-center w-max cursor-pointer select-none ${className}`
		}>
			{label && (
				<span className="text-sm text-gray-700 font-medium">{label}</span>
			)}
			<span
				tabIndex={0}
				role="switch"
				aria-checked={checked}
				className={`
					relative inline-block
					border border-gray-400 transition-colors duration-300
					${checked ? "bg-blue-400" : "bg-gray-300"}
					${disabled ? "opacity-50 cursor-not-allowed" : "hover:shadow"}
				`}
				style={{
					width: 42,
					height: 24,
					borderRadius: 9999,
					background: checked ? "#60a5fa" : "#d1d5db",
					minWidth: 24, // keeps shape
				}}
				onClick={() => !disabled && onChange(!checked)}
				onKeyDown={e => {
					if (disabled) return;
					if (e.key === "Enter" || e.key === " ") onChange(!checked);
				}}
			>
				<span
					className="absolute transition-all duration-300"
					style={{
						width: 20,
						height: 20,
						borderRadius: 9999,
						background: "#f8fafc",
						border: "1px solid #e5e7eb", // gray-200
						top: 1, // perfectly centered: (24-20)/2 = 2px top/bottom
						left: checked ? 20 : 1, // move to right on checked
						boxShadow: "0 1.5px 4px 0 rgba(30,41,59,0.07)",
						transform: `translateX(${checked ? 0 : 0}px)`, // could animate if desired
					}}
				/>
			</span>
		</label>
  );
}