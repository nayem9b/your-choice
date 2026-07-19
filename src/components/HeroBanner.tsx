import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative bg-[#1a1a1a] rounded-lg overflow-hidden aspect-[4/3] md:aspect-auto md:h-[420px]">
          <Image
            src="/products/zoro-hoodie.svg"
            alt="Streetwear zip-up hoodie"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12">
            <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white leading-tight uppercase">
              Style That Speaks Before You Do.
            </h2>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-block bg-white text-black font-sans font-bold text-sm tracking-wide uppercase px-8 py-3 hover:bg-gray-200 transition-colors"
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>

        <div className="relative bg-[#f0ebe3] rounded-lg overflow-hidden aspect-[4/3] md:aspect-auto md:h-[420px]">
          <Image
            src="/products/luffy-jersey.svg"
            alt="Graphic tee streetwear"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12">
            <p className="font-sans font-bold text-sm md:text-base text-black/70 uppercase tracking-wider leading-relaxed">
              Oversized Fit. Effortless Style. All Day Comfort. 100% Cotton
              Relaxed Cut.
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-block bg-white text-black font-sans font-bold text-sm tracking-wide uppercase px-8 py-3 border border-black hover:bg-black hover:text-white transition-colors"
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
