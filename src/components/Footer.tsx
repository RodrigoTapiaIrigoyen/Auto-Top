import React from 'react';
import { Wrench } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Wrench className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-2xl font-bold">AutoTop</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#inicio" className="hover:text-blue-400">Inicio</a>
            <a href="#servicios" className="hover:text-blue-400">Servicios</a>
            <a href="#contacto" className="hover:text-blue-400">Contacto</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AutoTop. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}