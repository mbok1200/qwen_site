import React from "react";
import { Product } from "../data/products";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
  onViewDetail: (product: Product) => void;
}

export default function ProductCard({
  product,
  onViewDetail,
}: ProductCardProps) {
  const { addToCart } = useCart();

  const roastColors: Record<string, string> = {
    Light: "bg-yellow-100 text-yellow-800",
    Medium: "bg-amber-100 text-amber-800",
    Dark: "bg-amber-900 text-amber-100",
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-amber-100/50 flex flex-col">
      {/* Image area */}
      <div
        className="relative h-48 sm:h-56 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center cursor-pointer overflow-hidden"
        onClick={() => onViewDetail(product)}
      >
        <span className="text-7xl sm:text-8xl group-hover:scale-110 transition-transform duration-300">
          {product.image}
        </span>
        <div className="absolute top-3 left-3">
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-semibold ${roastColors[product.roast]}`}
          >
            {product.roast} Roast
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/80 text-amber-800 backdrop-blur-sm">
            {product.weight}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className="text-lg font-bold text-amber-950 cursor-pointer hover:text-amber-700 transition-colors line-clamp-1"
            onClick={() => onViewDetail(product)}
          >
            {product.name}
          </h3>
          <span className="text-lg font-bold text-amber-700 whitespace-nowrap">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className="text-sm text-amber-700/70 mb-3">
          {product.origin} • {product.category}
        </p>

        {/* Flavor notes */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.flavorNotes.slice(0, 3).map((note) => (
            <span
              key={note}
              className="px-2 py-0.5 bg-amber-50 text-amber-700 text-xs rounded-full border border-amber-200/50"
            >
              {note}
            </span>
          ))}
          {product.flavorNotes.length > 3 && (
            <span className="px-2 py-0.5 text-amber-500 text-xs">
              +{product.flavorNotes.length - 3}
            </span>
          )}
        </div>

        {/* Add to cart */}
        <button
          onClick={() => addToCart(product)}
          className="mt-auto w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-600 hover:to-amber-700 text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer active:scale-[0.98]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
