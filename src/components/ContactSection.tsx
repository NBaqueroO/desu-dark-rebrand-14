
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    bniMember: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aquí iría la lógica para enviar el formulario
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Quieres entrar a nuestras sesiones gratuitas, donde te enseñaremos a vender más y participar 
            en eventos exclusivos de Networking con nuestros clientes?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            O tienes alguna recomendación (PQR), llena este formulario y te estaremos contactando.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Contáctanos
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-orange-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-gray-700 mb-2">Last name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-orange-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="bniMember" className="block text-gray-700 mb-2">Are you a BNI Member?</label>
                <textarea
                  id="bniMember"
                  name="bniMember"
                  value={formData.bniMember}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Send
              </button>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="text-orange-500">🚀</span>
                  <span className="text-orange-500 underline cursor-pointer">Crea tus propios formularios gratuitos</span>
                  <span>para generar leads desde tu sitio web.</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
