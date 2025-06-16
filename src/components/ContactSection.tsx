
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent('Consulta desde De Su Futuro');
    const body = encodeURIComponent(`
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Empresa: ${formData.company}
Mensaje: ${formData.message}
    `);
    
    window.location.href = `mailto:info@desufuturo.com?subject=${subject}&body=${body}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg mb-6 font-semibold">
            CONTACTO
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Quieres entrar a nuestras sesiones gratuitas?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Donde te enseñaremos a vender más y participar en eventos exclusivos de Networking con
            nuestros clientes? O tienes alguna recomendación (PQR), llena este formulario y te estaremos contactando.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                  placeholder="+57 300 000 0000"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-white font-semibold mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none resize-none"
                  placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
              >
                Enviar Mensaje
              </button>
              
              <p className="text-gray-400 text-sm text-center">
                Al enviar este formulario, se abrirá tu aplicación de correo con los datos completados.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
