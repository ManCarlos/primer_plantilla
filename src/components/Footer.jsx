"use client";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 relative">
            {/* Contenido principal */}
            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo y descripción */}
                <div>
                    <img src="/img/logo-light.png" alt="Logo" className="h-10 mb-4" />
                    <p className="text-sm leading-relaxed">
                        Building your own home is about desire, fantasy. But it’s achievable anyone can do it.
                    </p>
                </div>

                {/* Links de la compañía */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-orange-500">About Us</a></li>
                        <li><a href="#" className="hover:text-orange-500">Our Services</a></li>
                        <li><a href="#" className="hover:text-orange-500">Clients Reviews</a></li>
                        <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
                    </ul>
                </div>

                {/* Información de contacto */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Headquarters</h3>
                    <p className="text-sm">962 Fifth Avenue, 3rd Floor New York, NY10022</p>
                    <p className="text-sm mt-2">
                        <a href="mailto:info@example.com"
                           className="text-orange-500 hover:underline">info@example.com</a>
                    </p>
                    <p className="text-sm mt-1">(+123) 456 789 101</p>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Newsletter Subscription</h3>
                    <p className="text-sm mb-4">
                        Subscribe and get 10% off from our architecture company.
                    </p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Enter Your Email Address..."
                            className="w-full px-3 py-2 bg-white text-gray-900 rounded-l focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-orange-500 px-4 py-2 rounded-r text-white font-semibold hover:bg-orange-600 transition"
                        >
                            SUBSCRIBE
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer inferior */}
            <div className="border-t border-gray-800 text-center py-4 text-sm">
                <p>&copy; {new Date().getFullYear()} INDICO. All rights reserved.</p>
            </div>

            {/* Botón volver arriba con tooltip */}
            <div className="group fixed right-6 bottom-6 flex flex-col items-center z-20">
                <span className="mb-2 opacity-0 group-hover:opacity-100  bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg">
                    Back to top
                </span>

                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
                    aria-label="Back to top"
                >
                    ↑
                </button>
            </div>
        </footer>
    );
}
