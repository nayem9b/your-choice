import Image from "next/image";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] bg-light-gray rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.onSale && (
          <span className="absolute top-2 left-2 bg-black text-white text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
            Sale
          </span>
        )}
      </div>
      <div className="mt-3 px-1">
        <h3 className="font-serif text-sm text-black leading-snug line-clamp-2">
          {product.name}
        </h3>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="font-sans font-bold text-sm text-black">
            Tk {product.price.toLocaleString()}.00
          </span>
          {product.originalPrice && (
            <span className="font-sans text-sm text-slate-gray line-through">
              Tk {product.originalPrice.toLocaleString()}.00
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
