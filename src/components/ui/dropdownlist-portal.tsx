import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

/**
 * Props for DropDownListPortal, a floating dropdown menu rendered via React Portal.
 */
interface IDropDownListPortalProps {
  /** Whether the dropdown menu is visible and should be rendered. */
  open: boolean;

  componentType?:string;

  /** The bounding rectangle of the trigger element (from getBoundingClientRect), used for menu positioning. */
  anchorRect: DOMRect | null;

  /** The width (in pixels) of the dropdown menu, usually matching the trigger's width. */
  width: number | undefined;

  /** The menu contents to render inside the portal. */
  children: React.ReactNode;

  /** Callback fired when the menu should close (e.g., on click-away or blur). */
  onClose: () => void;
}

/**
 * Renders a dropdown menu as a floating portal, positioned relative to a trigger element.
 * 
 * This component uses React Portal to ensure the dropdown menu appears above all parent containers,
 * preventing clipping due to overflow or scroll boundaries. The menu is positioned using the bounding
 * rectangle (`anchorRect`) and matches the width of the trigger element. 
 *
 * Commonly used for custom dropdown/select menus in sidebars or panels.
 *
 * @param open        - Whether the menu is visible and should be rendered.
 * @param anchorRect  - Bounding rectangle of the trigger element (from getBoundingClientRect), for positioning.
 * @param width       - Width (in pixels) for the dropdown menu.
 * @param children    - Dropdown menu content to display inside the portal.
 * @param onClose     - Callback fired when the menu should close (e.g., on click-away or blur).
 */
export default function DropDownListPortal({ 
	open, 
	anchorRect, 
	width, 
	children,
  onClose,
  componentType = "dropdown"
}: IDropDownListPortalProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Click-away logic
  useEffect(() => {
    if (!open) return;

    function handleClick(event: MouseEvent) {
      event.stopPropagation();
      // If click is outside the menu, close

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        console.log("Closing Portal");
        onClose && onClose();
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  if (!open || !anchorRect) return null;

  const portalStyle: React.CSSProperties = {
    position: "absolute",
    top: anchorRect ? anchorRect.bottom + window.scrollY + 2 : 2,
    left:
      anchorRect && componentType === "colorpicker"
        ? anchorRect.right - (width ?? 220) + window.scrollX // align right edge
        : anchorRect
        ? anchorRect.left + window.scrollX // default dropdown: align left edge
        : 0,
    width: width ?? 220,
    zIndex: 9999,
    background: "white",
    borderRadius: "0.5rem",
  };

  return createPortal(
    <div
    ref={menuRef}
      style={portalStyle}
      tabIndex={-1}
    >
      {children}
    </div>,
    document.body
  );
}