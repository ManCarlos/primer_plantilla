"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const pathname = usePathname();

    const closeMenus = () => {
        setMenuOpen(false);
        setDropdownOpen(false);
    };

    const navLinkClass = (path) =>
        `${pathname === path ? "text-orange-600 font-semibold" : "text-gray-900"} hover:text-orange-600 w-full md:w-auto py-3 px-4 border-b border-gray-300 md:border-0`;

    const dropdownLinkClass = (path) =>
        `block px-4 py-2 text-sm ${
            pathname === path ? "text-orange-600 font-semibold bg-gray-100" : "text-gray-700"
        } hover:bg-gray-100`;

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between">
                {/* Logo y botón hamburguesa */}
                <div className="flex items-center justify-between w-full md:w-auto">
                    <div className="flex items-center space-x-2">
                        <img src="/img/logo-dark.png" alt="Logo" className="h-8 w-auto" />
                    </div>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none active:scale-90 active:bg-gray-100 rounded-full transition-all duration-150 ease-in-out"
                    >
            <span
                className={`block w-6 h-0.5 bg-gray-800 rounded transition-all duration-300 ease-in-out ${
                    menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
            />
                        <span
                            className={`block w-6 h-0.5 bg-gray-800 rounded transition-all duration-300 ease-in-out my-1 ${
                                menuOpen ? "opacity-0" : ""
                            }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-gray-800 rounded transition-all duration-300 ease-in-out ${
                                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                            }`}
                        />
                    </button>
                </div>

                {/* Menú */}
                <div
                    className={`relative z-50 flex flex-col md:flex-row overflow-visible transition-all duration-300 ease-in-out ${
                        menuOpen
                            ? "max-h-96 opacity-100 bg-gray-200 p-4 rounded-lg"
                            : "max-h-0 opacity-0 md:max-h-none md:opacity-100 md:bg-transparent"
                    } items-start md:items-center space-y-0 md:space-x-8 mt-4 md:mt-0 uppercase font-semibold text-sm tracking-wide px-8`}
                >
                    <a href="/" onClick={closeMenus} className={navLinkClass("/")}>Home</a>
                    <a href="/about" onClick={closeMenus} className={navLinkClass("/about")}>About</a>
                    <a href="/services" onClick={closeMenus} className={navLinkClass("/services")}>Services</a>

                    {/* Dropdown */}
                    <div className="relative group w-full md:w-auto border-b border-gray-300 md:border-0 px-4 py-3">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="text-gray-900 hover:text-orange-600 flex items-center gap-1 w-full md:w-auto"
                        >
                            PAGES
                            <svg
                                className="w-4 h-4 transform transition-transform duration-200"
                                style={{ transform: dropdownOpen ? "rotate(180deg)" : "" }}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        <div
                            className={`absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-md w-40 z-50 transition-all duration-200 ${
                                dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                            }`}
                        >
                            <a href="/our-projects" onClick={closeMenus} className={dropdownLinkClass("/our-projects")}>
                                Our Projects
                            </a>
                            <a href="/project-single" onClick={closeMenus} className={dropdownLinkClass("/project-single")}>
                                Project Single
                            </a>
                        </div>
                    </div>

                    <a href="/contact" onClick={closeMenus} className={navLinkClass("/contact")}>Contact</a>

                    <a
                        href="#"
                        className="inline-block bg-orange-500 text-white px-5 py-3 rounded hover:bg-orange-600 transition w-full md:w-auto text-center mt-4"
                    >
                        Request a Quote
                    </a>
                </div>
            </div>
        </nav>
    );
}
