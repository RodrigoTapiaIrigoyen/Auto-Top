import React, { useState } from 'react';
import { Menu, X, Wrench } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Wrench className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">AutoTop</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-blue-600">Inicio</a>
            <a href="#servicios" className="text-gray-600 hover:text-blue-600">Servicios</a>
            <a href="#contacto" className="text-gray-600 hover:text-blue-600">Contacto</a>
            <a 
              href="https://wa.me/525555555555" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a 
                href="#inicio"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </a>
              <a 
                href="#servicios"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </a>
              <a 
                href="#contacto"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </a>
              <a 
                href="https://wa.me/525555555555"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 bg-blue-600 text-white rounded-full text-center"
                onClick={() => setIsOpen(false)}
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}