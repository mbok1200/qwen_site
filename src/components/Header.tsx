import React from "react";
import { useCart } from "../context/CartContext";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onCartClick: () => void;
  onLogoClick: () => void;
}

export default function Header({
  searchQuery,
  onSearchChange,
  onCartClick,
  onLogoClick,
}: HeaderProps) {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={onLogoClick}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="text-2xl sm:text-3xl">☕</span>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-amber-50 tracking-tight group-hover:text-amber-200 transition-colors">
                Artisan Coffee
              </h1>
              <p className="text-xs text-amber-300 -mt-0.5">
                Specialty Roasters
              </p>
            </div>
          </button>

          {/* Search */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search coffees..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-amber-950/50 border border-amber-700/50 text-amber-50 placeholder-amber-400/60 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all text-sm"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-amber-700/50 hover:bg-amber-600/50 border border-amber-600/30 text-amber-50 transition-all cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
              />
            </svg>
            <span className="hidden sm:inline text-sm font-medium">Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
