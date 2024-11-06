import React from 'react';
import { 
  Wrench,
  Car,
  Battery,
  Disc,
  Droplet,
  Cog,
  Thermometer,
  Settings,
  Phone,
  MessageSquare
} from 'lucide-react';

const services = [
  {
    id: 1,
    name: "Diagnóstico Computarizado",
    description: "Análisis completo del sistema electrónico de tu vehículo",
    icon: Settings,
    price: "Desde $600"
  },
  {
    id: 2,
    name: "Afinación Mayor",
    description: "Servicio completo para optimizar el rendimiento del motor",
    icon: Car,
    price: "Desde $2,500"
  },
  {
    id: 3,
    name: "Sistema Eléctrico",
    description: "Reparación y mantenimiento del sistema eléctrico",
    icon: Battery,
    price: "Desde $800"
  },
  {
    id: 4,
    name: "Frenos",
    description: "Mantenimiento y reparación del sistema de frenado",
    icon: Disc,
    price: "Desde $1,200"
  },
  {
    id: 5,
    name: "Cambio de Aceite",
    description: "Servicio de cambio de aceite y filtros",
    icon: Droplet,
    price: "Desde $900"
  },
  {
    id: 6,
    name: "Transmisión",
    description: "Diagnóstico y reparación de transmisión automática y manual",
    icon: Cog,
    price: "Desde $1,500"
  },
  {
    id: 7,
    name: "Aire Acondicionado",
    description: "Mantenimiento y recarga del sistema de climatización",
    icon: Thermometer,
    price: "Desde $1,000"
  },
  {
    id: 8,
    name: "Suspensión",
    description: "Diagnóstico y reparación del sistema de suspensión",
    icon: Wrench,
    price: "Desde $1,800"
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios automotrices con la más alta calidad y garantía
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <p className="text-blue-600 font-bold">{service.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">¿Necesitas un servicio específico? ¡Contáctanos!</p>
          <div className="flex justify-center space-x-4">
            <a 
              href="tel:+525555555555" 
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition flex items-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Llamar
            </a>
            <a 
              href="https://wa.me/525555555555" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition flex items-center"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}