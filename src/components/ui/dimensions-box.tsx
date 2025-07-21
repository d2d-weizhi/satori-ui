import React, { useState, useRef, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import DropDownListPortal from "./dropdownlist-portal";
import bodyStylesManager from "../../../../stores/body-styles-manager";
import { DEFAULT_UNITS } from "../../../../types/constants";


export interface ISatoriDimensionsBoxProps {
	label?: string;
	value: string;
	unit: string;
	units?: string[];
	parentFontSize?: number;
	onValueChange: (value: string) => void;
	onUnitChange: (unit: string) => void;
	className?: string;
}

export default function SatoriDimensionsBox({
	label,
	value,
	unit,
	units = DEFAULT_UNITS,
	onValueChange,
	onUnitChange,
	className = "",
}: ISatoriDimensionsBoxProps) {
	const [dropDownOpen, setDropDownOpen] = useState(false);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const [hoverItem, setHoverItem] = useState<string>("");
	const [showSpinners, setShowSpinners] = useState(false);
	const triggerRef = useRef<HTMLButtonElement>(null);
	const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);

	const step =
  unit === "rem" || unit === "em"
    ? 0.05
    : 1;

	// Close dropdown on outside click
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
				setDropDownOpen(false);
			}
		}

		if (dropDownOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [dropDownOpen]);

	return (
		<div className={`flex flex-col w-full ${className}`}>
			{label && <span className="min-w-max text-sm text-gray-600 font-medium mb-1">{label}</span>}
			<div
				ref={wrapperRef}
				className={`relative flex w-full h-8 rounded-md border border-gray-300 bg-white`}
				style={{ boxShadow: "0 1.5px 7px 0 rgba(30, 41, 59, 0.05)" }}
			>
				{/* Input field */}
				<input 
					type="number"
					value={value}
					onChange={e => onValueChange(e.target.value)}
					onFocus={() => setShowSpinners(true)}
					onBlur={() => setShowSpinners(false)}
					className="flex-1 px-2 py-1 bg-gray-50 border-0 focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm rounded-none rounded-l-md"
					min={0}
					step={1}
					placeholder="0"
					style={{ borderRight: "1px solid #E5E7EB" }}
				/>
					
				{/* Custom DropDown Button */}
				<button
					ref={triggerRef}
					type="button"
					onClick={() => {
						if (triggerRef.current) setAnchorRect(triggerRef.current.getBoundingClientRect());
						setDropDownOpen(!dropDownOpen);
					}}
					disabled={units.length === 1}
					className={`
						px-4 py-1 w-[50px] text-xs font-medium border-0 border-l border-gray-300
						bg-gradient-to-${dropDownOpen ? "t" : "b"} from-white to-gray-100 rounded-none rounded-r-md
						focus:outline-none focus:ring-1 focus:ring-blue-400 transition
						relative z-10
					`}
					style={{
						borderLeft: "1px solid #E5E7EB",
						boxShadow: dropDownOpen ? "0 2px 8px rgba(0, 0, 0, .08)": undefined
					}}
				>
					{unit}
				</button>

				{showSpinners && (
					<div className={`absolute top-[-1px] right-[50px] flex flex-col justify-center bg-gray-50 border border-gray-200`}>
						<button
							className="w-[16px] h-[15px] py-[1px] px-[3px] items-center justify-center text-xs text-gray-500 hover:text-gray-900" 
							onMouseDown={e => {
								e.preventDefault(); // Prevent input blur!
								onValueChange((+value + step).toFixed(2).toString());
							}}
						>
							<ChevronUp size={10} strokeWidth={4} />
						</button>
						<button
							className="w-[16px] h-[16.5px] mt-[-0.5px] px-[3px] items-center justify-center text-xs text-gray-500 hover:text-gray-900" 
							onMouseDown={e => {
								e.preventDefault(); // Prevent input blur!
								onValueChange((+value - step).toFixed(2).toString());
							}}
						>
							<ChevronDown size={10} strokeWidth={4} />
						</button>
					</div>
				)}

				{/* DropDown */}
				{dropDownOpen && anchorRect && (
					<DropDownListPortal
						open={dropDownOpen}
						anchorRect={anchorRect}
						width={triggerRef.current?.offsetWidth || 50}
						onClose={() => setDropDownOpen(false)}
					>
						<div 
							className={`
								absolute z-50 right-0 top-[1px] w-[50px] shadow-md 
								bg-white border border-gray-200
								transition-transform duration-300 ease-in-out opacity-100
							`}
							style={{
								animation: "slide 0.5s downwards",
								animationDelay: "0.5s",
							}}
						>
							{units.map(u => (
								<button
									key={u}
									onMouseDown={(e) => {
										e.stopPropagation();
										onUnitChange(u);
										setDropDownOpen(false);
									}}
									onMouseEnter={() => {
										setHoverItem(u);
									}}
									onMouseLeave={() => {
										setHoverItem("");
									}}
									className={`
										block w-full px-4 py-2 text-left text-xs
										${hoverItem === u ? "bg-gray-200" : "bg-transparent" } 
										${u === unit ? "bg-gray-50 font-semibold text-blue-600" : undefined }
									`}
								>
									{u}
								</button>
							))}
						</div>
					</DropDownListPortal>
				)}
			</div>
		</div>
	);

}