import React from "react";
import { Product } from "../data/products";
import { useCart } from "../context/CartContext";

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export default function ProductDetail({ product, onBack }: ProductDetailProps) {
  const { addToCart } = useCart();

  const roastColors: Record<string, string> = {
    Light: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Medium: "bg-amber-100 text-amber-800 border-amber-200",
    Dark: "bg-amber-900 text-amber-100 border-amber-700",
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-amber-700 hover:text-amber-900 mb-6 transition-colors cursor-pointer group"
      >
        <svg
          className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span className="font-medium">Back to Products</span>
      </button>

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-amber-100/50">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="h-64 sm:h-80 md:h-full bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center relative">
            <span className="text-[120px] sm:text-[150px]">
              {product.image}
            </span>
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                {product.category}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold border ${roastColors[product.roast]}`}
              >
                {product.roast} Roast
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-amber-950 mb-2">
              {product.name}
            </h1>

            <p className="text-amber-600 font-medium mb-4">
              Origin: {product.origin} • {product.weight}
            </p>

            <p className="text-amber-800/80 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Flavor notes */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-amber-900 uppercase tracking-wider mb-2">
                Flavor Notes
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.flavorNotes.map((note) => (
                  <span
                    key={note}
                    className="px-3 py-1.5 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 text-sm rounded-full border border-amber-200/50 font-medium"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Price and Add to Cart */}
            <div className="mt-auto flex items-center justify-between pt-4 border-t border-amber-100">
              <div>
                <p className="text-sm text-amber-600">Price</p>
                <p className="text-3xl font-bold text-amber-900">
                  ${product.price.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => {
                  addToCart(product);
                }}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-600 hover:to-amber-700 text-white font-semibold transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer active:scale-[0.97]"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
