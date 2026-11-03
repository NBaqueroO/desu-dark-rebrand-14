import { Users, Award, Lightbulb, TrendingUp } from "lucide-react";
import CompanyCarousel from "./CompanyCarousel";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg mb-6 font-semibold">
            MARKETING
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto">
            Nos sentamos a entender tu negocio y te damos una propuesta real para el crecimiento de tu negocio.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Content */}
          <div className="relative">
            <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 shadow-lg">
              <div className="aspect-video bg-gray-700 rounded-2xl mb-6 overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/AGrOLukPkSg"
                  title="Petróleo en Colombia"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl"
                ></iframe>
              </div>
              <p className="text-white font-semibold text-center">Petróleo en Colombia</p>
            </div>
          </div>

          {/* Content */}
          <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 shadow-lg">
            
            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              {/* Nueva lista de estrategias */}
              <div className="flex items-start gap-3">
                <div className="bg-orange-500/10 p-2 rounded-lg">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Estrategias enfocadas en generación de prospectos (leads)</h4>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-orange-500/10 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email Marketing y Mensajeria por Whatsapp</h4>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-orange-500/10 p-2 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Creación y gestión de contenido corporativo.</h4>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-orange-500/10 p-2 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Eventos empresariales y networking estratégico.</h4>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-orange-500/10 p-2 rounded-lg">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Marketing de influencers en el sector corporativo.</h4>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-orange-500/10 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Posicionamiento B2B.</h4>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-orange-500/10 p-2 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Medición, análisis y optimización de resultados.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Companies Carousel Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Algunas empresas que confían en nuestro trabajo y en nuestro equipo
            </h3>
          </div>
          
          <CompanyCarousel />
        </div>

        {/* Sustainability Section */}
        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-6 text-white">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-4">
                SOMOS UNA EMPRESA COMPROMETIDA CON LOS OBJETIVOS DE DESARROLLO SOSTENIBLE (ODS)
              </h4>
            </div>
          </div>

          <div className="bg-gray-800 rounded-3xl p-4 border border-gray-700 shadow-lg relative overflow-hidden">
            <img 
              src="/es/marketing/lovable-uploads/8cc66fce-7ef7-4c4b-8969-e8a2a30a0803.png" 
              alt="Objetivos de Desarrollo Sostenible - ODS 4, 5, 8, 10, 17" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
