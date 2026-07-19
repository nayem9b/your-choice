"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/products";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <span className="font-display font-black text-2xl tracking-widest text-black">
              VAIVENE
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="font-sans text-sm font-bold tracking-wide uppercase text-black hover:text-slate-gray transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/"
              className="font-sans text-sm font-bold tracking-wide uppercase text-black hover:text-slate-gray transition-colors"
            >
              New Arrivals
            </Link>
            <Link
              href="/"
              className="font-sans text-sm font-bold tracking-wide uppercase text-black hover:text-slate-gray transition-colors"
            >
              Bestsellers
            </Link>
            <Link
              href="/"
              className="font-sans text-sm font-bold tracking-wide uppercase text-black hover:text-slate-gray transition-colors"
            >
              Custom Design
            </Link>
            <Link
              href="/"
              className="font-sans text-sm font-bold tracking-wide uppercase text-black hover:text-slate-gray transition-colors"
            >
              About
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center justify-center w-10 h-10 text-black hover:bg-light-gray rounded transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="hidden md:flex items-center justify-center w-10 h-10 text-black hover:bg-light-gray rounded transition-colors relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 text-black"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            <Link
              href="/"
              className="font-sans text-sm font-bold tracking-wide uppercase text-black py-2"
            >
              Shop
            </Link>
            <Link
              href="/"
              className="font-sans text-sm font-bold tracking-wide uppercase text-black py-2"
            >
              New Arrivals
            </Link>
            <Link
              href="/"
              className="font-sans text-sm font-bold tracking-wide uppercase text-black py-2"
            >
              Bestsellers
            </Link>
            <Link
              href="/"
              className="font-sans text-sm font-bold tracking-wide uppercase text-black py-2"
            >
              Custom Design
            </Link>
            <Link
              href="/"
              className="font-sans text-sm font-bold tracking-wide uppercase text-black py-2"
            >
              About
            </Link>
          </nav>
        </div>
      )}

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href="/"
              className="flex-shrink-0 group"
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-2 text-xs sm:text-sm font-serif text-center text-black w-24 sm:w-32">
                {cat.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
