"use client";

export default function Newsletter() {
  return (
    <section className="max-w-[1400px] mx-auto px-5 lg:px-8 py-14 lg:py-20">
      <div className="bg-surface rounded-3xl px-8 py-14 md:py-16 text-center border border-border">
        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-muted font-medium mb-3">
          Stay in the Loop
        </p>
        <h2 className="font-display font-black text-2xl lg:text-3xl uppercase tracking-tight text-foreground">
          Join Our Newsletter
        </h2>
        <p className="mt-3 font-serif text-sm text-muted max-w-md mx-auto">
          Be the first to know about new drops, exclusive deals, and streetwear
          inspiration.
        </p>
        <form
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-white border border-border rounded-full px-6 py-3.5 font-sans text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all"
          />
          <button
            type="submit"
            className="bg-foreground text-white font-sans font-bold text-[13px] tracking-[0.08em] uppercase px-8 py-3.5 rounded-full hover:bg-foreground/80 transition-all btn-shine"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
