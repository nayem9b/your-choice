export default function CustomDesignBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-black rounded-lg px-8 py-16 md:py-20 text-center">
        <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-wide">
          Make a Custom Design
        </h2>
        <p className="mt-4 font-serif text-lg text-gray-300 max-w-xl mx-auto">
          Have a design? We will print it premium on your favorite tee.
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="inline-block bg-white text-black font-sans font-bold text-sm tracking-wide uppercase px-10 py-3.5 hover:bg-gray-200 transition-colors"
          >
            Let&apos;s Do It
          </a>
        </div>
      </div>
    </section>
  );
}
