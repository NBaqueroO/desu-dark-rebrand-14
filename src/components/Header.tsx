import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigationLinks = [
  { label: "Inicio", href: "https://desufuturo.com" },
  { label: "Connect", href: "https://desufuturo.com/es/connect" },
  { label: "Marketing", href: "https://desufuturo.com/es/marketing" },
];

interface HeaderProps {
  isVisible?: boolean;
}

const Header = ({ isVisible = true }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const linkAnimationClass = isVisible ? "nav-link-enter" : "opacity-0";

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 shadow-lg shadow-black/10 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-[4.5rem] items-center justify-between">
          <a
            href="https://desufuturo.com"
            className="flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            aria-label="De Su Futuro, inicio"
          >
            <img
              src="/es/marketing/lovable-uploads/7a0ceaae-5c95-4828-92fe-bfc8d48f729f.png"
              alt="De Su Futuro"
              className="h-9"
            />
          </a>

          <nav aria-label="Navegación principal" className="hidden items-center gap-1 md:flex">
            {navigationLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                style={{ animationDelay: `${index * 100}ms` }}
                className={`${linkAnimationClass} rounded-full px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              style={{ animationDelay: `${navigationLinks.length * 100}ms` }}
              className={`${linkAnimationClass} ml-3 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-colors hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black`}
            >
              Hablemos
            </a>
          </nav>

          <button
            type="button"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-gray-200 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Navegación móvil"
            className="border-t border-white/10 bg-black/95 py-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navigationLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className={`${linkAnimationClass} rounded-lg px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                style={{ animationDelay: `${navigationLinks.length * 100}ms` }}
                className={`${linkAnimationClass} mt-2 rounded-full bg-orange-500 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                Hablemos
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
