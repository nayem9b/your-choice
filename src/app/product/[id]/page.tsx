"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import {
  allProducts,
} from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;
  const product = allProducts.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="font-display font-bold text-2xl text-foreground">Product Not Found</h1>
          <p className="font-serif text-sm text-muted mt-2">
            The product you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-block mt-6 bg-foreground text-white font-sans font-bold text-[13px] tracking-[0.08em] uppercase px-8 py-3 rounded-full hover:bg-foreground/80 transition-all"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = allProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 5);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      size: selectedSize,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex-1">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8 py-4">
        <nav className="flex items-center gap-2 font-sans text-[12px] text-muted">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground/60 truncate max-w-[200px]">{product.name}</span>
        </nav>
      </div>

      {/* Product */}
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image */}
          <div className="relative aspect-[3/4] lg:aspect-auto lg:h-[700px] bg-surface rounded-3xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {product.onSale && (
              <span className="absolute top-4 left-4 bg-accent text-white text-[11px] font-sans font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                Sale
              </span>
            )}
            {product.tag && !product.onSale && (
              <span className="absolute top-4 left-4 bg-foreground text-white text-[11px] font-sans font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                {product.tag}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <h1 className="font-display font-black text-2xl md:text-3xl lg:text-4xl text-foreground uppercase tracking-tight leading-tight">
                  {product.name}
                </h1>
                <div className="mt-1 h-[3px] w-12 bg-foreground rounded-full" />
              </div>

              <div className="flex items-baseline gap-3">
                <span className="font-sans font-bold text-2xl text-foreground">
                  Tk {product.price.toLocaleString()}.00
                </span>
                {product.originalPrice && (
                  <span className="font-sans text-lg text-muted line-through">
                    Tk {product.originalPrice.toLocaleString()}.00
                  </span>
                )}
                {product.originalPrice && (
                  <span className="font-sans text-xs font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    Save Tk {(product.originalPrice - product.price).toLocaleString()}
                  </span>
                )}
              </div>

              <p className="font-serif text-sm text-muted leading-relaxed max-w-lg">
                Premium quality streetwear. Oversized drop shoulder fit. Made with 100% cotton
                heavyweight fabric. Designed for comfort and style.
              </p>

              {/* Size selector */}
              <div>
                <p className="font-sans text-[12px] font-semibold text-foreground/60 uppercase tracking-wider mb-3">
                  Size
                </p>
                <div className="flex flex-wrap gap-2">
                  {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[48px] h-11 rounded-xl font-sans text-[13px] font-semibold border transition-all duration-200 ${
                        selectedSize === size
                          ? "bg-foreground text-white border-foreground"
                          : "border-border text-foreground/60 hover:border-foreground/30"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <p className="font-serif text-[11px] text-muted mt-2">
                  Selected: <span className="font-semibold text-foreground">{selectedSize}</span>
                </p>
              </div>

              {/* Quantity */}
              <div>
                <p className="font-sans text-[12px] font-semibold text-foreground/60 uppercase tracking-wider mb-3">
                  Quantity
                </p>
                <div className="inline-flex items-center gap-0 border border-border rounded-xl">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-11 h-11 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors"
                  >
                    −
                  </button>
                  <span className="w-12 text-center font-sans text-sm font-semibold text-foreground">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-11 h-11 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 font-sans font-bold text-[13px] tracking-[0.08em] uppercase py-4 rounded-full transition-all duration-300 btn-shine ${
                    added
                      ? "bg-green-600 text-white"
                      : "bg-foreground text-white hover:bg-foreground/80"
                  }`}
                >
                  {added ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Added to Cart
                    </span>
                  ) : (
                    "Add to Cart"
                  )}
                </button>
                <button className="w-14 h-14 flex items-center justify-center border border-border rounded-full text-foreground/40 hover:text-accent hover:border-accent/30 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Extra info */}
              <div className="border-t border-border pt-6 space-y-3">
                {[
                  { icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12", label: "Nationwide Delivery" },
                  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Premium Quality Guarantee" },
                  { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", label: "7-Day Easy Returns" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                    <span className="font-serif text-[13px] text-muted">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-20 lg:mt-28">
            <h2 className="font-display font-black text-2xl lg:text-3xl uppercase tracking-tight text-foreground mb-2">
              You May Also Like
            </h2>
            <div className="mt-2 h-[3px] w-12 bg-foreground rounded-full mb-8 lg:mb-10" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
