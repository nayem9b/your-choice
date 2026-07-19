"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openCart, getItemCount } = useCart();
  const count = getItemCount();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Shop", href: "#anime-jerseys" },
    { label: "New Arrivals", href: "#acid-wash" },
    { label: "Bestsellers", href: "#bestsellers" },
    { label: "Custom Design", href: "#custom-design" },
    { label: "About", href: "#value-props" },
  ];

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-black/5 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
          : "bg-white"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="relative z-10">
            <span className="font-display font-black text-xl lg:text-2xl tracking-[0.15em] text-foreground">
              VAIVENE
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative font-sans text-[13px] font-semibold tracking-[0.1em] uppercase text-foreground/70 hover:text-foreground transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-foreground group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 relative z-10">
            <button
              onClick={openCart}
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface transition-colors relative"
              aria-label="Open cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {count > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-accent text-white text-[9px] font-sans font-bold w-4 h-4 rounded-full flex items-center justify-center animate-fade-in">
                  {count}
                </span>
              )}
            </button>
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col gap-[5px]">
                <span className={`block h-[2px] bg-foreground transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
                <span className={`block h-[2px] bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-[2px] bg-foreground transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80" : "max-h-0"}`}>
        <nav className="px-5 pb-6 pt-2 flex flex-col gap-1 border-t border-border">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-sm font-semibold tracking-[0.05em] uppercase text-foreground/80 py-3 border-b border-border/50 hover:text-foreground transition-colors"
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Category slider */}
      <div className="border-t border-border/50 overflow-x-auto no-scrollbar">
        <div className="flex gap-5 px-5 lg:px-8 py-4 max-w-[1400px] mx-auto">
          {categories.map((cat) => (
            <a
              key={cat.slug}
              href={`#${cat.sectionId}`}
              className="flex-shrink-0 group text-center"
            >
              <div className="relative w-20 h-20 lg:w-28 lg:h-28 rounded-2xl overflow-hidden ring-1 ring-black/5">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="mt-2.5 text-[11px] lg:text-xs font-sans font-semibold text-foreground/70 tracking-wide uppercase w-20 lg:w-28">
                {cat.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
