
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-white">desu</span>
              <span className="text-blue-400">futuro</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-300 hover:text-white transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-gray-300 hover:text-white transition-colors">
              Servicios
            </a>
            <a href="#nosotros" className="text-gray-300 hover:text-white transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="text-gray-300 hover:text-white transition-colors">
              Contacto
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              Consulta Gratis
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-300 hover:text-white transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-gray-300 hover:text-white transition-colors">
                Servicios
              </a>
              <a href="#nosotros" className="text-gray-300 hover:text-white transition-colors">
                Nosotros
              </a>
              <a href="#contacto" className="text-gray-300 hover:text-white transition-colors">
                Contacto
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors w-fit">
                Consulta Gratis
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
