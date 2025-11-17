export default function BackgroundDecor() {
  const items = [
    { emoji: "💕", top: "10%", left: "8%", delay: "0s", size: "text-5xl" },
    { emoji: "🍬", top: "18%", left: "75%", delay: "0.5s", size: "text-4xl" },
    { emoji: "💛", top: "35%", left: "20%", delay: "1s", size: "text-6xl" },
    { emoji: "🍭", top: "55%", left: "85%", delay: "1.5s", size: "text-5xl" },
    { emoji: "💖", top: "70%", left: "15%", delay: "0.8s", size: "text-4xl" },
    { emoji: "🍬", top: "78%", left: "60%", delay: "1.2s", size: "text-5xl" },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 [perspective:800px]">
        {items.map((it, idx) => (
          <span
            key={idx}
            className={`absolute ${it.size} select-none opacity-70 [text-shadow:0_6px_12px_rgba(0,0,0,0.15)] animate-float`}
            style={{ top: it.top, left: it.left, animationDelay: it.delay }}
            aria-hidden="true"
          >
            {it.emoji}
          </span>
        ))}
      </div>
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl" />
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg) translateZ(0); }
          50% { transform: translateY(-12px) rotate(4deg) translateZ(30px); }
          100% { transform: translateY(0) rotate(0deg) translateZ(0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
