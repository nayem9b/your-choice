"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      size: "M",
    });
  };

  return (
    <div className="group">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-surface rounded-2xl overflow-hidden card-hover">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover img-zoom"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
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
      </Link>
      <div className="mt-3 px-0.5">
        <button
          onClick={handleAddToCart}
          className="w-full bg-foreground text-white font-sans font-bold text-[11px] tracking-[0.08em] uppercase py-2.5 rounded-full hover:bg-foreground/80 transition-all btn-shine"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
