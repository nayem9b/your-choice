import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface GirlSquadProps {
  products: Product[];
}

export default function GirlSquadBanner({ products }: GirlSquadProps) {
  return (
    <section>
      {/* Hero banner */}
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8 py-6 lg:py-8">
        <div className="relative bg-blush rounded-3xl overflow-hidden py-20 md:py-28 text-center">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://placehold.co/1200x400/fdf2f4/c2185b?text=%F0%9F%91%A7+ANIME+FOR+HER&font=montserrat"
              alt="Girl squad collection"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-blush/50 via-transparent to-blush/80" />
          <div className="relative z-10">
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-foreground/30 font-medium mb-4">
              Curated For Her
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-foreground uppercase tracking-tight">
              For the Girls
            </h2>
            <p className="mt-4 font-serif text-base md:text-lg text-foreground/50 max-w-lg mx-auto px-4 leading-relaxed">
              Anime inspired styles made for the girls who wear what they love.
            </p>
            <div className="mt-7">
              <Link
                href="/"
                className="inline-flex items-center gap-3 bg-foreground text-white font-sans font-bold text-[13px] tracking-[0.1em] uppercase px-8 py-3.5 rounded-full hover:bg-foreground/80 transition-all duration-300 btn-shine"
              >
                Shop now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8 pb-10 lg:pb-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
