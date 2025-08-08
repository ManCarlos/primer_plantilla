"use client";

export default function About() {

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section
                className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: `url('/img/page-header.jpg')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
                <div className="relative text-center text-white" data-aos="fade-up">
                    <h1 className="text-4xl font-bold">About us</h1>
                    <p className="text-lg">Construction &amp; Building Html Template.</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
                <div data-aos="fade-right">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        We are the expert on this field better solution since 1984.
                    </h2>
                    <p className="text-gray-600 mb-6">
                        We are committed to building a sustainable future by fostering a
                        collaborative spirit that creates exceptional experiences, balanced
                        relationships, and community built environment. Building isn't just
                        a job. It's our passion. With every project we undertake, we set the
                        bar high and provide the best industry.
                    </p>
                    <a
                        href="#"
                        className="inline-block bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition"
                    >
                        MORE ABOUT US
                    </a>
                </div>

                <div className="space-y-8">
                    <div
                        className="flex items-start space-x-4"
                        data-aos="fade-left"
                        data-aos-delay="100"
                    >
                        <i className="flaticon-factory text-orange-500 text-5xl"></i>
                        <div>
                            <h3 className="font-bold text-gray-900">Professional Liability</h3>
                            <p className="text-gray-600">
                                We are committed to building a sustainable future by fostering a collaborative spirit.
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex items-start space-x-4"
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        <i className="flaticon-worker text-orange-500 text-5xl"></i>
                        <div>
                            <h3 className="font-bold text-gray-900">Dedicated To Our Clients</h3>
                            <p className="text-gray-600">
                                We are committed to building a sustainable future by fostering a collaborative spirit.
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex items-start space-x-4"
                        data-aos="fade-left"
                        data-aos-delay="300"
                    >
                        <i className="flaticon-gear text-orange-500 text-5xl"></i>
                        <div>
                            <h3 className="font-bold text-gray-900">Outstanding Services</h3>
                            <p className="text-gray-600">
                                We are committed to building a sustainable future by fostering a collaborative spirit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Improved Step Section */}
            <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: `url('/img/d-slide-6.jpg')`,}}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
                <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 text-center text-white">
                    {[
                        { num: "1", title: "Planning & Research" },
                        { num: "2", title: "Design & Ideas" },
                        { num: "3", title: "Specialized Projects" },
                        { num: "4", title: "Final Outputs" },
                    ].map((step, index) => (
                        <div
                            key={index}
                            className="transition transform hover:scale-105 duration-300"
                            data-aos="zoom-in"
                            data-aos-delay={index * 150}
                        >
                            <div className="w-14 h-14 mx-auto bg-orange-500 rounded-full flex items-center justify-center text-xl font-bold shadow-lg mb-5">
                                {step.num}
                            </div>
                            <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                We are committed building a sustainable future fostering a collaborative spirit.
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Integrated Package Section */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
                    <div data-aos="fade-right">
                        <img
                            src="/img/content-1.jpg"
                            alt="Construction Worker"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div data-aos="fade-left">
                        <p className="uppercase text-sm text-gray-500 font-semibold mb-2">
                            Explore the features
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Offering the most complete integrated package!
                        </h2>
                        <p className="text-gray-600 mb-6">
                            We are committed to building a sustainable future by fostering a collaborative spirit
                            that creates exceptional experiences, balanced relationships, and community built
                            environment. Building isn't just job. It's our passion. With every project we
                            undertake, we set the bar high and provide the best industry.
                        </p>
                        <a
                            href="#"
                            className="inline-block bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition"
                        >
                            GET FREE QUOTE
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
