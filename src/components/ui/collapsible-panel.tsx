import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import SatoriSwitch from "./switch";

/**
 * Props for the SatoriCollapsiblePanel component.
 *
 * Defines the configuration for a collapsible sidebar/settings panel in the Satori UI system.
 * Supports standard expand/collapse via chevron or a toggle switch in the header.
 */
interface ISatoriCollapsiblePanelProps {
  /** The panel header title (displayed prominently in the header row). */
  title: string;

  /** The content (children) to render inside the collapsible panel. */
  children: React.ReactNode;

  /** If true, panel is open (expanded) by default; otherwise, starts collapsed. */
  defaultOpen?: boolean;

  /** Optional icon (React node) to display in the header, before the title. */
  icon?: React.ReactNode;

  /**
   * If true, shows a toggle switch in the header instead of a chevron.
   * When enabled, the panel’s content is controlled by the switch rather than click-to-expand.
   */
  toggleHeader?: boolean;

  /**
   * Callback fired when the toggle switch is used (only if toggleHeader is true).
   * Receives the new checked state.
   */
  onToggle?: (checked: boolean) => void;

  // You may add "controlled" mode for the switch if needed in the future.
}

/**
 * SatoriCollapsiblePanel
 * -----------------------------------------------------------------------------
 * A flexible, accessible collapsible panel for sidebar and settings UIs in the Satori system.
 *
 * Supports both classic expand/collapse (chevron header) and toggle-switch controlled panels.
 * The panel can display an icon, customizable header, and any content as children.
 *
 * ## Props
 * - `icon`         – Optional icon (React node) to display in the header.
 * - `title`        – Panel header text (displayed prominently).
 * - `defaultOpen`  – If true, panel is open by default; otherwise, starts collapsed.
 * - `children`     – Content to render inside the collapsible panel.
 * - `toggleHeader` – If true, shows a switch in the header instead of chevron for open/close.
 * - `onToggle`     – Callback fired when the header toggle switch is changed (toggleHeader only).
 *
 * ## Usage
 * ```tsx
 * <SatoriCollapsiblePanel
 *   title="Advanced Settings"
 *   icon={<GearIcon />}
 *   defaultOpen
 * >
 *   <p>Advanced controls go here…</p>
 * </SatoriCollapsiblePanel>
 * ```
 *
 * @param {ISatoriCollapsiblePanelProps} props – See interface for prop details.
 * @returns {JSX.Element} The collapsible panel UI.
 */
export default function SatoriCollapsiblePanel({
  icon,
  title,
  defaultOpen,
  children,
  toggleHeader = false,
  onToggle,
}: ISatoriCollapsiblePanelProps) {
  // The open state is either toggled by header or by switch
  const [open, setOpen] = useState(!!defaultOpen);

  const handleToggle = () => {
    setOpen((prev) => {
      const next = !prev;
      if (onToggle) onToggle(next);
      return next;
    });
  };

  return (
    <div className="flex flex-col shadow bg-white dark:bg-neutral-900 z-10 w-full">
      <div
        className={`flex items-center justify-between w-full p-3 border-b-2 border-neutral-200 dark:border-neutral-700 select-none transition
          ${toggleHeader ? "cursor-default" : "cursor-pointer"}`}
        onClick={!toggleHeader ? handleToggle : undefined}
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          {icon && <span className="mr-2">{icon}</span>}
          <span className="text-base font-medium">{title}</span>
        </span>
        {toggleHeader ? (
          <SatoriSwitch
            checked={open}
            onChange={handleToggle}
          />
        ) : (
          <span
            className={`ml-2 transform transition-transform ${
              open ? "rotate-90" : "rotate-0"
            }`}
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </span>
        )}
      </div>
      <div
        className={`flex-1 overflow-visible transition-all duration-1500 ease-out z-15 ${
          open ? "h-full p-4" : "max-h-0 px-4"
        }`}
      >
        {open && <div>{children}</div>}
      </div>
    </div>
  );
}