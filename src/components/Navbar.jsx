import { ExternalLink } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-600 shadow"></div>
          <span className="text-lg font-semibold tracking-tight text-amber-900">Xebel Kids eBooks</span>
        </div>
        <nav className="flex items-center gap-3">
          <a
            href="https://xebel76.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-2 text-sm font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            aria-label="Explore Xebel"
          >
            Explore Xebel
            <ExternalLink size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
