
import { Users, Award, Lightbulb, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg mb-6 font-semibold">
            MARKETING
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 max-w-4xl mx-auto">
            Todos nuestros trabajos son realizados a través de metodologías Design Thinking y Agile, 
            somos expertos en planeación estratégica y modelos de negocios.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Content */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <a 
                  href="https://youtu.be/AGrOLukPkSg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
                >
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </a>
              </div>
              <p className="text-black font-semibold text-center">Petróleo en Colombia</p>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-6">
              Somos la única empresa en Colombia con línea especializada para la creación de contenido del sector petrolero
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              (<span className="text-orange-500 font-semibold">Upstream, midstream y downstream</span>) ya que 
              contamos con ingenieros de petróleos y ambientales.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-orange-500/10 p-2 rounded-lg">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Equipo Especializado</h4>
                  <p className="text-gray-500 text-sm">Ingenieros expertos</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-orange-500/10 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Metodologías</h4>
                  <p className="text-gray-500 text-sm">Design Thinking & Agile</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-orange-500/10 p-2 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Innovación</h4>
                  <p className="text-gray-500 text-sm">Contenido especializado</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-orange-500/10 p-2 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Estrategia</h4>
                  <p className="text-gray-500 text-sm">Modelos de negocio</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Companies Carousel Section - Placeholder */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              Algunas empresas que confían en nuestro trabajo y en nuestro equipo
            </h3>
          </div>
          
          {/* Placeholder for company carousel - will be replaced with actual images */}
          <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-lg">
            <div className="text-center text-gray-500">
              <p className="text-lg mb-4">Carrusel de empresas</p>
              <p className="text-sm">Aquí se mostrarán las 9 imágenes del carrusel de empresas que enviarás</p>
            </div>
          </div>
        </div>

        {/* Sustainability Section */}
        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">
                SOMOS UNA EMPRESA COMPROMETIDA CON LOS OBJETIVOS DE DESARROLLO SOSTENIBLE (ODS)
              </h4>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
            <h4 className="text-2xl font-bold text-black mb-6 text-center">
              OBJETIVOS DE DESARROLLO SOSTENIBLE
            </h4>
            <div className="grid grid-cols-4 gap-4">
              {/* Placeholder for ODS icons */}
              {[4, 5, 8, 10, 17].map((num) => (
                <div key={num} className="bg-gray-100 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-500 mb-2">{num}</div>
                  <div className="text-xs text-gray-600">ODS {num}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
