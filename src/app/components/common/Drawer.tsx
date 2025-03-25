import { X } from "lucide-react";
import React, { useState } from "react";

export default function Drawer({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState("Basic haircut");

  const categories = [
    "Basic haircut",
    "Coloring",
    "Treatment",
    "Massage",
    "Kids haircut",
  ];
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 w-full p-4 bg-white rounded-t-2xl transition-transform transform shadow-md ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="relative flex items-center justify-between">
        {/* Drawer Header */}
        <h5 className="inline-flex items-center text-lg font-semibold text-black">
          Filter
        </h5>

        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 bg-transparent text-sm w-8 h-8 flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="py-4 px-3 max-w-md">
        <h3 className="text-base font-bold text-black mb-3">
          General Category
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-full text-base font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-indigo-100 text-fuchsia-950 border border-fuchsia-950"
                  : "bg-white text-gray-500 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
