import { instagramPosts } from "@/data/products";

export default function InstagramFeed() {
  return (
    <section className="max-w-[1400px] mx-auto px-5 lg:px-8 py-14 lg:py-20">
      <div className="text-center mb-10 lg:mb-12">
        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-muted font-medium mb-3">
          @vaivene
        </p>
        <h2 className="font-display font-black text-2xl lg:text-3xl uppercase tracking-tight text-foreground">
          Follow us on Instagram
        </h2>
        <p className="mt-3 font-serif text-sm lg:text-base text-muted max-w-md mx-auto">
          Join our community for daily inspiration and a closer look at our
          creations
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 lg:gap-3">
        {instagramPosts.map((post) => (
          <div
            key={post.id}
            className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
          >
            <div
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundColor: post.color }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-sans text-white/40 text-[10px] tracking-[0.15em] uppercase font-medium group-hover:text-white/80 transition-colors duration-300">
                {post.label}
              </span>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white transform scale-75 group-hover:scale-100 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
