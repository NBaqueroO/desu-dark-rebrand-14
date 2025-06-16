
import { Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

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
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCjKej9TBPmAM5SC5ykpPCig"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-orange-500 p-3 rounded-lg transition-colors"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/desufuturo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-orange-500 p-3 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
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

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">info@desufuturo.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">+57 (300) 000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">Medellín, Colombia</span>
              </li>
            </ul>

            <div className="mt-6">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Consulta Gratis
              </button>
            </div>
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
