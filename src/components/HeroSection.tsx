
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fb923c%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              ¿SABÍAS QUE ES CUATRO VECES
              <span className="block text-orange-500">
                MÁS COSTOSO CONSEGUIR UN
              </span>
              <span className="block text-white">
                CLIENTE NUEVO QUE RECUPERAR
              </span>
              <span className="block text-orange-500">
                UNO ANTIGUO?
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Si aún no tienes una estrategia definida, nosotros te enseñamos a recuperar y a conseguir 
              más clientes para tu negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
                Contáctanos
                <ArrowRight size={20} />
              </button>
              
              <button className="text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center gap-2">
                <Play size={20} />
                ¿o agenda una cita?
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-orange-500">500+</div>
                <div className="text-gray-400">Clientes Satisfechos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-orange-500">95%</div>
                <div className="text-gray-400">Tasa de Éxito</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-orange-500">24/7</div>
                <div className="text-gray-400">Soporte</div>
              </div>
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
                    src="https://www.youtube.com/embed/rFQvnQ4Nb5U"
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
