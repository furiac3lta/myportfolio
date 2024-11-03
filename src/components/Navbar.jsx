import { useState } from "react";
import Logo from "../assets/marce.svg";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-orange-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a href="/" className="text-orange-300 font-bold text-2xl">
           MCJD
             
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="text-orange-400 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-orange-400 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Service
            </a>
            <a
              href="#"
              className="text-orange-400 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              About Me
            </a>
            <a
              href="#"
              className="text-orange-400 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-300 inline-flex items-center justify-center p-2 rounded-md text-orange-400 hover:text-orange-400 hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                    strokeWidth="2"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16M4 12h16m-7 6h7"
                    strokeWidth="2"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* responsive */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block text-orange-400 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Inicio
            </a>
            <a
              href="#"
              className="block text-orange-400 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Servicios
            </a>
            <a
              href="#"
              className="block text-orange-400 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Acerca de
            </a>
            <a
              href="#"
              className="block text-orange-400 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
