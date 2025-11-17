import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-200">
            <Sparkles size={14} />
            Curated for curious minds
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
            Imaginative eBooks for kids under 13
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Dive into a world of captivating stories, playful learning, and safe exploration. Our collection is designed to be age-appropriate, engaging, and screen-time friendly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "wholesome",
              "imaginative",
              "interactive",
              "vibrant",
              "uplifting",
              "screen-smart",
              "educational",
              "age-appropriate",
              "gentle",
              "delightful",
              "curiosity-sparking",
              "parent-approved",
            ].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-white text-gray-700 px-3 py-1 text-sm font-medium ring-1 ring-gray-200 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-10 flex gap-3">
            <a
              href="https://xebel76.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Explore Xebel
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-6 py-3 text-base font-semibold shadow-md ring-1 ring-gray-200 hover:ring-gray-300"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-indigo-500/10 blur-2xl rounded-3xl" />
          <div className="relative bg-white/80 backdrop-blur rounded-3xl ring-1 ring-gray-200 p-4 sm:p-6 shadow-xl">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 ring-1 ring-gray-200 shadow-sm flex items-center justify-center text-gray-700 font-semibold">
                  Story {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
