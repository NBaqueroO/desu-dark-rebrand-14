
import { Target, BarChart3, Megaphone, Smartphone, Globe, Mail } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Estrategias y embudos de ventas",
    description: "Desarrollamos estrategias personalizadas de marketing.",
  },
  {
    icon: Globe,
    title: "Creación de videos, imágenes, fotografía",
    description: "Contenido visual profesional para tu marca.",
  },
  {
    icon: Mail,
    title: "Email marketing y CRM",
    description: "Automatización de marketing por email.",
  },
  {
    icon: Smartphone,
    title: "WhatsApp Business",
    description: "Estrategias de comunicación directa con tus clientes.",
  },
  {
    icon: Target,
    title: "Expertos en LinkedIn",
    description: "Posicionamiento profesional y generación de leads B2B.",
  },
  {
    icon: Megaphone,
    title: "Google y Facebook Ads",
    description: "Campañas publicitarias efectivas.",
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
            Ofrecemos una gama completa de servicios de marketing digital.
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
