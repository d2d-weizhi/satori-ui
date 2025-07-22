import { Eye, Waves, MousePointerClick } from "lucide-react";

const philosophies = [
  {
    title: "Clarity & Focus",
    icon: <Eye className="w-8 h-8 text-blue-400 mb-2" />,
    description:
      "No clutter. No unwanted distractions. Every element on the screen serves a clear purpose, helping you focus on what matters most.",
  },
  {
    title: "Smooth Flow",
    icon: <Waves className="w-8 h-8 text-blue-400 mb-2" />,
    description:
      "A UI that works with you and for you. Every interaction feels natural and fluid, minimizing friction and maximizing momentum.",
  },
  {
    title: "Simplicity",
    icon: <MousePointerClick className="w-8 h-8 text-blue-400 mb-2" />,
    description:
      "Turning complex tasks into simple interactions. Thoughtful design choices ensure even advanced features feel intuitive.",
  },
];

export default function DesignPhilosophy() {
  return (
    <div className="w-full flex justify-center mb-8">
      <div className="sm:w-[60%] w-[70%] grid grid-cols-1 md:grid-cols-3 gap-6">
        {philosophies.map((item) => (
          <div
            key={item.title}
            className="bg-white px-6 py-6 flex flex-col items-center border border-gray-200 rounded-md"
          >
            {item.icon}
            <div className="text-lg font-semibold mb-2 text-gray-800 text-center">
              {item.title}
            </div>
            <div className="text-gray-600 text-center text-sm">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}