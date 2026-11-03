
import { Users, Handshake, Gift, Repeat } from "lucide-react";

const diferenciales = [
  {
    icon: Users,
    title: "Relaciones de confianza",
    description:
      "Nuestro diferencial está en la comunidad que construimos contigo: relaciones sólidas, beneficios tangibles y oportunidades que van mucho más allá del marketing.",
  },
  {
    icon: Handshake,
    title: "Eventos privados y networking exclusivo",
    description:
      "Abrimos puertas a espacios donde podrás conectar con líderes empresariales, tomadores de decisión y nuevas oportunidades de negocio.",
  },
  {
    icon: Gift,
    title: "Beneficios reales para tu empresa",
    description:
      "Gracias a nuestras alianzas, tendrás acceso a descuentos exclusivos en restaurantes, medios de publicidad, espacios para reuniones y mucho más que seguiremos ampliando.",
  },
  {
    icon: Repeat,
    title: "Retribuimos tu confianza",
    description:
      "El 10% de tu ticket siempre vuelve a ti. Lo reinvertimos en enseñarte estrategias de retención.",
  },
];

const ServicesSection = () => {
  return (
    <section id="diferenciales" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg mb-6 font-semibold">
            ¿QUÉ NOS HACE DIFERENTES?
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Más allá del marketing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            En el mercado, lo básico ya no es suficiente. Una buena atención, precios justos o un servicio personalizado son lo mínimo que cualquier empresa debería ofrecer. Lo que realmente nos diferencia es la manera en que creamos valor más allá de la estrategia de mercadeo:
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {diferenciales.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-xl p-8 hover:border-orange-500 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 group flex flex-col items-center text-center"
            >
              <div className="bg-orange-500/10 p-4 rounded-lg mb-4 group-hover:bg-orange-500/20 transition-colors flex items-center justify-center">
                <item.icon className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
