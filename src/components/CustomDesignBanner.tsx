import Link from "next/link";

export default function CustomDesignBanner() {
  return (
    <section className="max-w-[1400px] mx-auto px-5 lg:px-8 py-6 lg:py-8">
      <div className="relative bg-foreground rounded-3xl px-8 py-16 md:py-20 text-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-6 left-8 w-16 h-16 border border-white/10 rounded-full" />
        <div className="absolute bottom-8 right-10 w-24 h-24 border border-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white/15 rounded-full animate-float delay-300" />

        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-white/40 font-medium mb-4">
          Custom Orders Welcome
        </p>
        <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-[1.1]">
          Make a Custom Design
        </h2>
        <p className="mt-5 font-serif text-base md:text-lg text-white/50 max-w-lg mx-auto leading-relaxed">
          Have a design? We will print it premium on your favorite tee.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-white text-foreground font-sans font-bold text-[13px] tracking-[0.1em] uppercase px-10 py-4 rounded-full hover:bg-white/90 transition-all duration-300 btn-shine"
          >
            Let&apos;s Do It
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
