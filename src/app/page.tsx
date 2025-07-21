"use client";
// app/page.tsx
import React, { useEffect, useState } from "react";
import SatoriCollapsiblePanel from "@/components/ui/collapsible-panel";
import SatoriTextBox from "@/components/ui/textbox";
import SatoriColorPicker from "@/components/ui/colorpicker";
import SatoriSwitch from "@/components/ui/switch";
import SatoriDropDownList from "@/components/ui/dropdownlist";
import SatoriMultiLineBox from "@/components/ui/multilinebox";
import SatoriDimensionsBox from "@/components/ui/dimensions-box";
import SatoriButton from "@/components/ui/button";
import SatoriCheckBox from "@/components/ui/checkbox";
import { STANDARD_FONT_FAMILIES, NOPERCENT_UNITS, TEXT_DECORATIONS } from "@/types/constants";
import { Space } from "lucide-react";
// Import all your other components as needed...

export default function Page() {
  const [headingText, setHeadingText] = useState("Satori UI in Action");
  const [headingFontSize, setHeadingFontSize] = useState({
    value: "3",
    unit: "rem",
  });
  const [headingColor, setHeadingColor] = useState("#222222");
  const [headingFontFamily, setHeadingFontFamily] = useState(
    "'Roboto', sans-serif"
  );
  const [isBold, setIsBold] = useState(false);

  const [paragraphText, setParagraphText] = useState(
    "Satori, in Zen Buddhism, means a moment of sudden enlightenment or understanding. This UI library is built on that principle: to provide clear, intuitive, and thoughtfully crafted components that feel like a natural extension of your creative process. It's the culmination of nearly two decades of experience, distilled into a modern, accessible, and high-performance suite for developers and designers who value both form and function."
  );
  const [paragraphColor, setParagraphColor] = useState("#666666");
  const [paragraphFontSize, setParagraphFontSize] = useState({
    value: "1.2",
    unit: "rem",
  });

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [tbDemoVal, setTbDemoVal] = useState("");
  const [mlbDemoVal, setMlbDemoVal] = useState("");
  const [ddlDemoVal, setDdlDemoVal] = useState("none");
  const [cpDemoVal, setCpDemoVal] = useState("#666666")
  const [swDemoVal, setSwDemoVal] = useState(false);
  // (Optional) Sync colors with dark mode
  useEffect(() => {
    if (isDarkMode) {
      setHeadingColor("#f4f5fa");
      setParagraphColor("#b6b8c3");
    } else {
      setHeadingColor("#222222");
      setParagraphColor("#666666");
    }
  }, [isDarkMode]);

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      {/* Hero Title */}
      <section
        className="
        w-full flex flex-col items-center
        2xl:my-90
        xl:my-76
        lg:my-62
        md:my-48
        sm:my-32
        xs:my-18
        my-12
        "
      >
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
        <div className="text-3xl font-medium text-gray-700 mb-6">
          What is Satori?
        </div>
        <p
          className="mb-4 text-gray-600"
          style={{
            fontSize: "18px",
            lineHeight: "1.6rem",
          }}
        >
          Satori means “enlightenment, clarity, flow.” This open source UI
          library was born from two decades of real-world engineering and UX
          experience. Each component is built to be minimal, smooth, and
          joyfully easy to use. Satori UI is for developers who want more than
          just pretty pixels—it’s about seamless flow, developer happiness, and
          real-world results.
        </p>
        <p
          className="mb-4 text-gray-600"
          style={{
            fontSize: "18px",
            lineHeight: "1.6rem",
          }}
        >
          Every component here started life in production, not in a design
          mockup. My goal: a UI kit that *feels* as good to use as it does to
          look at. More components, docs, and tools are coming soon. Welcome to
          the next step in your UI journey.
        </p>
        <div className="text-base text-gray-500">
          {/* (Paste your vision/mission writeup here) */}
          {/* You can edit/proof this later */}
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="w-full max-w-5xl flex flex-col md:flex-row gap-10 mb-20">
        {/* Live Preview */}
        <div className="md:basis-3/5 md:max-w-[60%] flex-1 flex flex-col items-center justify-center">
          <div
            className={`
              w-full mx-8 min-h-[200px] rounded-2xl shadow-xl border border-gray-200
              transition-colors duration-300 flex flex-col items-center justify-center p-8
              ${isDarkMode ? "bg-neutral-900" : "bg-white"}
            `}
          >
            {/* Heading */}
            <h2
              className="mb-2"
              style={{
                color: headingColor,
                fontSize: `${headingFontSize.value}${headingFontSize.unit}`,
                fontFamily: headingFontFamily,
                fontWeight: isBold ? 700 : 400,
                transition: "color 0.3s",
              }}
            >
              {headingText}
            </h2>
            {/* Paragraph */}
            <p
              className="text-center max-w-prose mb-2"
              style={{
                fontSize: `${paragraphFontSize.value}${paragraphFontSize.unit}`,
                color: paragraphColor,
                transition: "color 0.3s",
              }}
            >
              {paragraphText}
            </p>
          </div>
        </div>
        {/* Controls Panel(s) */}
        <div className="md:basis-2/5 md:max-width-[40%] flex-1 flex flex-col gap-6 z-20">
          {/* Heading Options */}
          <SatoriCollapsiblePanel title="Heading Options" defaultOpen>
            <div className="flex flex-col gap-4 overflow-y-visible">
              <SatoriTextBox
                label="Heading"
                value={headingText}
                onChange={setHeadingText}
              />
              <SatoriColorPicker
                label="Color"
                value={headingColor}
                onChange={setHeadingColor}
              />
              <SatoriSwitch
                label="Bold"
                checked={isBold}
                onChange={setIsBold}
              />
              <SatoriDropDownList
                label="Font Family"
                value={headingFontFamily}
                onChange={setHeadingFontFamily}
                isFontFamily={false}
                options={STANDARD_FONT_FAMILIES}
              />
              <SatoriDimensionsBox
                label={"Font Size"}
                value={headingFontSize.value}
                unit={headingFontSize.unit}
                onValueChange={(val) =>
                  setHeadingFontSize({ ...headingFontSize, value: val })
                }
                onUnitChange={(unitVal) =>
                  setHeadingFontSize({ ...headingFontSize, unit: unitVal })
                }
              />
            </div>
          </SatoriCollapsiblePanel>
          {/* Paragraph Options */}
          <SatoriCollapsiblePanel title="Paragraph Options" defaultOpen>
            <div className="flex flex-col gap-4">
              <SatoriMultiLineBox
                label="Paragraph"
                value={paragraphText}
                onChange={setParagraphText}
                rows={3}
              />
              <SatoriColorPicker
                label="Color"
                value={paragraphColor}
                onChange={setParagraphColor}
              />
              <SatoriDimensionsBox
                label={"Font Size"}
                value={paragraphFontSize.value}
                unit={paragraphFontSize.unit}
                onValueChange={(val) =>
                  setParagraphFontSize({ ...paragraphFontSize, value: val })
                }
                onUnitChange={(unitVal) =>
                  setParagraphFontSize({ ...paragraphFontSize, unit: unitVal })
                }
              />
            </div>
          </SatoriCollapsiblePanel>
          {/* Dark/Light Mode Toggle */}
          <SatoriSwitch
            label="Dark Mode"
            checked={isDarkMode}
            onChange={setIsDarkMode}
            className="mt-4"
          />
        </div>
      </section>

      {/* Components List Section */}
      <section className="w-full max-w-4xl mt-8 mb-20">
        <h3 className="text-2xl font-bold mb-6 text-center">Components</h3>
        <div className="flex flex-col gap-5">
          {/* SatoriCollapsiblePanel */}
          <div className="flex items-center gap-7 bg-white rounded-xl shadow border border-gray-100 p-5">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="w-[200px] flex justify-center items-center">
              {/* Place a mini live demo here, e.g. <SatoriButton>Sample</SatoriButton> */}
              <SatoriCollapsiblePanel
                title={"Spacing"}
                icon={<Space size={20} />}
                defaultOpen>
                Open Panel
              </SatoriCollapsiblePanel> 
            </div>
            {/* Right: Name + description */}
            <div className="flex-1 flex-col">
              <div className="font-semibold text-lg">SatoriCollapsiblePanel</div>
              <div className="text-gray-600">
                A clean, minimalistic Collapsible Panel component.
              </div>
            </div>
          </div>
          {/* SatoriButton */}
          <div className="flex items-center gap-7 bg-white rounded-xl shadow border border-gray-100 p-5">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="w-[200px] flex justify-center items-center">
              {/* Place a mini live demo here, e.g. <SatoriButton>Sample</SatoriButton> */}
              <SatoriButton type="button" variant="light" size="lg">
                Click Me
              </SatoriButton>
            </div>
            {/* Right: Name + description */}
            <div className="flex-1 flex-col">
              <div className="font-semibold text-lg">SatoriButton</div>
              <div className="text-gray-600">
                A clean, minimalistic button component.
              </div>
            </div>
          </div>
          {/* SatoriCheckBox */}
          <div className="flex items-center gap-7 bg-white rounded-xl shadow border border-gray-100 p-5">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="w-[200px] flex justify-center items-center">
              {/* Place a mini live demo here, e.g. <SatoriButton>Sample</SatoriButton> */}
              <SatoriCheckBox
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)} 
              />
            </div>
            {/* Right: Name + description */}
            <div className="flex-1 flex-col">
              <div className="font-semibold text-lg">SatoriCheckBox</div>
              <div className="text-gray-600">
                A clean, minimalistic checkbox component.
              </div>
            </div>
          </div>
          {/* SatoriTextBox */}
          <div className="flex items-center gap-7 bg-white rounded-xl shadow border border-gray-100 p-5">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="w-[200px] flex justify-center items-center">
              {/* Place a mini live demo here, e.g. <SatoriButton>Sample</SatoriButton> */}
              <SatoriTextBox
                value={tbDemoVal}
                onChange={val => setTbDemoVal(val)} 
              />
            </div>
            {/* Right: Name + description */}
            <div className="flex-1 flex-col">
              <div className="font-semibold text-lg">SatoriTextBox</div>
              <div className="text-gray-600">
                A clean, minimalistic textbox component.
              </div>
            </div>
          </div>
          {/* SatoriMultiLineBox */}
          <div className="flex items-center gap-7 bg-white rounded-xl shadow border border-gray-100 p-5">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="w-[200px] flex justify-center items-center">
              {/* Place a mini live demo here, e.g. <SatoriButton>Sample</SatoriButton> */}
              <SatoriMultiLineBox
                rows={3}
                value={mlbDemoVal}
                onChange={val => setMlbDemoVal(val)} 
              />
            </div>
            {/* Right: Name + description */}
            <div className="flex-1 flex-col">
              <div className="font-semibold text-lg">SatoriMultiLineBox</div>
              <div className="text-gray-600">
                A clean, minimalistic MultiLineBox component.
              </div>
            </div>
          </div>
          {/* SatoriDropDownList */}
          <div className="flex items-center gap-7 bg-white rounded-xl shadow border border-gray-100 p-5">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="w-[200px] flex justify-center items-center">
              {/* Place a mini live demo here, e.g. <SatoriButton>Sample</SatoriButton> */}
              <SatoriDropDownList
                options={TEXT_DECORATIONS}
                value={ddlDemoVal}
                layout={"vertical"}
                isFontFamily={false}
                onChange={val => setDdlDemoVal(val)} 
              />
            </div>
            {/* Right: Name + description */}
            <div className="flex-1 flex-col">
              <div className="font-semibold text-lg">SatoriDropDownList</div>
              <div className="text-gray-600">
                A clean, minimalistic DropDownList component.
              </div>
            </div>
          </div>
          {/* SatoriColorPicker */}
          <div className="flex items-center gap-7 bg-white rounded-xl shadow border border-gray-100 p-5">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="w-[200px] flex justify-center items-center">
              {/* Place a mini live demo here, e.g. <SatoriButton>Sample</SatoriButton> */}
              <SatoriColorPicker
                label={"Color"}
                value={cpDemoVal}
                onChange={val => setCpDemoVal(val)} 
              />
            </div>
            {/* Right: Name + description */}
            <div className="flex-1 flex-col">
              <div className="font-semibold text-lg">SatoriColorPicker</div>
              <div className="text-gray-600">
                A clean, minimalistic ColorPicker component.
              </div>
            </div>
          </div>
          {/* SatoriSwitch */}
          <div className="flex items-center gap-7 bg-white rounded-xl shadow border border-gray-100 p-5">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="w-[200px] flex justify-center items-center">
              {/* Place a mini live demo here, e.g. <SatoriButton>Sample</SatoriButton> */}
              <SatoriSwitch
                checked={swDemoVal}
                onChange={() => setSwDemoVal(!swDemoVal)} 
              />
            </div>
            {/* Right: Name + description */}
            <div className="flex-1 flex-col">
              <div className="font-semibold text-lg">SatoriSwitch</div>
              <div className="text-gray-600">
                A clean, minimalistic Switch component.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full flex items-center justify-center text-sm text-gray-400 py-10">
        &copy; {new Date().getFullYear()} Satori UI &middot; Crafted by Weizhi
      </footer>
    </div>
  );
}
