
import { ArrowRight, Play, ChevronDown, MessageCircle, User } from "lucide-react";
import { useEffect, useState } from "react";
import { getMiPerfil, isLoggedIn, getUserFromToken } from "@/lib/api";

const HeroSection = () => {
  const [greeting, setGreeting] = useState("¡Hola! ....");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Función para corregir problemas de encoding y normalizar el nombre
  const cleanName = (name: string): string => {
    // Mapa para corregir caracteres mal codificados (UTF-8 interpretado como Latin-1)
    const encodingFixes: { [key: string]: string } = {
      'Ã¡': 'á', 'Ã©': 'é', 'Ã­': 'í', 'Ã³': 'ó', 'Ãº': 'ú',
      'Ã\u0081': 'Á', 'Ã\u0089': 'É', 'Ã\u008D': 'Í', 'Ã\u0093': 'Ó', 'Ã\u009A': 'Ú',
      'Ã±': 'ñ', 'Ã\u0091': 'Ñ', 'Ã§': 'ç', 'Ã\u0087': 'Ç'
    };
    
    let correctedName = name;
    
    // Corregir encoding primero
    Object.keys(encodingFixes).forEach(badChar => {
      correctedName = correctedName.replace(new RegExp(badChar, 'g'), encodingFixes[badChar]);
    });
    
    return correctedName
      .normalize("NFC") // Normalización de forma compuesta
      .replace(/[^\p{L}\s]/gu, "") // Mantiene letras con acentos y espacios
      .replace(/\s+/g, " ") // Normaliza espacios múltiples
      .trim();
  };

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        // Primero verificar si hay usuario logueado
        if (!isLoggedIn()) {
          console.log("Usuario no logueado");
          return;
        }

        // Intentar obtener nombre desde el token primero (más rápido)
        const userFromToken = getUserFromToken();
        if (userFromToken && userFromToken.nombre) {
          const cleanedName = cleanName(userFromToken.nombre);
          const firstName = cleanedName.split(' ')[0];
          setGreeting(`¡Hola ${firstName}!`);
          return;
        }

        // Si no hay nombre en el token, hacer request completo
        const profile = await getMiPerfil();
        if (profile && profile.nombre) {
          // Extraer solo el primer nombre y limpiarlo
          const cleanedName = cleanName(profile.nombre);
          const firstName = cleanedName.split(' ')[0];
          setGreeting(`¡Hola ${firstName}!`);
        }
      } catch (error) {
        // Si hay error (no logueado o token inválido), mantener saludo genérico
        console.log("Usuario no logueado o error al obtener perfil:", error);
      }
    };

    loadUserProfile();
  }, []);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-950 via-black to-gray-950 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fb923c%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              <span className="mb-3 block text-lg font-medium text-gray-300 sm:text-xl">
                {greeting}
              </span>
              <span className="text-white">¿Quieres </span>
              <span className="text-orange-500">aumentar tus ventas</span>
              <span className="text-white"> y conseguir más clientes?</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Nuestro propósito es claro: ayudar a su empresa a construir relaciones sólidas, abrir nuevas 
              oportunidades, incrementar sus ventas y fidelizar clientes.
              Juntos, hacemos que su empresa no solo crezca, sino que deje una huella duradera.
            </p>  

            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
              {/* Dropdown de Contacto */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  Contáctanos
                  <ChevronDown size={20} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Menú desplegable */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-gray-900 rounded-lg shadow-xl border border-gray-700 z-50 backdrop-blur-sm">
                    <div className="p-2">
                      {/* Jose Baquero */}
                      <div className="border-b border-gray-700 pb-2 mb-2">
                        <h4 className="text-sm font-semibold text-orange-400 px-3 py-1">Jose Baquero</h4>
                        <div className="flex flex-col gap-1">
                          <a
                            href="https://api.whatsapp.com/message/RSNTVY25V4KMB1?autoload=1&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:bg-green-500/20 hover:text-green-400 rounded-md transition-colors"
                          >
                            <MessageCircle size={16} className="text-green-500" />
                            <span className="text-sm">WhatsApp</span>
                          </a>
                          <a
                            href="https://desufuturo.com/jose-baquero/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:bg-orange-500/20 hover:text-orange-400 rounded-md transition-colors"
                          >
                            <User size={16} className="text-orange-500" />
                            <span className="text-sm">¿Quién soy?</span>
                          </a>
                        </div>
                      </div>

                      {/* Yeimi Pedraza */}
                      <div>
                        <h4 className="text-sm font-semibold text-orange-400 px-3 py-1">Yeimi Pedraza</h4>
                        <div className="flex flex-col gap-1">
                          <a
                            href="https://api.whatsapp.com/send/?phone=573103365912&text&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:bg-green-500/20 hover:text-green-400 rounded-md transition-colors"
                          >
                            <MessageCircle size={16} className="text-green-500" />
                            <span className="text-sm">WhatsApp</span>
                          </a>
                          <a
                            href="https://desufuturo.com/yeimi-pedraza/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:bg-orange-500/20 hover:text-orange-400 rounded-md transition-colors"
                          >
                            <User size={16} className="text-orange-500" />
                            <span className="text-sm">¿Quién soy?</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="https://meetings.hubspot.com/gerencia172"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center gap-2"
              >
                <Play size={20} />
                Agenda una cita
              </a>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500/10 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700">
              <div className="bg-black/50 rounded-2xl p-6 space-y-4">
                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/3jXwkqwgr8U?si=qgW_uQiUNO_Kf4lO"
                    title="Una agencia exclusiva De su futuro. #BN..."
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
                <p className="text-white text-center font-semibold">
                  Una agencia exclusiva De su futuro. #BN...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
