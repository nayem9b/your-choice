const instagramPosts = [
  { id: 1, color: "#1a1a2e", label: "Reel" },
  { id: 2, color: "#2c3e50", label: "Print" },
  { id: 3, color: "#e94560", label: "Fabric" },
  { id: 4, color: "#0f3460", label: "Lookbook" },
  { id: 5, color: "#533483", label: "Reel" },
  { id: 6, color: "#16a085", label: "Process" },
  { id: 7, color: "#e67e22", label: "Fan" },
  { id: 8, color: "#2980b9", label: "Reel" },
  { id: 9, color: "#8e44ad", label: "Fabric" },
  { id: 10, color: "#c0392b", label: "Lookbook" },
];

export default function InstagramFeed() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h2 className="font-display font-black text-2xl md:text-3xl uppercase tracking-wide text-black">
          Follow us on Instagram
        </h2>
        <p className="mt-2 font-serif text-slate-gray">
          Join our community for daily inspiration and a closer look at our
          creations
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {instagramPosts.map((post) => (
          <div
            key={post.id}
            className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
          >
            <div
              className="absolute inset-0"
              style={{ backgroundColor: post.color }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-sans text-white/60 text-xs uppercase tracking-wider">
                {post.label}
              </span>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
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
