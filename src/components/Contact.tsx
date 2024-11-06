import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos por cualquiera de estos medios
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dirección</h3>
            <p className="text-gray-600">Av. Principal #123<br />Col. Centro, CDMX</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Teléfono</h3>
            <p className="text-gray-600">
              <a href="tel:+525555555555" className="hover:text-blue-600">
                55 5555 5555
              </a>
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">
              <a href="mailto:contacto@autotop.mx" className="hover:text-blue-600">
                contacto@autotop.mx
              </a>
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Horario</h3>
            <p className="text-gray-600">Lun - Sáb: 9:00 - 18:00<br />Dom: Cerrado</p>
          </div>
        </div>
      </div>
    </section>
  );
}