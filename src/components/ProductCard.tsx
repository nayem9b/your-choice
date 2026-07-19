import Image from "next/image";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] bg-surface rounded-2xl overflow-hidden card-hover">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover img-zoom"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

        {/* Quick action buttons on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-3 flex gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="flex-1 bg-white/95 backdrop-blur-sm text-foreground font-sans font-bold text-[11px] tracking-[0.08em] uppercase py-2.5 rounded-xl hover:bg-white transition-colors">
            Quick View
          </button>
          <button className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.onSale && (
            <span className="bg-accent text-white text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Sale
            </span>
          )}
          {product.tag && !product.onSale && (
            <span className="bg-foreground text-white text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              {product.tag}
            </span>
          )}
        </div>
      </div>

      <div className="mt-3.5 px-0.5">
        <h3 className="font-serif text-[13px] text-foreground/80 leading-[1.4] line-clamp-2 group-hover:text-foreground transition-colors">
          {product.name}
        </h3>
        <div className="mt-2 flex items-baseline gap-2.5">
          <span className="font-sans font-bold text-sm text-foreground">
            Tk {product.price.toLocaleString()}.00
          </span>
          {product.originalPrice && (
            <span className="font-sans text-[13px] text-muted line-through">
              Tk {product.originalPrice.toLocaleString()}.00
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
