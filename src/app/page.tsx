"use client";
// app/page.tsx
import React from "react";
import SatoriCollapsiblePanel from "@/components/ui/collapsible-panel";
// Import all your other components as needed...

export default function Page() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      {/* Hero Title */}
      <section 
        className="
        w-full flex flex-col items-center
        2xl:my-80
        xl:my-64
        lg:my-48
        md:my-32
        sm:my-24
        xs:mt-8
        ">
        <h1
          className="text-5xl sm:text-7xl lg:8xl xl:text-9xl font-bold tracking-tight text-center leading-none"
          style={{ fontFamily: "'Roboto', sans-serif", letterSpacing: "2px" }}
        >
          Satori
        </h1>
        <h2 className="text-xl mt-4 text-center text-gray-500 font-light max-w-2xl">
          Minimalistic UI that Just Flows.
        </h2>
      </section>

      {/* Intro/Philosophy */}
      <section className="max-w-3xl w-full mb-14 px-2 text-center">
        <div className="text-lg font-medium text-gray-700 mb-2">
          What is Satori?
        </div>
        <p className="mb-2 text-gray-600">
          Satori means “enlightenment, clarity, flow.” This open source UI library was born from two decades of real-world engineering and UX experience. Each component is built to be minimal, smooth, and joyfully easy to use. Satori UI is for developers who want more than just pretty pixels—it’s about seamless flow, developer happiness, and real-world results.
        </p>
        <p className="mb-4 text-gray-600">
          Every component here started life in production, not in a design mockup. My goal: a UI kit that *feels* as good to use as it does to look at. More components, docs, and tools are coming soon. Welcome to the next step in your UI journey.
        </p>
        <div className="text-base text-gray-500">
          {/* (Paste your vision/mission writeup here) */}
          {/* You can edit/proof this later */}
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="w-full max-w-5xl flex flex-col md:flex-row gap-10 mb-20">
        {/* Live Preview */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div
            className="
              w-full max-w-lg min-h-[200px] rounded-2xl shadow-xl border border-gray-200 bg-white dark:bg-neutral-900
              flex flex-col items-center justify-center p-8 transition-colors
            "
            // Later: style/background/text color changes via state here
          >
            {/* Heading (editable in options panel) */}
            <h2
              className="text-3xl font-semibold mb-2"
              // Later: font family/color/weight props
              style={{
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              Your Heading Here
            </h2>
            {/* Paragraph (editable) */}
            <p className="text-base text-gray-700 text-center max-w-prose mb-2">
              This is a sample description. Change the options on the right to see live updates!
            </p>
          </div>
        </div>
        {/* Controls Panel(s) */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Heading Options */}
          <SatoriCollapsiblePanel title="Heading Options" defaultOpen>
            {/* Place SatoriTextBox, SatoriColorPicker, SatoriSwitch, etc. here */}
            <div className="flex flex-col gap-4">
              {/* Heading controls (stub) */}
              {/* ... */}
            </div>
          </SatoriCollapsiblePanel>
          {/* Paragraph Options */}
          <SatoriCollapsiblePanel title="Paragraph Options" defaultOpen>
            <div className="flex flex-col gap-4">
              {/* Paragraph controls (stub) */}
              {/* ... */}
            </div>
          </SatoriCollapsiblePanel>
        </div>
      </section>

      {/* Components List Section */}
      <section className="w-full max-w-4xl mt-8 mb-20">
        <h3 className="text-2xl font-bold mb-6 text-center">Components</h3>
        <div className="flex flex-col gap-5">
          {/* Sample component rows, one for each Satori component */}
          {[
            { name: "Button", desc: "Themeable, accessible, and flexible action buttons." },
            { name: "Checkbox", desc: "Accessible, styled checkbox for boolean fields." },
            { name: "Collapsible Panel", desc: "Flexible, interactive panels for settings or layouts." },
            { name: "Color Picker", desc: "Modern color/alpha picker with live swatch." },
            { name: "Dimensions Box", desc: "Numeric input with unit dropdown for layout controls." },
            { name: "Dropdown List", desc: "Versatile dropdown, including font and option pickers." },
            { name: "MultiLine Box", desc: "Styled textarea for multi-line text input." },
            { name: "Switch", desc: "Animated, accessible toggle switch." },
            { name: "TextBox", desc: "Customizable single-line text input." },
          ].map(({ name, desc }) => (
            <div key={name} className="flex items-center gap-7 bg-white rounded-xl shadow border border-gray-100 p-5">
              {/* Left: Mini live demo stub (replace with real demo) */}
              <div className="min-w-[112px] flex justify-center items-center">
                {/* Place a mini live demo here, e.g. <SatoriButton>Sample</SatoriButton> */}
                <span className="rounded bg-gray-200 h-9 w-20 flex items-center justify-center text-gray-400">
                  Demo
                </span>
              </div>
              {/* Right: Name + description */}
              <div>
                <div className="font-semibold text-lg">{name}</div>
                <div className="text-gray-600">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full flex items-center justify-center text-sm text-gray-400 py-10">
        &copy; {new Date().getFullYear()} Satori UI &middot; Crafted by Weizhi
      </footer>
    </div>
  );
}
