import React from "react";

/**
 * Props for the SatoriMultiLineBox component.
 *
 * Provides a flexible, styled multi-line text area for Satori UI forms.
 * Supports standard textarea props as well as optional label, row count, minHeight,
 * and word wrap options.
 */
interface ISatoriMultiLineBoxProps {
  /** Optional label to display above the textarea field. */
  label?: string;

  /** The textarea value (controlled component pattern). */
  value: string;

  /**
   * Callback fired when the textarea value changes.
   * Receives the new value as its argument.
   */
  onChange: (val: string) => void;

  /** Optional placeholder text shown when the textarea is empty. */
  placeholder?: string;

  /** If true, disables user input and applies disabled styling. */
  disabled?: boolean;

  /** Additional className(s) for custom styling of the textarea container. */
  className?: string;

  /** Name attribute (for form integration or accessibility). */
  name?: string;

  /** Number of visible rows (defaults to browser/textarea default if omitted). */
  rows?: number;

  /** If true, the textarea will automatically receive focus on mount. */
  autoFocus?: boolean;

  /** If true, the textarea is read-only (cannot be edited by the user). */
  readOnly?: boolean;

  /** Minimum height of the textarea (in px, rem, or as a string with CSS units). */
  minHeight?: number | string;

  /** Maximum number of characters allowed. */
  maxLength?: number;

  /** Enables or disables browser spell checking. */
  spellCheck?: boolean;

  /**
   * Word wrapping behavior for the textarea.
   * - "soft": breaks lines at newline characters, but does not insert line breaks in the value.
   * - "hard": inserts line breaks in the value at wrap points.
   * - "off": disables wrapping.
   */
  wrap?: "soft" | "hard" | "off";
}

/**
 * SatoriMultiLineBox
 * -----------------------------------------------------------------------------
 * A customizable, accessible multi-line textarea for use in the Satori UI system.
 *
 * Supports standard textarea props (value, rows, maxLength, etc.), optional label,
 * and custom styling via className. Includes word wrap control and flexible height.
 *
 * ## Props
 * - `label`       – Optional label displayed above the textarea.
 * - `value`       – The current textarea value (controlled component).
 * - `onChange`    – Callback when the value changes.
 * - `placeholder` – Placeholder text when the field is empty.
 * - `disabled`    – Disables user input when true.
 * - `className`   – Additional classes for the field container.
 * - `name`        – Textarea name (for forms/accessibility).
 * - `rows`        – Number of visible rows (default: 4).
 * - `autoFocus`   – If true, textarea is auto-focused on mount.
 * - `readOnly`    – If true, textarea is read-only.
 * - `minHeight`   – Minimum height (px, rem, or CSS string; default: 64).
 * - `maxLength`   – Maximum number of characters.
 * - `spellCheck`  – Enables/disables browser spellchecking (default: true).
 * - `wrap`        – Word wrapping mode ("soft", "hard", or "off").
 *
 * ## Usage
 * ```tsx
 * <SatoriMultiLineBox
 *   label="Description"
 *   value={desc}
 *   onChange={setDesc}
 *   placeholder="Type your notes..."
 *   rows={6}
 *   maxLength={200}
 *   minHeight={80}
 *   wrap="soft"
 * />
 * ```
 *
 * @param {ISatoriMultiLineBoxProps} props – See interface for details.
 * @returns {JSX.Element} The styled textarea field.
 */
export default function SatoriMultiLineBox({
  label,
  value,
  onChange,
  placeholder,
  disabled = false,
  className = "",
  name,
  rows = 4,
  autoFocus = false,
  readOnly = false,
  minHeight = 64,
  maxLength,
  spellCheck = true,
	wrap = "soft",
}: ISatoriMultiLineBoxProps) {
  return (
    <div className={`flex flex-col w-full ${label && "gap-3"} ${className}`}>
      {label && (
        <label className="mb-1 text-sm text-gray-600 font-medium">{label}</label>
      )}
      <textarea
        name={name}
        rows={rows}
        maxLength={maxLength}
        spellCheck={spellCheck}
        className={`
          w-full
          px-3 py-2
          text-sm text-gray-700
          rounded-md
          border border-gray-400
          bg-gray-50
          transition
          focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400
          placeholder-gray-400
          resize-vertical
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        `}
        style={{
          minHeight: typeof minHeight === "number" ? `${minHeight}px` : minHeight,
        }}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        readOnly={readOnly}
        autoComplete="off"
				wrap={wrap}
      />
    </div>
  );
}