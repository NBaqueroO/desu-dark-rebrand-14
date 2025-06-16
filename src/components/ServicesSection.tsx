
import { Target, BarChart3, Megaphone, Smartphone, Globe, Mail } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Estrategias y embudos de ventas",
    description: "Desarrollamos estrategias personalizadas de marketing que maximizan tu conversión y ROI.",
    features: ["Análisis de mercado", "Segmentación precisa", "Optimización de conversión", "ROI mejorado"]
  },
  {
    icon: Globe,
    title: "Creación de videos, imágenes, fotografía",
    description: "Contenido visual profesional que conecta con tu audiencia y fortalece tu marca.",
    features: ["Videos promocionales", "Fotografía corporativa", "Diseño gráfico", "Contenido para redes"]
  },
  {
    icon: Mail,
    title: "Email marketing y CRM",
    description: "Automatización de marketing por email y gestión completa de relaciones con clientes.",
    features: ["Campañas automatizadas", "Segmentación avanzada", "CRM integrado", "Análisis detallado"]
  },
  {
    icon: Smartphone,
    title: "WhatsApp Business",
    description: "Estrategias de comunicación directa con tus clientes a través de WhatsApp Business.",
    features: ["Automatización", "Catálogos digitales", "Atención al cliente", "Marketing directo"]
  },
  {
    icon: Target,
    title: "Expertos en LinkedIn",
    description: "Posicionamiento profesional y generación de leads B2B a través de LinkedIn.",
    features: ["Perfil optimizado", "Networking estratégico", "Content marketing", "Lead generation"]
  },
  {
    icon: Megaphone,
    title: "Google y Facebook Ads",
    description: "Campañas publicitarias efectivas en las principales plataformas digitales.",
    features: ["Google Ads", "Facebook Ads", "Instagram Ads", "Optimización ROI"]
  }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg mb-6 font-semibold">
            NUESTROS SERVICIOS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Servicios Especializados
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios de marketing digital diseñados 
            para impulsar tu negocio al siguiente nivel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-xl p-8 hover:border-orange-500 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="flex items-center mb-6">
                <div className="bg-orange-500/10 p-3 rounded-lg mr-4 group-hover:bg-orange-500/20 transition-colors">
                  <service.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 text-orange-500 hover:text-orange-400 font-semibold transition-colors flex items-center gap-2">
                Ver detalle de los servicios →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
