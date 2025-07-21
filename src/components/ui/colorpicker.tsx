import React, { useRef, useState } from "react";
import { HexAlphaColorPicker } from "react-colorful";
import DropDownListPortal from "./dropdownlist-portal";

/**
 * Props for the SatoriColorPicker component.
 *
 * Defines a flexible, styled color picker input for the Satori UI system.
 * Supports both manual hex entry and a dropdown color panel for interactive selection.
 */
interface ISatoriColorPickerProps {
  /** Optional label to display next to or above the color field. */
  label?: string;

  /**
   * The current color value (controlled component).
   * Should be a valid CSS hex color string (e.g., "#ffcc00", "#11223380").
   */
  value: string;

  /**
   * Callback fired when the color changes.
   * Receives the new color as a hex string (with optional alpha, e.g. "#aabbcc88").
   */
  onChange: (color: string) => void;

  /** If true, disables user interaction and applies disabled styling. */
  disabled?: boolean;

  /** Additional className(s) for custom styling of the color picker container. */
  className?: string;
}

/**
 * SatoriColorPicker
 * -----------------------------------------------------------------------------
 * A custom, theme-aware color picker component for the Satori UI system.
 *
 * Combines a hex value input with a dropdown panel for interactive color selection.
 * Supports both manual color entry and a visual picker (with optional alpha/opacity).
 * Provides a preview swatch and disables input when `disabled` is true.
 *
 * ## Props
 * - `label`      – Optional label displayed alongside the picker.
 * - `value`      – Current color value (hex string, e.g., "#ffcc00" or "#aabbcc88").
 * - `onChange`   – Callback fired when the user selects or enters a new color.
 * - `disabled`   – Disables user interaction when true.
 * - `className`  – Additional className(s) for the outer container.
 *
 * ## Usage
 * ```tsx
 * <SatoriColorPicker
 *   label="Background Color"
 *   value={color}
 *   onChange={setColor}
 * />
 * ```
 *
 * @param {ISatoriColorPickerProps} props – See interface for details.
 * @returns {JSX.Element} The styled color picker input and dropdown panel.
 */

interface ISatoriColorPickerProps {
  label?: string;
  value: string;
  onChange: (color: string) => void;
  disabled?: boolean;
  className?: string;
}

export default function SatoriColorPicker({
  label,
  value,
  onChange,
  disabled = false,
  className = "",
}: ISatoriColorPickerProps) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Validate and update color as user types
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^#0-9a-fA-F]/g, "");
    setInputValue(val);
    if (/^#[0-9a-fA-F]{3}$/.test(val) || /^#[0-9a-fA-F]{6}$/.test(val) || /^#[0-9a-fA-F]{8}$/.test(val)) {
      onChange(val);
    }
  };

  React.useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <div className={`flex items-center w-full ${className}`}>
      {label && (
        <div className="flex-1 h-full items-center">
          <label className="text-sm text-gray-600 font-medium">{label}</label>
        </div>
      )}
      <div className="relative flex w-max">
        {/* Color Input */}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          disabled={disabled}
          maxLength={9}
          placeholder="#ffffff"
          className={`
            flex-1 px-3 py-2 rounded-l-md border border-gray-400 border-r-0 h-8 w-[100px]
            text-sm text-gray-700 bg-gray-50 transition
            focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400
            placeholder-gray-400
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
        />
        {/* Swatch Trigger */}
        <button
          ref={triggerRef}
          type="button"
          onClick={() => {
            if (triggerRef.current) {
              setAnchorRect(triggerRef.current.getBoundingClientRect());
            }
            setOpen((v) => !v);
          }}
          disabled={disabled}
          aria-expanded={open}
          className={`
            aspect-square h-8 flex items-center justify-center rounded-r-md border border-gray-400
            transition focus:outline-none focus:ring-1 focus:ring-blue-400
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
          style={{
            background: value,
          }}
        >
        </button>

        {/* Color Picker Panel as a Portal */}
        <DropDownListPortal
          open={open}
          anchorRect={anchorRect}
          width={224}
          componentType={"colorpicker"}
          onClose={() => setOpen(false)}
        >
          <div
            className="
              w-56 rounded-xl shadow-xl
              bg-white border border-gray-200 p-2 flex flex-col gap-3
              animate-in
            "
            style={{ background: "#f8fafc" }}
            onClick={(e) => e.stopPropagation()}
          >
            <HexAlphaColorPicker
              color={value}
              onChange={onChange}
              style={{
                width: "100%",
                height: "180px",
                borderRadius: "0.75rem",
                boxShadow: "0 1.5px 7px 0 rgba(30, 41, 59, 0.06)",
              }}
            />
          </div>
        </DropDownListPortal>
      </div>
    </div>
  );
}