import React, { useState, useMemo } from "react";
import { CartProvider } from "./context/CartContext";
import { products, Product } from "./data/products";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./components/ProductDetail";
import CategoryFilter from "./components/CategoryFilter";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

type Page = "home" | "detail" | "checkout";

function AppContent() {
  const [page, setPage] = useState<Page>("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.flavorNotes.some((note) =>
          note.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleViewDetail = (product: Product) => {
    setSelectedProduct(product);
    setPage("detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setPage("home");
    setSelectedProduct(null);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setPage("checkout");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOrderComplete = () => {
    setPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 to-orange-50/30">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onCartClick={() => setIsCartOpen(true)}
        onLogoClick={handleBackToHome}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {page === "home" && (
          <>
            {/* Hero Section */}
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-950 mb-4">
                Discover Exceptional
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600">
                  {" "}
                  Coffee
                </span>
              </h2>
              <p className="text-amber-700/80 text-lg max-w-2xl mx-auto">
                Hand-selected beans from the world's finest growing regions,
                roasted to perfection for an unforgettable cup.
              </p>
            </div>

            {/* Filters */}
            <div className="mb-8">
              <CategoryFilter
                selected={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetail={handleViewDetail}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <span className="text-6xl mb-4 block">🔍</span>
                <p className="text-xl font-medium text-amber-800 mb-2">
                  No coffees found
                </p>
                <p className="text-amber-600">
                  Try adjusting your search or filters.
                </p>
              </div>
            )}
          </>
        )}

        {page === "detail" && selectedProduct && (
          <ProductDetail product={selectedProduct} onBack={handleBackToHome} />
        )}

        {page === "checkout" && (
          <Checkout onBack={() => setIsCartOpen(true)} onComplete={handleOrderComplete} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-amber-50 text-lg mb-3 flex items-center gap-2">
                ☕ Artisan Coffee
              </h4>
              <p className="text-amber-300/80 text-sm leading-relaxed">
                Dedicated to sourcing and roasting the finest specialty coffees
                from around the world.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-amber-50 mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-amber-300/80">
                <li className="hover:text-amber-100 cursor-pointer transition-colors">
                  Our Story
                </li>
                <li className="hover:text-amber-100 cursor-pointer transition-colors">
                  Brewing Guides
                </li>
                <li className="hover:text-amber-100 cursor-pointer transition-colors">
                  Subscriptions
                </li>
                <li className="hover:text-amber-100 cursor-pointer transition-colors">
                  Wholesale
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-amber-50 mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-amber-300/80">
                <li>hello@artisancoffee.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Roastery Lane</li>
                <li>Portland, OR 97201</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-6 text-center text-sm text-amber-400/60">
            © 2026 Artisan Coffee. All rights reserved. Crafted with ❤️ and
            caffeine.
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      {isCartOpen && (
        <Cart onClose={() => setIsCartOpen(false)} onCheckout={handleCheckout} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
