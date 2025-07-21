/**
 * Column layout configurations, mimicking Unlayer's.
 * Each widths array should sum to 1.0 for ratios.
 */
export const COLUMN_CONFIGS = [
  { tooltip: "100", widths: [1] },
  { tooltip: "50-50", widths: [0.5, 0.5] },
  { tooltip: "33-33-33", widths: [0.33, 0.34, 0.33] },
  { tooltip: "25-25-25-25", widths: [0.25, 0.25, 0.25, 0.25] },
  { tooltip: "33-67", widths: [0.33, 0.67] },
  { tooltip: "67-33", widths: [0.67, 0.33] },
  { tooltip: "17-33-17-33", widths: [0.17, 0.33, 0.17, 0.33] },
  { tooltip: "33-17-33-17", widths: [0.33, 0.17, 0.33, 0.17] },
];

export const ACTIVE_TYPO_ROLES = [
  { text: "Title", value: "title" },
  { text: "Heading", value: "heading"},
  { text: "Body", value: "p" },
  { text: "Caption", value: "caption" },
  { text: "Quote", value: "quote" },
  { text: "Links", value: "links" },
];

export const FONT_STYLES = [
  { text: "Normal", value: "normal" },
  { text: "Italic", value: "italic" },
  { text: "Bold", value: "bold" },
];

export const STANDARD_FONT_FAMILIES = [
  // Popular UI/Google-like fonts
  { text: "Inter", value: "Inter, sans-serif" },
  { text: "Roboto", value: "Roboto, Arial, sans-serif" },
  { text: "Lato", value: "Lato, Arial, sans-serif" },
  { text: "Montserrat", value: "Montserrat, Arial, sans-serif" },
  { text: "Open Sans", value: "'Open Sans', Arial, sans-serif" },
  // Web-safe sans-serif
  { text: "Arial", value: "Arial, Helvetica, sans-serif" },
  { text: "Helvetica", value: "Helvetica, Arial, sans-serif" },
  { text: "Segoe UI", value: "'Segoe UI', Arial, sans-serif" },
  { text: "Tahoma", value: "Tahoma, Geneva, sans-serif" },
  { text: "Verdana", value: "Verdana, Geneva, sans-serif" },
  { text: "Trebuchet MS", value: "'Trebuchet MS', Helvetica, sans-serif" },
  { text: "Geneva", value: "Geneva, Verdana, sans-serif" },

  // Web-safe serif
  { text: "Times New Roman", value: "'Times New Roman', Times, serif" },
  { text: "Times", value: "Times, 'Times New Roman', serif" },
  { text: "Georgia", value: "Georgia, serif" },
  { text: "Garamond", value: "Garamond, serif" },
  { text: "Palatino", value: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" },

  // Web-safe monospace
  { text: "Courier New", value: "'Courier New', Courier, monospace" },
  { text: "Courier", value: "Courier, 'Courier New', monospace" },
  { text: "Consolas", value: "Consolas, monospace" },
  { text: "Monaco", value: "Monaco, monospace" },
  { text: "Lucida Console", value: "'Lucida Console', Monaco, monospace" },

  // Classic/legacy Microsoft/Apple
  { text: "Impact", value: "Impact, Charcoal, sans-serif" },
  { text: "Comic Sans MS", value: "'Comic Sans MS', cursive, sans-serif" },
  { text: "Arial Black", value: "'Arial Black', Gadget, sans-serif" },
  { text: "Optima", value: "Optima, Segoe, Segoe UI, Candara, Calibri, Arial, sans-serif" },

  // You can add more custom/brand/Google fonts here as you see fit.
];

export const DEFAULT_UNITS = [ "px", "rem", "em", "%" ];

export const NOPERCENT_UNITS = [ "px", "rem", "em" ];

export const BORDER_STYLES = [
  { text: "None", value: "none" },
  { text: "Solid", value: "solid" },
  { text: "Dashed", value: "dashed" },
  { text: "Dotted", value: "dotted" },
  { text: "Double", value: "double" },
  { text: "Groove", value: "groove" },
  { text: "Ridge", value: "ridge" },
  { text: "Inset", value: "inset" },
  { text: "Outset", value: "outset" }
];

export const ALIGN_OPTIONS = [
  { text: "Left", value: "left" },
  { text: "Center", value: "center" },
  { text: "Right", value: "right" }
];

export const ACTION_TYPES = [
  { value: "url", text: "Open URL" },
  { value: "email", text: "Send Email" },
  { value: "phone", text: "Call Phone" },
];

export const TEXT_DECORATIONS = [
  { text: "None", value: "none" },
  { text: "Underline", value: "underline" },
  { text: "Overline", value: "overline" },
  { text: "Line Through", value: "line-through" }
];

export const FONT_WEIGHTS = [
  { text: "Thin", value: "100" },
  { text: "Extra Light", value: "200" },
  { text: "Light", value: "300" },
  { text: "Normal", value: "400" },
  { text: "Medium", value: "500" },
  { text: "Semi Bold", value: "600" },
  { text: "Bold", value: "700" },
  { text: "Extra Bold", value: "800" },
  { text: "Black", value: "900" },
];

export const TEXT_TRANSFORMATIONS = [
  { text: "None", value: "none" },
  { text: "Capitalize", value: "capitalize" },
  { text: "Uppercase", value: "uppercase" },
  { text: "Lowercase", value: "lowercase" },
  { text: "Inherit", value: "inherit" },
  { text: "Initial", value: "initial" },
  { text: "Unset", value: "unset" },
];

export const OBJECT_FIT = [
  { text: "None", value: "none" },
  { text: "Contain", value: "contain" },
  { text: "Cover", value: "cover" },
  { text: "Fill", value: "fill" },
  { text: "Scale Down", value: "scale-down" },
];

export const IMAGE_POSITIONS = [
  { text: "Top", value: "top" },
  { text: "Center",  value: "center" },
  { text: "Bottom",  value: "bottom" }
];