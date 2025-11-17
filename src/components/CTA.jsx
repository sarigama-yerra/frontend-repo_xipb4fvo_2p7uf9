export default function CTA() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 p-8 sm:p-12 text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.15),transparent_35%)]" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Ready to spark imagination?
            </h2>
            <p className="mt-3 max-w-2xl text-white/90">
              Open the library and start exploring delightfully crafted eBooks designed for young readers.
            </p>
            <div className="mt-6">
              <a
                href="https://xebel76.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white text-blue-700 px-6 py-3 text-base font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/80"
              >
                Explore Xebel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
