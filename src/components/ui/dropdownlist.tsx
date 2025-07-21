import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { configs } from "@/lib/config";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import { STANDARD_FONT_FAMILIES } from "@/types/constants";
import DropDownListPortal from "./dropdownlist-portal";

/**
 * Represents a single Google Font entry returned from the Google Fonts Developer API.
 */
export interface IGoogleFont {
  /** Google API kind identifier, e.g. "webfonts#webfont" */
  kind: string;

  /** The font family name, e.g. "Montserrat" */
  family: string;

  /** Font category: "sans-serif", "serif", "display", "handwriting", or "monospace" */
  category: string;

  /** List of available font variants (e.g., "regular", "italic", "700", "700italic") */
  variants: string[];

  /** Supported Unicode subsets (e.g., "latin", "latin-ext", "cyrillic") */
  subsets: string[];

  /** Font version, e.g., "v17" */
  version: string;

  /** Last modified date as ISO string, e.g., "2020-09-15" */
  lastModified: string;

  /**
   * Object mapping variant names to font file URLs.
   * e.g., { "regular": "https://fonts.gstatic.com/...", "700italic": "..." }
   */
  files: { [variant: string]: string };
}

/**
 * Represents a selectable option in SatoriDropDownList and similar dropdown components.
 */
export interface DropDownListOption {
  /** The underlying value to set when this option is selected (used for serialization or style, e.g., font-family CSS string). */
  value: string;

  /** The display text shown in the dropdown UI for this option. */
  text: string;
}

/**
 * Props for the SatoriDropDownList component.
 */
export interface ISatoriDropDownListProps {

  /**
   * Layout style: "vertical" (default, label above dropdown) or "horizontal" (label and dropdown on one row).
   */
  layout?: "vertical" | "horizontal";

  /** Optional label text to display above the dropdown field. */
  label?: string;

  /** The currently selected option value. */
  value: string;

  /**
   * If true, the dropdown renders a font-family picker UI
   * (shows section headers, font preview, and Google Fonts support).
   * If false, renders a standard dropdown with provided options.
   */
  isFontFamily: boolean;

  /**
   * List of dropdown options to display.
   * Only required for non-font-family dropdowns (ignored if isFontFamily is true).
   */
  options?: DropDownListOption[];

  /**
   * Callback fired when an option is selected.
   * Receives the selected option's value.
   */
  onChange: (val: string) => void;

  /** Optional additional className(s) for custom styling of the outer container. */
  className?: string;
}

/**
 * SatoriDropDownList
 * -----------------------------------------------------------------------------
 * A customizable, theme-aware dropdown (select) component for use throughout the Satori UI system.
 *
 * Supports both standard option lists and a special font-family picker mode.
 * In font-family mode, displays grouped section headers for standard and Google fonts, live font preview,
 * and virtualized rendering for large datasets.
 *
 * ## Props
 * - `label`       – Optional field label displayed above the dropdown.
 * - `value`       – The currently selected value.
 * - `isFontFamily`– If true, renders the dropdown as a font family picker (with Google font integration).
 * - `options`     – Array of selectable options (ignored in font family mode).
 * - `onChange`    – Callback fired when an option is selected.
 * - `className`   – Additional classes for the outer container.
 *
 * ## Features
 * - Keyboard and mouse navigation
 * - Section headers for grouped dropdowns (e.g., font family mode)
 * - Font-family preview in both list and trigger
 * - Support for large datasets with virtualized rendering (`react-window`)
 * - Accessible and themeable (Satori design language)
 *
 * ## Usage
 * ```tsx
 * <SatoriDropDownList
 *   label="Font"
 *   value={selectedFont}
 *   isFontFamily
 *   onChange={setSelectedFont}
 * />
 * ```
 *
 * @param {ISatoriDropDownListProps} props – See interface for details.
 * @returns {JSX.Element} The dropdown field and menu.
 */
