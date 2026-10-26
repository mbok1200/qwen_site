import React from "react";
import { categories } from "../data/products";

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilter({
  selected,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
            selected === cat
              ? "bg-amber-800 text-amber-50 shadow-md"
              : "bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200/50"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
