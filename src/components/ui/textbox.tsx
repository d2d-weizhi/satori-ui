import React from "react";

/**
 * Props for the SatoriTextBox component.
 *
 * Provides a flexible, styled single-line text input for Satori UI forms.
 * Supports standard text input props as well as optional label and custom classes.
 */
interface ISatoriTextBoxProps {
  /** Optional label to display above the text field. */
  label?: string;

  /** The input value (controlled component pattern). */
  value: string;

  /**
   * Callback fired when the input value changes.
   * Receives the new value as its argument.
   */
  onChange: (val: string) => void;

  /** Optional placeholder text shown when the input is empty. */
  placeholder?: string;

  /** If true, disables user input and applies disabled styling. */
  disabled?: boolean;

  /** Additional className(s) for custom styling of the field container. */
  className?: string;

  /** Input field name (for form integration or accessibility). */
  name?: string;

  /** Input type (e.g., "text", "email", "number"); defaults to "text". */
  type?: string;

  /** If true, the field will automatically receive focus on mount. */
  autoFocus?: boolean;

  /** If true, the input is read-only (cannot be edited by the user). */
  readOnly?: boolean;
}

/**
 * SatoriTextBox
 * -----------------------------------------------------------------------------
 * A customizable, accessible single-line text input for use in the Satori UI system.
 *
 * Supports standard text field props (value, placeholder, disabled, etc.), optional label,
 * and custom styling via className.
 *
 * ## Props
 * - `label`       – Optional label displayed above the text box.
 * - `value`       – The current input value (controlled component).
 * - `onChange`    – Callback when the value changes.
 * - `placeholder` – Placeholder text when the field is empty.
 * - `disabled`    – Disables user input when true.
 * - `className`   – Additional classes for the field container.
 * - `name`        – Input field name (for forms/accessibility).
 * - `type`        – Input type, defaults to "text".
 * - `autoFocus`   – If true, input is auto-focused on mount.
 * - `readOnly`    – If true, makes the input read-only.
 *
 * ## Usage
 * ```tsx
 * <SatoriTextBox
 *   label="Email"
 *   value={email}
 *   onChange={setEmail}
 *   placeholder="Enter your email"
 *   type="email"
 * />
 * ```
 *
 * @param {ISatoriTextBoxProps} props – See interface for details.
 * @returns {JSX.Element} The styled input field.
 */
export default function SatoriTextBox({
  label,
  value,
  onChange,
  placeholder,
  disabled = false,
  className = "",
  name,
  type = "text",
  autoFocus = false,
  readOnly = false,
}: ISatoriTextBoxProps) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && (
        <label className="mb-1 text-sm text-gray-600 font-medium">{label}</label>
      )}
      <input
        type={type}
        name={name}
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
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        `}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        readOnly={readOnly}
        spellCheck={true}
        autoComplete="off"
      />
    </div>
  );
}