"use client";

export default function Contact() {
    return (
        <main className="min-h-screen bg-white relative">

            {/* Google Map */}
            <section className="w-full h-96 relative z-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.250747813068!2d90.42030927506703!3d23.81054328672005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a1b7472cbd%3A0x7a0eebf79b5bca93!2sDynamic%20Layers!5e0!3m2!1sen!2sbd!4v1622191400000!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                    className="border-0 w-full h-full"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
            <div
                className="absolute inset-0 bg-[url('/img/bg-dots.png')] bg-repeat z-0"
                aria-hidden="true"
            ></div>
            {/* Contact Info & Form */}
            <section className="relative z-10">
                {/* Imagen de fondo */}


                {/* Contenido */}
                <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Get in touch with us &<br /> send us message today!
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Redison is a different kind of architecture practice. Founded by LoganCee in 1991, we're an
                            employee-owned firm pursuing a democratic design process that values everyone's input.
                        </p>
                        <div className="space-y-3 text-gray-700 text-sm">
                            <p>
                                <strong className="block text-gray-800 text-base font-semibold">
                                    198 West 21th Street, Suite 721<br />New York, NY 10010
                                </strong>
                            </p>
                            <p><strong>Email:</strong> Dynamiclayers.Net</p>
                            <p><strong>Phone:</strong> +88 (0) 101 0000 000</p>
                            <p><strong>Fax:</strong> +88 (0) 202 0000 001</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-4  p-6 ">
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full p-3 border bg-white text-black border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 border bg-white text-black border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500"
                            />
                        </div>
                        <textarea
                            placeholder="Message"
                            rows="6"
                            className="w-full p-3 border bg-white text-black border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-orange-500 text-white font-bold px-6 py-3 rounded shadow hover:bg-orange-600 transition-colors duration-300"
                        >
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </section>

        </main>
    );
}