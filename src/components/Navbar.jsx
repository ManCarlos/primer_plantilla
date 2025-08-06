"use client";

import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm  sticky top-0 z-50 ">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between">

                {/* Logo y botón hamburguesa */}
                <div className="flex items-center justify-between w-full md:w-auto">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img src="/img/logo-dark.png" alt="Logo" className="h-8 w-auto" />
                    </div>

                    {/* Botón hamburguesa solo en móvil */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none
             active:scale-90 active:bg-gray-100 rounded-full transition-all duration-150 ease-in-out"
                    >
  <span
      className={`block w-6 h-0.5 bg-gray-800 rounded transition-all duration-300 ease-in-out ${
          menuOpen ? "rotate-45 translate-y-1.5" : ""
      }`}
  ></span>
                        <span
                            className={`block w-6 h-0.5 bg-gray-800 rounded transition-all duration-300 ease-in-out my-1 ${
                                menuOpen ? "opacity-0" : ""
                            }`}
                        ></span>
                        <span
                            className={`block w-6 h-0.5 bg-gray-800 rounded transition-all duration-300 ease-in-out ${
                                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                            }`}
                        ></span>
                    </button>

                </div>

                {/* Menú */}
                <div className={`flex flex-col md:flex-row overflow-hidden transition-all duration-300 ease-in-out    ${menuOpen ? "max-h-96 opacity-100 bg-gray-200 p-4 rounded-md" : "max-h-0 opacity-0 md:max-h-none md:opacity-100 md:bg-transparent"} items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0 uppercase font-semibold text-sm tracking-wide px-8`}>
                    <a href="#" className="text-gray-900 hover:text-orange-600">Home</a>
                    <a href="/about" className="text-gray-900 hover:text-orange-600">About</a>
                    <a href="#" className="text-gray-900 hover:text-orange-600">Services</a>
                    <a href="#" className="text-gray-900 hover:text-orange-600">Pages</a>
                    <a href="#" className="text-gray-900 hover:text-orange-600">Blog</a>
                    <a href="#" className="text-gray-900 hover:text-orange-600">Contact</a>

                    <a
                        href="#"
                        className="inline-block bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition w-full md:w-auto text-center"
                    >
                        Request a Quote
                    </a>
                </div>
            </div>
        </nav>
    );
}
