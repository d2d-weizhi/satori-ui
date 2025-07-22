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
  const [dimDemoVal, setDimDemoVal] = useState({value: "16", unit: "px"})
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
      <section className="w-full flex flex-col items-center justify-center min-h-screen border-b border-gray-200">
        <h1
          className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[10rem] 2xl:text-[12rem] font-bold tracking-tight text-center leading-none"
          style={{ fontFamily: "'Roboto', sans-serif", letterSpacing: "2px" }}
        >
          Satori
        </h1>
        <hr className="border-[2px] my-4 border-gray-800 2xl:w-[30%] xl:w-[35%] lg:w-[35%] md:w-[45%] sm:w-[60%] w-[60%] min-w-[180px]" />
        <h2 className="xl:text-3xl md:text-xl text-sm mt-4 text-center text-gray-500 font-light italic max-w-2xl">
          Minimalistic UI that Just Flows.
        </h2>
      </section>

      {/* Intro/Philosophy */}
      <section 
        className="
        w-full flex flex-col items-center justify-center min-h-screen border-b border-gray-200 py-16
        ">
        <h3
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl text-gray-700 mb-8 font-semibold tracking-tight text-start leading-none w-[60%]"
          style={{ fontFamily: "'Roboto', sans-serif", letterSpacing: "1px" }}
        >
          What is Satori?
        </h3>
        <p
          className="mb-4 text-gray-600 w-[60%]"
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
          className="mb-4 text-gray-600 w-[60%]"
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
        <div className="text-base text-gray-500 w-[60%]">
          {/* (Paste your vision/mission writeup here) */}
          {/* You can edit/proof this later */}
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="relative w-full flex flex-col items-center justify-center min-h-screen border-b border-gray-200">
        {/* Layer 1: The Background Image (z-0) */}
        <div className="absolute top-0 left-50 lg:left-0 h-full w-[100%] z-0 -translate-x-1/2">
          <div
            className="h-full w-full bg-[url('/satori-ui-bg.png')] bg-cover bg-center opacity-80"
          ></div>
        </div>

        {/* Layer 2: The Gradient Overlay (z-10) - CORRECTED */}
        {/* This gradient uses the correct variable for the solid color on the right. */}
        <div
          className="absolute inset-0 z-10 
             bg-gradient-to-r 
             from-slate-50/20 
             via-55%
             via-[#f9fafb] 
             to-[#f9fafb] lg:hidden"
        ></div>

        {/* Layer 3: Content (z-20) */}
        {/* This is the top layer for all interactive UI. It's a flex container that
            arranges the preview and controls. 'relative' and 'z-20' ensure it's on top. */}
        <div className="relative z-20 flex flex-col xl:flex-row gap-4 p-4 lg:p-6 min-h-[600px]">
          {/* Live Preview */}
          <div className="w-full lg:w-1/2 sm:mt-8 lg:my-56 h-full flex items-center justify-center p-4">
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
                className="text-slate-600 leading-relaxed"
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
          {/* Dark/Light Mode Toggle */}
          <SatoriSwitch
            label="Dark Mode"
            checked={isDarkMode}
            onChange={setIsDarkMode}
            className="absolute top-5 xl:right-[53%] right-[3%]"
          />
          {/* Controls Panel(s) */}
          <div className="w-full lg:w-1/2 sm:w-full sm:gap-15 p-4 flex xl:flex-col xl:gap-0 sm:justify-evenly">
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
          </div>
        </div>
      </section>

      {/* Components List Section */}
      <section 
        className="
        w-full flex flex-col items-center justify-center min-h-screen border-b border-gray-200
        2xl:py-32
        ">
        <h3 className="text-2xl font-bold mb-6 text-center">Components</h3>
        <div className="flex flex-col gap-5 w-[60%]">
          {/* SatoriCollapsiblePanel */}
          <div className="flex items-center h-[250px] gap-7 bg-white rounded-xl shadow border border-gray-100 p-5">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="w-[300px] flex justify-center items-center">
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
          <div className="flex items-center h-[250px] gap-7 bg-white rounded-xl shadow border border-gray-100 p-5">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="w-[300px] flex justify-center items-center">
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
          <div className="flex items-center h-[250px] gap-7 bg-white rounded-xl shadow border border-gray-100 p-5">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="w-[300px] flex justify-center items-center">
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
          <div className="flex items-center h-[250px] gap-7 bg-white rounded-xl shadow border border-gray-100 p-5">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="w-[300px] flex justify-center items-center">
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
          <div className="flex items-center h-[250px] gap-7 bg-white rounded-xl shadow border border-gray-100 p-5">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="w-[300px] flex justify-center items-center">
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
          <div className="flex items-center h-[250px] gap-7 bg-white rounded-xl shadow border border-gray-100 p-5">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="w-[300px] flex justify-center items-center">
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
          {/* SatoriDimensionsBox */}
          <div className="flex items-center h-[250px] gap-7 bg-white rounded-xl shadow border border-gray-100 p-5">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="w-[300px] flex justify-center items-center">
              {/* Place a mini live demo here, e.g. <SatoriButton>Sample</SatoriButton> */}
              <SatoriDimensionsBox
                value={dimDemoVal.value}
                unit={dimDemoVal.unit}
                onValueChange={val => setDimDemoVal({...dimDemoVal, value: val})}
                onUnitChange={unitVal => setDimDemoVal({...dimDemoVal, unit: unitVal})}
              />
            </div>
            {/* Right: Name + description */}
            <div className="flex-1 flex-col">
              <div className="font-semibold text-lg">SatoriDimensionsBox</div>
              <div className="text-gray-600">
                A clean, minimalistic Dimensions Input Box component.
              </div>
            </div>
          </div>
          {/* SatoriColorPicker */}
          <div className="flex items-center h-[250px] gap-7 bg-white rounded-xl shadow border border-gray-100 p-5">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="w-[300px] flex justify-center items-center">
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
          <div className="flex items-center h-[250px] gap-7 bg-white rounded-xl shadow border border-gray-100 p-5">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="w-[300px] flex justify-center items-center">
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
