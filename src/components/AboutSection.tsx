
import { Users, Award, Lightbulb, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Sobre
              <span className="text-blue-400"> DesuFuturo</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Somos una agencia de marketing digital especializada en transformar 
              negocios tradicionales en líderes digitales. Con más de 5 años de experiencia, 
              hemos ayudado a cientos de empresas a alcanzar sus objetivos online.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Nuestro enfoque se basa en la innovación, la creatividad y el análisis de datos 
              para crear estrategias que generen resultados reales y medibles para nuestros clientes.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-blue-600/20 p-2 rounded-lg">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Equipo Experto</h4>
                  <p className="text-gray-400 text-sm">Profesionales certificados</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-600/20 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Resultados</h4>
                  <p className="text-gray-400 text-sm">ROI comprobado</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-600/20 p-2 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Innovación</h4>
                  <p className="text-gray-400 text-sm">Últimas tendencias</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-600/20 p-2 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Crecimiento</h4>
                  <p className="text-gray-400 text-sm">Escalabilidad garantizada</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-gray-700">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-800/50 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                  <div className="text-gray-300">Años de Experiencia</div>
                </div>
                
                <div className="bg-gray-800/50 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                  <div className="text-gray-300">Proyectos Exitosos</div>
                </div>
                
                <div className="bg-gray-800/50 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-gray-300">Empresas Confiadas</div>
                </div>
                
                <div className="bg-gray-800/50 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-gray-300">Soporte Continuo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
