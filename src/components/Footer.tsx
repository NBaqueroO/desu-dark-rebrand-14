
import { Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/7a0ceaae-5c95-4828-92fe-bfc8d48f729f.png" 
                alt="De Su Futuro" 
                className="h-10 mb-4"
              />
              <p className="text-gray-300 leading-relaxed">
                Somos una agencia de marketing digital especializada en ayudar a las empresas 
                a alcanzar su máximo potencial en el mundo digital. Con metodologías innovadoras 
                y un equipo de expertos comprometidos con tu éxito.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/desufuturo/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-orange-500 p-3 rounded-lg transition-colors"
              >
                <img src="/lovable-uploads/de9184b9-c3ba-4695-bc64-2352f978acfc.png" alt="Instagram" className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCjKej9TBPmAM5SC5ykpPCig"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-orange-500 p-3 rounded-lg transition-colors"
              >
                <img src="/lovable-uploads/a87cf60f-929d-44c0-8d9c-2e03ed1f22f8.png" alt="YouTube" className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/desufuturo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-orange-500 p-3 rounded-lg transition-colors"
              >
                <img src="/lovable-uploads/81845d40-1a85-4c14-b99e-9080676203bc.png" alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Menu */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Menú</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://desufuturo.com" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="https://desufuturo.com/es/connect" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Connect
                </a>
              </li>
              <li>
                <a href="https://desufuturo.com/es/planeacion-financiera" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Planeación Financiera
                </a>
              </li>
              <li>
                <a href="https://desufuturo.com/es/marketing" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Estrategias de Marketing
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Contenido Visual
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Email Marketing
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-orange-500 transition-colors">
                  WhatsApp Business
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-orange-500 transition-colors">
                  LinkedIn Marketing
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Google & Facebook Ads
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 De Su Futuro. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
