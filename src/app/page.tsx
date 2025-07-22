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
import ColorPalette from "@/components/color-palette";
import DesignPhilosophy from "@/components/design-philosophy";
// Import all your other components as needed...

export default function Page() {
  const [headingText, setHeadingText] = useState("Satori UI in Action");
  const [headingFontSize, setHeadingFontSize] = useState({
    value: "2",
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
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl text-gray-700 mb-8 font-semibold tracking-tight text-start leading-none sm:w-[60%] w-[70%]"
          style={{ fontFamily: "'Roboto', sans-serif", letterSpacing: "1px" }}
        >
          What is Satori?
        </h3>
        <p
          className="mb-4 text-gray-600 sm:w-[60%] w-[70%]"
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
          className="mb-4 text-gray-600 sm:w-[60%] w-[70%]"
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
        <h4
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-gray-700 my-8 font-semibold tracking-tight text-start leading-none sm:w-[60%] w-[70%]"
          style={{ fontFamily: "'Roboto', sans-serif", letterSpacing: "1px" }}
        >
          Colors (60:30:10)
        </h4>
        <ColorPalette />
        <h4
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-gray-700 my-8 font-semibold tracking-tight text-start leading-none sm:w-[60%] w-[70%]"
          style={{ fontFamily: "'Roboto', sans-serif", letterSpacing: "1px" }}
        >
          Design Philosophy
        </h4>
        <DesignPhilosophy />
      </section>

      {/* Live Demo Section */}
      <section className="relative w-full flex flex-col items-center justify-center min-h-screen border-b border-gray-200">
        {/* Layer 1: The Background Image (z-0) */}
        <div className="absolute top-0 lg:left-50 left-0 h-full w-[100%] z-0 lg:-translate-x-1/2">
          <div
            className="h-full w-full bg-[url('/satori-ui-bg.png')] bg-cover lg:bg-center bg-right opacity-80"
          ></div>
        </div>

        <div className="absolute top-0 left-0 h-full w-full z-1 bg-gradient-to-l from-white via-white lg:via-40% via-20% to-gray-100/40">
        </div>

        {/* Layer 3: Content (z-20) */}
        {/* This is the top layer for all interactive UI. It's a flex container that
            arranges the preview and controls. 'relative' and 'z-20' ensure it's on top. */}
        <div className="relative z-20 flex flex-col xl:flex-row gap-4 p-4 lg:p-6 min-h-[600px]">
          {/* Dark/Light Mode Toggle */}
            <div className="absolute flex right-10 top-5 gap-3 justify-end items-center mb-4">
              <span className="text-sm text-gray-700">Toggle Dark Mode</span>
              <SatoriSwitch
                checked={isDarkMode}
                onChange={setIsDarkMode}
              />
            </div>
          {/* Live Preview */}
          <div className="w-full xl:basis-2/3 lg:w-1/2 mt-16 lg:my-56 h-full flex items-center justify-center p-4">
            <div
              className={`
                w-full md:mx-4 min-h-[200px] rounded-2xl shadow-xl border border-gray-200
                transition-colors duration-300 flex flex-col items-center justify-center p-8
                ${isDarkMode ? "bg-neutral-900" : "bg-white"}
              `}
            >
              {/* Heading */}
              <h3
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
              </h3>
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
          
          {/* Controls Panel(s) */}
          <div className="w-full 
            xl:basis-2/3 xl:flex-col xl:gap-0 xl:mt-12
            p-4 flex md:flex-row flex-col gap-4">
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
        py-16
        ">
        <div className="flex flex-col gap-4 justify-start w-[80%] mb-8">
          <h3
            className="flex text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl text-gray-700 font-semibold tracking-tight text-start leading-none"
            style={{ fontFamily: "'Roboto', sans-serif", letterSpacing: "1px" }}
          >
            Components
          </h3>
          <img src="/made-with-react.svg" className="lg:w-[12%] md:w-[20%] w-[30%]" />
        </div>
          
        <div className="flex flex-col gap-5  w-[80%]">
          {/* SatoriCollapsiblePanel */}
          <div className="flex items-center h-[250px] gap-7 bg-white rounded-xl shadow border border-gray-100">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="relative xl:w-[350px] w-[300px] h-full flex justify-center items-center border-r border-gray-200 md:rounded-l-lg md:rounded-none rounded-lg bg-gray-100 xl:p-10 p-5">
              <span className="md:hidden absolute top-5 left-0 w-full text-center text-lg font-bold text-gray-500">
                SatoriCollapsiblePanel
              </span>
              <SatoriCollapsiblePanel
                title={"Spacing"}
                icon={<Space size={20} />}
                defaultOpen>
                Open Panel
              </SatoriCollapsiblePanel> 
            </div>
            {/* Center: Name + description */}
            <div className="hidden md:block md:flex-1 flex-col">
              <div className="font-semibold text-lg">SatoriCollapsiblePanel</div>
              <div className="text-gray-600">
                A clean, minimalistic Collapsible Panel component.
              </div>
            </div>
            {/* Code Usage */}
            <div 
              className="2xl:flex 2xl:w-[380px] 2xl:visible hidden justify-center  items-center h-full p-4 text-gray-50 bg-slate-800 font-mono text-lg rounded-r-xl"
              style={{
                lineHeight: "1.7rem"
              }}
            >
              <pre className="whitespace-pre-wrap">
                <code>
{`<SatoriCollapsiblePanel 
  title={"Spacing"} 
  icon={<Space size={20} />}
  defaultOpen 
>
  Opened Panel
</SatoriCollapsiblePanel>`}
                </code>
              </pre>
            </div>
          </div>
          {/* SatoriButton */}
          <div className="flex items-center h-[250px] gap-7 bg-white rounded-xl shadow border border-gray-100">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="relative xl:w-[350px] w-[300px] h-full flex justify-center items-center border-r border-gray-200 md:rounded-l-lg md:rounded-none rounded-lg bg-gray-100 xl:p-10 p-5">
              <span className="md:hidden absolute top-5 left-0 w-full text-center text-lg font-bold text-gray-500">
                SatoriButton
              </span>
              {/* Place a mini live demo here, e.g. <SatoriButton>Sample</SatoriButton> */}
              <SatoriButton type="button" variant="light" size="lg">
                Click Me
              </SatoriButton>
            </div>
            {/* Right: Name + description */}
            <div className="hidden md:block md:flex-1 flex-col">
              <div className="font-semibold text-lg">SatoriButton</div>
              <div className="text-gray-600">
                A clean, minimalistic button component.
              </div>
            </div>
            {/* Code Usage */}
            <div 
              className="2xl:flex 2xl:w-[380px] 2xl:visible hidden justify-center  items-center h-full p-4 text-gray-50 bg-slate-800 font-mono text-lg rounded-r-xl"
              style={{
                lineHeight: "1.7rem"
              }}
            >
              <pre className="whitespace-pre-wrap">
                <code>
{`<SatoriButton 
  label="Click Me" 
  variant="light" 
/>`}
                </code>
              </pre>
            </div>
          </div>
          {/* SatoriCheckBox */}
          <div className="flex items-center h-[250px] gap-7 bg-white rounded-xl shadow border border-gray-100">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="relative xl:w-[350px] w-[300px] h-full flex justify-center items-center border-r border-gray-200 md:rounded-l-lg md:rounded-none rounded-lg bg-gray-100 xl:p-10 p-5">
              <span className="md:hidden absolute top-5 left-0 w-full text-center text-lg font-bold text-gray-500">
                SatoriCheckBox
              </span>
              {/* Place a mini live demo here, e.g. <SatoriButton>Sample</SatoriButton> */}
              <SatoriCheckBox
                label={"Remember Me"}
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)} 
              />
            </div>
            {/* Right: Name + description */}
            <div className="hidden md:block md:flex-1 flex-col">
              <div className="font-semibold text-lg">SatoriCheckBox</div>
              <div className="text-gray-600">
                A clean, minimalistic checkbox component.
              </div>
            </div>
            {/* Code Usage */}
            <div 
              className="2xl:flex 2xl:w-[380px] 2xl:visible hidden justify-center  items-center h-full p-4 text-gray-50 bg-slate-800 font-mono text-lg rounded-r-xl"
              style={{
                lineHeight: "1.7rem"
              }}
            >
              <pre className="whitespace-pre-wrap">
                <code>
{`<SatoriCheckBox 
  label="Agree" 
  checked={isChecked}
  onChange={() => ...}
/>`}
                </code>
              </pre>
            </div>
          </div>
          {/* SatoriTextBox */}
          <div className="flex items-center h-[250px] gap-7 bg-white rounded-xl shadow border border-gray-100">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="relative xl:w-[350px] w-[300px] h-full flex justify-center items-center border-r border-gray-200 md:rounded-l-lg md:rounded-none rounded-lg bg-gray-100 xl:p-10 p-5">
              <span className="md:hidden absolute top-5 left-0 w-full text-center text-lg font-bold text-gray-500">
                SatoriTextBox
              </span>
              {/* Place a mini live demo here, e.g. <SatoriButton>Sample</SatoriButton> */}
              <SatoriTextBox
                value={tbDemoVal}
                onChange={val => setTbDemoVal(val)} 
              />
            </div>
            {/* Right: Name + description */}
            <div className="hidden md:block md:flex-1 flex-col">
              <div className="font-semibold text-lg">SatoriTextBox</div>
              <div className="text-gray-600">
                A clean, minimalistic textbox component.
              </div>
            </div>
            {/* Code Usage */}
            <div 
              className="2xl:flex 2xl:w-[380px] 2xl:visible hidden justify-center  items-center h-full p-4 text-gray-50 bg-slate-800 font-mono text-lg rounded-r-xl"
              style={{
                lineHeight: "1.7rem"
              }}
            >
              <pre className="whitespace-pre-wrap">
                <code>
{`<SatoriTextBox 
  label="First Name" 
  value={firstName}
  onChange={val => ...}
/>`}
                </code>
              </pre>
            </div>
          </div>
          {/* SatoriMultiLineBox */}
          <div className="flex items-center h-[250px] gap-7 bg-white rounded-xl shadow border border-gray-100">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="relative xl:w-[350px] w-[300px] h-full flex justify-center items-center border-r border-gray-200 md:rounded-l-lg md:rounded-none rounded-lg bg-gray-100 xl:p-10 p-5">
              <span className="md:hidden absolute top-5 left-0 w-full text-center text-lg font-bold text-gray-500">
                SatoriMultiLineBox
              </span>
              {/* Place a mini live demo here, e.g. <SatoriButton>Sample</SatoriButton> */}
              <SatoriMultiLineBox
                rows={3}
                value={mlbDemoVal}
                onChange={val => setMlbDemoVal(val)} 
              />
            </div>
            {/* Right: Name + description */}
            <div className="hidden md:block md:flex-1 flex-col">
              <div className="font-semibold text-lg">SatoriMultiLineBox</div>
              <div className="text-gray-600">
                A clean, minimalistic MultiLineBox component.
              </div>
            </div>
            {/* Code Usage */}
            <div 
              className="2xl:flex 2xl:w-[380px] 2xl:visible hidden justify-center  items-center h-full p-4 text-gray-50 bg-slate-800 font-mono text-lg rounded-r-xl"
              style={{
                lineHeight: "1.7rem"
              }}
            >
              <pre className="whitespace-pre-wrap">
                <code>
{`<SatoriMultiLineBox 
  label="Feedback" 
  rows={3}
  value={feedback}
  onChange={val => ...}
/>`}
                </code>
              </pre>
            </div>
          </div>
          {/* SatoriDropDownList */}
          <div className="flex items-center h-[250px] gap-7 bg-white rounded-xl shadow border border-gray-100">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="relative xl:w-[350px] w-[300px] h-full flex justify-center items-center border-r border-gray-200 md:rounded-l-lg md:rounded-none rounded-lg bg-gray-100 xl:p-10 p-5">
              <span className="md:hidden absolute top-5 left-0 w-full text-center text-lg font-bold text-gray-500">
                SatoriDropDownList
              </span>
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
            <div className="hidden md:block md:flex-1 flex-col">
              <div className="font-semibold text-lg">SatoriDropDownList</div>
              <div className="text-gray-600">
                A clean, minimalistic DropDownList component.
              </div>
            </div>
            {/* Code Usage */}
            <div 
              className="2xl:flex 2xl:w-[380px] 2xl:visible hidden justify-center  items-center h-full p-4 text-gray-50 bg-slate-800 font-mono text-lg rounded-r-xl"
              style={{
                lineHeight: "1.7rem"
              }}
            >
              <pre className="whitespace-pre-wrap">
                <code>
{`<SatoriDropDownList
  options={TEXT_DECORATIONS}
  value={textDecoration}
  layout={"vertical"}
  isFontFamily={false}
  onChange={val => ...} 
/>`}
                </code>
              </pre>
            </div>
          </div>
          {/* SatoriDimensionsBox */}
          <div className="flex items-center h-[250px] gap-7 bg-white rounded-xl shadow border border-gray-100">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="relative xl:w-[350px] w-[300px] h-full flex justify-center items-center border-r border-gray-200 md:rounded-l-lg md:rounded-none rounded-lg bg-gray-100 xl:p-10 p-5">
              <span className="md:hidden absolute top-5 left-0 w-full text-center text-lg font-bold text-gray-500">
                SatoriDimensionsBox
              </span>
              {/* Place a mini live demo here, e.g. <SatoriButton>Sample</SatoriButton> */}
              <SatoriDimensionsBox
                value={dimDemoVal.value}
                unit={dimDemoVal.unit}
                onValueChange={val => setDimDemoVal({...dimDemoVal, value: val})}
                onUnitChange={unitVal => setDimDemoVal({...dimDemoVal, unit: unitVal})}
              />
            </div>
            {/* Right: Name + description */}
            <div className="hidden md:block md:flex-1 flex-col">
              <div className="font-semibold text-lg">SatoriDimensionsBox</div>
              <div className="text-gray-600">
                A clean, minimalistic Dimensions Input Box component.
              </div>
            </div>
            {/* Code Usage */}
            <div 
              className="2xl:flex 2xl:w-[380px] 2xl:visible hidden justify-center  items-center h-full p-4 text-gray-50 bg-slate-800 font-mono text-lg rounded-r-xl"
              style={{
                lineHeight: "1.7rem"
              }}
            >
              <pre className="whitespace-pre-wrap">
                <code>
{`<SatoriDimensionsBox
  label={"Font Size"}
  value={fontSize.value}
  unit={fontSize.unit}
  onValueChange={val => ...}
  onUnitChange={unitVal => ...}
/>`}
                </code>
              </pre>
            </div>
          </div>
          {/* SatoriColorPicker */}
          <div className="flex items-center h-[250px] gap-7 bg-white rounded-xl shadow border border-gray-100">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="relative xl:w-[350px] w-[300px] h-full flex justify-center items-center border-r border-gray-200 md:rounded-l-lg md:rounded-none rounded-lg bg-gray-100 xl:p-10 p-5">
              <span className="md:hidden absolute top-5 left-0 w-full text-center text-lg font-bold text-gray-500">
                SatoriColorPicker
              </span>
              {/* Place a mini live demo here, e.g. <SatoriButton>Sample</SatoriButton> */}
              <SatoriColorPicker
                label={"Color"}
                value={cpDemoVal}
                onChange={val => setCpDemoVal(val)} 
              />
            </div>
            {/* Right: Name + description */}
            <div className="hidden md:block md:flex-1 flex-col">
              <div className="font-semibold text-lg">SatoriColorPicker</div>
              <div className="text-gray-600">
                A clean, minimalistic ColorPicker component.
              </div>
            </div>
            {/* Code Usage */}
            <div 
              className="2xl:flex 2xl:w-[380px] 2xl:visible hidden justify-center  items-center h-full p-4 text-gray-50 bg-slate-800 font-mono text-lg rounded-r-xl"
              style={{
                lineHeight: "1.7rem"
              }}
            >
              <pre className="whitespace-pre-wrap">
                <code>
{`<SatoriColorPicker
  label={"Color"}
  value={cpDemoVal}
  onChange={val => ...} 
/>`}
                </code>
              </pre>
            </div>
          </div>
          {/* SatoriSwitch */}
          <div className="flex items-center h-[250px] gap-7 bg-white rounded-xl shadow border border-gray-100">
            {/* Left: Mini live demo stub (replace with real demo) */}
            <div className="relative xl:w-[350px] w-[300px] h-full flex justify-center items-center border-r border-gray-200 md:rounded-l-lg md:rounded-none rounded-lg bg-gray-100 xl:p-10 p-5">
              <span className="md:hidden absolute top-5 left-0 w-full text-center text-lg font-bold text-gray-500">
                SatoriSwitch
              </span>
              {/* Place a mini live demo here, e.g. <SatoriButton>Sample</SatoriButton> */}
              <SatoriSwitch
                checked={swDemoVal}
                onChange={() => setSwDemoVal(!swDemoVal)} 
              />
            </div>
            {/* Right: Name + description */}
            <div className="hidden md:block md:flex-1 flex-col">
              <div className="font-semibold text-lg">SatoriSwitch</div>
              <div className="text-gray-600">
                A clean, minimalistic Switch component.
              </div>
            </div>
            {/* Code Usage */}
            <div 
              className="2xl:flex 2xl:w-[380px] 2xl:visible hidden justify-center  items-center h-full p-4 text-gray-50 bg-slate-800 font-mono text-lg rounded-r-xl"
              style={{
                lineHeight: "1.7rem"
              }}
            >
              <pre className="whitespace-pre-wrap">
                <code>
{`<SatoriSwitch
  checked={isDarkMode}
  onChange={() => ...} 
/>`}
                </code>
              </pre>
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
