
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Marketing Digital
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Para Tu Futuro
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transformamos tu presencia digital con estrategias innovadoras de marketing. 
              Alcanza más clientes, aumenta tus ventas y construye una marca sólida en el mundo digital.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
                Comenzar Ahora
                <ArrowRight size={20} />
              </button>
              
              <button className="text-white border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center gap-2">
                <Play size={20} />
                Ver Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-blue-400">500+</div>
                <div className="text-gray-400">Clientes Satisfechos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-blue-400">95%</div>
                <div className="text-gray-400">Tasa de Éxito</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-blue-400">24/7</div>
                <div className="text-gray-400">Soporte</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-gray-700">
              <div className="bg-gray-800/50 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-blue-500/30 rounded w-3/4"></div>
                  <div className="h-4 bg-purple-500/30 rounded w-1/2"></div>
                  <div className="h-4 bg-blue-500/30 rounded w-5/6"></div>
                  <div className="h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded mt-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
