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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="font-display font-black text-2xl md:text-3xl uppercase tracking-wide text-black mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <a
          href={viewMoreLink}
          className="block w-full max-w-md bg-black text-white font-sans font-bold text-sm tracking-wide uppercase text-center py-3.5 hover:bg-gray-800 transition-colors"
        >
          View More
        </a>
      </div>
    </section>
  );
}
