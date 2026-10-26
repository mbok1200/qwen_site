import React, { useState } from "react";
import { useCart } from "../context/CartContext";

interface CheckoutProps {
  onBack: () => void;
  onComplete: () => void;
}

export default function Checkout({ onBack, onComplete }: CheckoutProps) {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<"form" | "processing" | "success">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("processing");
    // Simulate processing
    setTimeout(() => {
      setStep("success");
      clearCart();
    }, 2500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (step === "processing") {
    return (
      <div className="max-w-lg mx-auto text-center py-20">
        <div className="animate-spin w-16 h-16 border-4 border-amber-200 border-t-amber-700 rounded-full mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-amber-900 mb-2">
          Processing your order...
        </h2>
        <p className="text-amber-600">
          Please wait while we prepare your coffee.
        </p>
      </div>
    );
  }

  if (step === "success") {
    return (
      <div className="max-w-lg mx-auto text-center py-20">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-amber-900 mb-2">
          Order Confirmed! 🎉
        </h2>
        <p className="text-amber-600 mb-2">
          Thank you for your purchase!
        </p>
        <p className="text-amber-500 text-sm mb-8">
          Your specialty coffee is being freshly roasted and will be on its way
          soon. A confirmation email has been sent.
        </p>
        <button
          onClick={onComplete}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-600 hover:to-amber-700 text-white font-semibold transition-all duration-200 shadow-md cursor-pointer"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
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
        <span className="font-medium">Back to Cart</span>
      </button>

      <h1 className="text-3xl font-bold text-amber-950 mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
          {/* Shipping Info */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100/50">
            <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold">
                1
              </span>
              Shipping Information
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-amber-800 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 outline-none transition-all text-amber-900"
                  placeholder="John Doe"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-amber-800 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 outline-none transition-all text-amber-900"
                  placeholder="john@example.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-amber-800 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 outline-none transition-all text-amber-900"
                  placeholder="123 Coffee Lane"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-1">
                  City
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 outline-none transition-all text-amber-900"
                  placeholder="Portland"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-1">
                  ZIP Code
                </label>
                <input
                  type="text"
                  required
                  value={formData.zip}
                  onChange={(e) => handleChange("zip", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 outline-none transition-all text-amber-900"
                  placeholder="97201"
                />
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100/50">
            <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold">
                2
              </span>
              Payment Details
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-amber-800 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  required
                  value={formData.cardNumber}
                  onChange={(e) => handleChange("cardNumber", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 outline-none transition-all text-amber-900"
                  placeholder="4242 4242 4242 4242"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-1">
                  Expiry Date
                </label>
                <input
                  type="text"
                  required
                  value={formData.expiry}
                  onChange={(e) => handleChange("expiry", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 outline-none transition-all text-amber-900"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-800 mb-1">
                  CVV
                </label>
                <input
                  type="text"
                  required
                  value={formData.cvv}
                  onChange={(e) => handleChange("cvv", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-amber-200 focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 outline-none transition-all text-amber-900"
                  placeholder="123"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-600 hover:to-amber-700 text-white font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer active:scale-[0.98]"
          >
            Place Order — ${totalPrice.toFixed(2)}
          </button>
        </form>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100/50 sticky top-24">
            <h3 className="text-lg font-bold text-amber-900 mb-4">
              Order Summary
            </h3>
            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-3"
                >
                  <span className="text-xl">{item.product.image}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-amber-900 truncate">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-amber-600">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-amber-800">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-amber-100 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-amber-600">Subtotal</span>
                <span className="text-amber-800">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-amber-600">Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-amber-100">
                <span className="text-amber-900">Total</span>
                <span className="text-amber-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
