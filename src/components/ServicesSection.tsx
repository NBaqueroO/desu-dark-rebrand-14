
import { Search, Target, BarChart3, Megaphone, Smartphone, Globe } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO & SEM",
    description: "Optimización para motores de búsqueda y publicidad pagada para maximizar tu visibilidad online.",
    features: ["Análisis de palabras clave", "Optimización técnica", "Google Ads", "Reportes detallados"]
  },
  {
    icon: Target,
    title: "Marketing Estratégico",
    description: "Desarrollamos estrategias personalizadas que conectan tu marca con tu audiencia objetivo.",
    features: ["Estrategia de marca", "Segmentación precisa", "Análisis competitivo", "ROI optimizado"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Datos",
    description: "Medimos y analizamos cada aspecto de tu presencia digital para optimizar resultados.",
    features: ["Google Analytics", "Dashboards personalizados", "Métricas KPI", "Informes automáticos"]
  },
  {
    icon: Megaphone,
    title: "Publicidad Digital",
    description: "Campañas publicitarias efectivas en todas las plataformas digitales principales.",
    features: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads", "Retargeting"]
  },
  {
    icon: Smartphone,
    title: "Marketing Móvil",
    description: "Estrategias optimizadas para dispositivos móviles y experiencias app-first.",
    features: ["Apps móviles", "Push notifications", "SMS marketing", "Geolocalización"]
  },
  {
    icon: Globe,
    title: "Presencia Web",
    description: "Creación y optimización de sitios web que convierten visitantes en clientes.",
    features: ["Diseño responsivo", "UX/UI optimizado", "CRO", "Mantenimiento"]
  }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Nuestros Servicios
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
              className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-600/20 p-3 rounded-lg mr-4 group-hover:bg-blue-600/30 transition-colors">
                  <service.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                Saber más →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
