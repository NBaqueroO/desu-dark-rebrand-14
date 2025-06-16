
import { Instagram, Youtube, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">desu</span>
              <span className="text-orange-500">futuro</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transformamos tu presencia digital con estrategias innovadoras de marketing.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/desufuturo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCjKej9TBPmAM5SC5ykpPCig" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/desufuturo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Estrategias y embudos de ventas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Creación de contenido visual</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Email marketing y CRM</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">WhatsApp Business</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Expertos en LinkedIn</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#nosotros" className="text-gray-400 hover:text-orange-500 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Nuestro Equipo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Casos de Éxito</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Blog</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-orange-500 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-orange-500" />
                <span className="text-gray-400">hola@desufuturo.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-orange-500" />
                <span className="text-gray-400">+57 (300) 123-4567</span>
              </div>
            </div>
            <div className="mt-6">
              <h5 className="text-white font-medium mb-2">Newsletter</h5>
              <p className="text-gray-400 text-sm mb-3">Recibe tips de marketing digital</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="bg-gray-800 border border-gray-600 rounded-l-lg px-3 py-2 text-white text-sm flex-1 focus:border-orange-500 focus:outline-none"
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-lg transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2021 desufuturo - All rights reserved
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Política de tratamiento de datos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
