import React from "react";
import { useCart } from "../context/CartContext";

interface CartProps {
  onClose: () => void;
  onCheckout: () => void;
}

export default function Cart({ onClose, onCheckout }: CartProps) {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div className="relative ml-auto w-full max-w-md bg-white shadow-2xl flex flex-col h-full animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-amber-100">
          <h2 className="text-xl font-bold text-amber-950 flex items-center gap-2">
            <svg
              className="w-6 h-6 text-amber-700"
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
            Your Cart
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-amber-50 text-amber-700 transition-colors cursor-pointer"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <span className="text-6xl mb-4">🛒</span>
              <p className="text-amber-800 font-medium text-lg">
                Your cart is empty
              </p>
              <p className="text-amber-600 text-sm mt-1">
                Add some delicious coffee!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 bg-amber-50/50 rounded-xl border border-amber-100/50"
                >
                  {/* Product image */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-100 to-orange-50 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">{item.product.image}</span>
                  </div>

                  {/* Product info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-amber-950 text-sm truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-amber-600 text-sm">
                      ${item.product.price.toFixed(2)} each
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.quantity - 1
                          )
                        }
                        className="w-7 h-7 rounded-full bg-white border border-amber-200 flex items-center justify-center text-amber-700 hover:bg-amber-100 transition-colors cursor-pointer text-sm font-bold"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-semibold text-amber-900 text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.quantity + 1
                          )
                        }
                        className="w-7 h-7 rounded-full bg-white border border-amber-200 flex items-center justify-center text-amber-700 hover:bg-amber-100 transition-colors cursor-pointer text-sm font-bold"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="ml-auto p-1 text-red-400 hover:text-red-600 transition-colors cursor-pointer"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-amber-900">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-amber-100 bg-amber-50/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-amber-700 font-medium">Total</span>
              <span className="text-2xl font-bold text-amber-900">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-600 hover:to-amber-700 text-white font-semibold transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer active:scale-[0.98]"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
