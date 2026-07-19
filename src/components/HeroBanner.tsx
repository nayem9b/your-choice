import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="max-w-[1400px] mx-auto px-5 lg:px-8 py-6 lg:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
        {/* Left: Dark theme */}
        <div className="relative bg-[#0f0f0f] rounded-3xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[520px] group">
          <Image
            src="https://placehold.co/800x600/0f0f0f/333333?text=%F0%9F%94%B5+ZIP+UP+HOODIE&font=montserrat"
            alt="Streetwear zip-up hoodie"
            fill
            className="object-cover opacity-50 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-white/50 font-medium mb-3 animate-fade-in-up">
              New Collection 2025
            </p>
            <h2 className="font-display font-black text-3xl lg:text-[2.8rem] text-white leading-[1.05] uppercase tracking-tight animate-fade-in-up delay-100">
              Style That<br />Speaks Before<br />You Do.
            </h2>
            <div className="mt-7 animate-fade-in-up delay-200">
              <Link
                href="/"
                className="inline-flex items-center gap-3 bg-white text-black font-sans font-bold text-[13px] tracking-[0.1em] uppercase px-8 py-3.5 rounded-full hover:bg-white/90 transition-all duration-300 btn-shine"
              >
                Shop now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Light beige theme */}
        <div className="relative bg-[#f5f0eb] rounded-3xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[520px] group">
          <Image
            src="https://placehold.co/800x600/f5f0eb/c4a882?text=%F0%9F%94%B5+GRAPHIC+TEE&font=montserrat"
            alt="Graphic tee streetwear"
            fill
            className="object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f5f0eb]/90 via-transparent to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-foreground/40 font-medium mb-3 animate-fade-in-up">
              Everyday Essentials
            </p>
            <div className="space-y-1 animate-fade-in-up delay-100">
              <p className="font-sans font-bold text-lg lg:text-xl text-foreground uppercase tracking-tight leading-tight">
                Oversized Fit.
              </p>
              <p className="font-sans font-bold text-lg lg:text-xl text-foreground uppercase tracking-tight leading-tight">
                Effortless Style.
              </p>
              <p className="font-sans font-bold text-lg lg:text-xl text-foreground uppercase tracking-tight leading-tight">
                All Day Comfort.
              </p>
            </div>
            <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-foreground/40 mt-3 animate-fade-in-up delay-200">
              100% Cotton Relaxed Cut
            </p>
            <div className="mt-6 animate-fade-in-up delay-300">
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
    </section>
  );
}
