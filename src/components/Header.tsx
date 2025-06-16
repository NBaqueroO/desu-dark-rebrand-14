
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/7a0ceaae-5c95-4828-92fe-bfc8d48f729f.png" 
              alt="De Su Futuro" 
              className="h-8"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="https://desufuturo.com" className="text-gray-700 hover:text-orange-500 transition-colors">
              Inicio
            </a>
            <a href="https://desufuturo.com/es/connect" className="text-gray-700 hover:text-orange-500 transition-colors">
              Connect
            </a>
            <a href="https://desufuturo.com/es/planeacion-financiera" className="text-gray-700 hover:text-orange-500 transition-colors">
              Planeación Financiera
            </a>
            <a href="https://desufuturo.com/es/marketing" className="text-gray-700 hover:text-orange-500 transition-colors">
              Marketing
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-orange-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="https://desufuturo.com" className="text-gray-700 hover:text-orange-500 transition-colors">
                Inicio
              </a>
              <a href="https://desufuturo.com/es/connect" className="text-gray-700 hover:text-orange-500 transition-colors">
                Connect
              </a>
              <a href="https://desufuturo.com/es/planeacion-financiera" className="text-gray-700 hover:text-orange-500 transition-colors">
                Planeación Financiera
              </a>
              <a href="https://desufuturo.com/es/marketing" className="text-gray-700 hover:text-orange-500 transition-colors">
                Marketing
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
