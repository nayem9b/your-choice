import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductSectionProps {
  title: string;
  products: Product[];
  viewMoreLink?: string;
}

export default function ProductSection({
  title,
  products,
  viewMoreLink = "/",
}: ProductSectionProps) {
  return (
    <section className="max-w-[1400px] mx-auto px-5 lg:px-8 py-10 lg:py-14">
      <div className="flex items-end justify-between mb-8 lg:mb-10">
        <div>
          <h2 className="font-display font-black text-2xl lg:text-3xl uppercase tracking-tight text-foreground">
            {title}
          </h2>
          <div className="mt-2 h-[3px] w-12 bg-foreground rounded-full" />
        </div>
        <a
          href={viewMoreLink}
          className="hidden sm:inline-flex items-center gap-2 font-sans text-[13px] font-semibold tracking-[0.05em] uppercase text-foreground/60 hover:text-foreground transition-colors group"
        >
          View All
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-8 lg:mt-10 flex justify-center sm:hidden">
        <a
          href={viewMoreLink}
          className="inline-flex items-center gap-2 bg-foreground text-white font-sans font-bold text-[13px] tracking-[0.08em] uppercase px-10 py-3.5 rounded-full hover:bg-foreground/80 transition-all btn-shine"
        >
          View More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
