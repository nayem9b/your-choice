"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, removeItem, updateQuantity, getTotal, getItemCount } =
    useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div>
            <h2 className="font-display font-bold text-lg text-foreground">Your Cart</h2>
            <p className="font-sans text-xs text-muted mt-0.5">
              {getItemCount()} {getItemCount() === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            onClick={closeCart}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-surface transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-border mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="font-sans font-semibold text-foreground text-sm">Your cart is empty</p>
              <p className="font-serif text-xs text-muted mt-1">Add some items to get started</p>
              <button
                onClick={closeCart}
                className="mt-6 font-sans text-[12px] font-semibold tracking-[0.08em] uppercase text-foreground border border-border rounded-full px-6 py-2.5 hover:bg-surface transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex gap-4 p-3 rounded-2xl border border-border/50 hover:border-border transition-colors"
                >
                  <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-surface flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-[13px] text-foreground leading-snug line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="font-sans text-[11px] text-muted mt-1">Size: {item.size}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-0 border border-border rounded-full">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.size, item.quantity - 1)
                          }
                          className="w-7 h-7 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors rounded-l-full"
                        >
                          −
                        </button>
                        <span className="w-8 text-center font-sans text-xs font-semibold text-foreground">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.size, item.quantity + 1)
                          }
                          className="w-7 h-7 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors rounded-r-full"
                        >
                          +
                        </button>
                      </div>
                      <p className="font-sans font-bold text-sm text-foreground">
                        Tk {(item.price * item.quantity).toLocaleString()}.00
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.size)}
                    className="self-start w-6 h-6 flex items-center justify-center text-muted/40 hover:text-accent transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-muted">Subtotal</span>
              <span className="font-sans font-bold text-lg text-foreground">
                Tk {getTotal().toLocaleString()}.00
              </span>
            </div>
            <p className="font-serif text-[11px] text-muted">
              Shipping &amp; taxes calculated at checkout
            </p>
            <button className="w-full bg-foreground text-white font-sans font-bold text-[13px] tracking-[0.08em] uppercase py-4 rounded-full hover:bg-foreground/80 transition-all btn-shine">
              Checkout — Tk {getTotal().toLocaleString()}.00
            </button>
            <button
              onClick={closeCart}
              className="w-full text-center font-sans text-[12px] font-semibold text-muted hover:text-foreground transition-colors py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
