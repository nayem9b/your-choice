import Image from "next/image";
import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface GirlSquadProps {
  products: Product[];
}

export default function GirlSquadBanner({ products }: GirlSquadProps) {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="relative bg-pink rounded-lg overflow-hidden py-20 md:py-28 text-center">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/products/zerotwo-girls.svg"
              alt="Girl squad collection"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10">
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-black uppercase">
              For the Girls
            </h2>
            <p className="mt-4 font-serif text-base md:text-lg text-black/70 max-w-lg mx-auto px-4">
              Anime inspired styles made for the girls who wear what they love.
            </p>
            <div className="mt-6">
              <a
                href="/"
                className="inline-block bg-white text-black font-sans font-bold text-sm tracking-wide uppercase px-8 py-3 border border-black hover:bg-black hover:text-white transition-colors"
              >
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