export default function SatoriDropDownList({
  layout = "vertical", // <-- default to vertical
  label,
  value,
  isFontFamily = false,
  options,
  onChange,
  className = "",
}: ISatoriDropDownListProps) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [googleFonts, setGoogleFonts] = useState<IGoogleFont[]>([]);
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Find the currently selected option's text
  let selectedText: string | undefined = "";
  let selectedFontFamily: string | undefined = "";

  if (isFontFamily) {
    const foundStd = STANDARD_FONT_FAMILIES.find(f => f.value === value);
    if (foundStd) {
      selectedText = foundStd.text;
      selectedFontFamily = foundStd.value;
    } else {
      const foundGoogle = googleFonts.find(
        f => `'${f.family}', ${f.category}` === value
      );
      if (foundGoogle) {
        selectedText = foundGoogle.family;
        selectedFontFamily = `'${foundGoogle.family}', ${foundGoogle.category}`;
      }
    }
  } else if (options && options.length > 0) {

    const foundOption = options.find(opt => opt.value === value);
    if (foundOption) selectedText = foundOption.text;
  }

  useEffect(() => {
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY; // or import.meta.env.VITE_GOOGLE_API_KEY
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        setGoogleFonts(data.items as IGoogleFont[]);
        //data.items.forEach((item:IGoogleFont) => console.log(item.family))
      });
  }, []);

  // Close on outside click
  useEffect(() => {

    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const OuterElement = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    (props, ref) => (
      <div
        {...props}
        ref={ref}
        // Use 'contents' to prevent extra layout, or leave className blank to inherit parent styling
        className={props.className}
      />
    )
  );
  OuterElement.displayName = "OuterElement";

  const handleOptionClick = (val: string) => {
    console.log("Selected fontFamily:", val);
    if (!isFontFamily)
      selectedText = options!.find(opt => opt.value === val)?.text;  
    onChange(val);
    setOpen(false);
  };

  return (
    <div className={`w-full ${layout === "horizontal" ? "flex items-center gap-2" : "flex flex-col"} ${className}`}>
      {label && 
        <div className={`${
          layout === "horizontal"
            ? "whitespace-nowrap w-[120px]"
            : "min-w-max mb-1"
          }`}
        >
          <span className="text-sm text-gray-600 font-medium">
            {label}
          </span>
        </div>
      }
      <div 
        ref={wrapperRef}
        className={`relative ${layout === "horizontal" ? "flex-1" : ""} flex items-center justify-center w-full h-8 rounded-md border border-gray-300 bg-white z-10`}
        style={{ boxShadow: "0 1.5px 7px 0 rgba(30, 41, 59, 0.05)" }}
      >
        {/* DropDown trigger */}
        <button
          ref={triggerRef}
          type="button"
          className={`
            flex items-center justify-between w-full h-[30px] pl-4 pr-2 text-sm border-0 bg-gradient-to-b from-white to-gray-100
            rounded-md transition focus:outline-none focus:ring-1 focus:ring-blue-400
            ${open ? "ring-1 ring-blue-400" : ""}
          `}
          onClick={() => {
            if (triggerRef.current) {
              setAnchorRect(triggerRef.current.getBoundingClientRect());
            }
            setOpen(v => !v);
          }}
        >
          <span 
            className="truncate"
            style={
              isFontFamily && selectedFontFamily
                ? { fontFamily: selectedFontFamily }
                : undefined
            }
          >
            {selectedText || value || ""}
          </span>
          <ChevronDown size={16} className={`ml-3 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>

        {/* Dropdown List */}
        {open && (
          <DropDownListPortal open={open} anchorRect={anchorRect} width={triggerRef.current?.offsetWidth} onClose={() => setOpen(false)}>
            <div
              className={`
                absolute left-0 top-[110%] w-full mt-1 rounded-md shadow-lg bg-gradient-to-b from-white to-gray-100 border border-gray-200
                transition-transform duration-200 origin-top animate-in
              `}
            >
              <div className="max-h-60 overflow-y-auto">
                {isFontFamily ? (
                  <>
                    {/* Section header for standard fonts */}
                    <div className="px-2 py-1 text-xs text-gray-500 uppercase bg-gray-100">
                      Standard Fonts
                    </div>
                    {STANDARD_FONT_FAMILIES.map((font) => (
                      <div
                        key={font.value}
                        className="px-3 py-2 text-sm cursor-pointer hover:bg-blue-50"
                        style={{ fontFamily: font.value }}
                        onMouseDown={(e) => {
                          e.stopPropagation();
                          handleOptionClick(font.value);
                        }}
                      >
                        {font.text}
                      </div>
                    ))}
                    {/* Section header for Google Fonts */}
                    <div className="px-2 py-1 text-xs text-gray-500 uppercase bg-gray-100 mt-2">
                      Google Fonts
                    </div>
                    <List
                      height={googleFonts.length * 40} // can be any large value, or a fixed height like 9999
                      itemCount={googleFonts.length}
                      itemSize={40}
                      width="100%"
                      outerElementType={OuterElement}
                    >
                      {(props: ListChildComponentProps) => {
                        const { index, style } = props;
                        const font = googleFonts[index];
                        return (
                          <div
                            key={font.family}
                            className="px-3 py-2 cursor-pointer hover:bg-blue-50 text-sm"
                            style={{
                              ...style,
                              fontFamily: `'${font.family}', ${font.category}`,
                            }}
                            onMouseDown={(e) => {
                              e.stopPropagation();
                              handleOptionClick(`'${font.family}', ${font.category}`);
                            }}
                          >
                            {font.family}
                          </div>
                        );
                      }}
                    </List>
                  </>
                ) : (
                  <>
                    {options!.length > 0 ? (
                      options!.map((opt) => (
                        <div
                          key={opt.value}
                          className="px-3 py-2 text-sm cursor-pointer hover:bg-blue-50"
                          onMouseDown={(e) => {
                            e.stopPropagation();
                            handleOptionClick(opt.value);
                          }}
                        >
                          {opt.text}
                        </div>
                      ))
                    ) : (
                      <div className="px-3 py-2 text-xs text-gray-400">No options available.</div>
                    )}
                  </>
                )}
                    
              </div>
            </div>
          </DropDownListPortal>
        )}
      </div>
    </div>
  );
}