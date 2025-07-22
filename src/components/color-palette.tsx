// components/ColorPalette.tsx

const colorPalette = [
  {
    name: "Pearl Cloud",
    hex: "#f8fafc → #e5e7eb",
    swatch: ["#f8fafc", "#e5e7eb"], // for gradient
    mood: "Calm, fresh start; like morning clouds, subtle polish.",
    description: "A gentle, pearly white gradient reminiscent of morning clouds—soft, polished, and calming. Moves away from flat white, offering depth and tranquility.",
  },
  {
    name: "Awakening Gray",
    hex: "#d1d5db",
    swatch: ["#d1d5db"],
    mood: "Poised, balanced; the transition between rest and awakening.",
    description: "An 'in-between' gray for borders and secondary elements. Supports flow and transition without demanding attention.",
  },
  {
    name: "Skyline Blue",
    hex: "#60a5fa",
    swatch: ["#60a5fa"],
    mood: "Subtle energy, hope; the first light of blue sky.",
    description: "A subtle, early-morning blue used for highlights and accents. Energizing yet understated, inspiring gentle motivation.",
  },
  {
    name: "Carbon Black",
    hex: "#374151",
    swatch: ["#374151"],
    mood: "Focus, authority, readability; like pencil lead on paper.",
    description: "A deep, graphite-inspired black for text. Provides strong contrast and ensures the user's attention is always on what matters.",
  },
];

export default function ColorPalette() {
  return (
    <div className="w-full flex justify-center mb-8">
      <div className=" sm:w-[60%] w-[70%] flex flex-col gap-6">
        {colorPalette.map((color, idx) => (
          <div
            key={color.name}
            className="flex md:flex-row gap-4 flex-col items-center bg-white/90 p-4"
          >
            {/* Color Swatch */}
            <div className="flex-shrink-0">
              {color.swatch.length === 2 ? (
                // Gradient for Pearl Cloud
                <div
                  className="w-16 h-16 rounded-lg border border-gray-200"
                  style={{
                    background: `linear-gradient(to bottom, ${color.swatch[0]}, ${color.swatch[1]})`,
                  }}
                  aria-label={`${color.name} swatch`}
                />
              ) : (
                <div
                  className="w-16 h-16 rounded-lg border border-gray-200"
                  style={{ backgroundColor: color.swatch[0] }}
                  aria-label={`${color.name} swatch`}
                />
              )}
            </div>
            {/* Info */}
            <div className="ml-6 flex-1">
              <div className="font-bold text-lg md:justify-start justify-center">{color.name}</div>
              <div className="text-sm text-gray-600 mb-1 md:justify-start justify-center">
                <span className="font-mono">{color.hex}</span>
              </div>
              <div className="text-sm text-slate-700 font-semibold md:justify-start justify-center">{color.mood}</div>
              <div className="text-sm text-gray-500 mt-1 md:justify-start justify-center">{color.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
