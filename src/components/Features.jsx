import { BookOpen, Brain, Shield, Wand2 } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: BookOpen,
      title: "Joyful Learning",
      desc: "Stories that teach through play, with bite-sized chapters perfect for short attention spans.",
    },
    {
      icon: Brain,
      title: "Skill-Building",
      desc: "Encourages reading, empathy, creativity, and problem-solving with age-aligned content.",
    },
    {
      icon: Shield,
      title: "Safe & Kind",
      desc: "No scary surprises. Gentle themes, positive role models, and parent-friendly content.",
    },
    {
      icon: Wand2,
      title: "Vivid & Interactive",
      desc: "Text-first design with light interactivity to keep curious minds engaged—no heavy images.",
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-amber-900">
            Built for bright young readers
          </h2>
          <p className="mt-3 text-amber-700">
            A collection crafted with care for kids under 13—fun, meaningful, and developmentally appropriate.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group bg-white/80 backdrop-blur rounded-2xl p-6 ring-1 ring-amber-200 shadow-sm hover:shadow-md transition-all">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-amber-900">{title}</h3>
              <p className="mt-2 text-amber-700 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
