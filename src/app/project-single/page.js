"use client";
//todo Hacer que las imagenes se pongan en pantalla completa
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ProjectSingle() {
    const images = [
        "/img/project-1.jpg",
        "/img/project-2.jpg",
        "/img/project-3.jpg"
    ];

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

            {/* Image Slider + Content */}
            <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
                {/* Swiper Image Slider */}
                <div className="rounded-xl overflow-hidden shadow-md">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{
                            clickable: true,
                            bulletClass: "swiper-pagination-bullet !w-3 !h-3 !mx-1 !bg-gray-200",
                            bulletActiveClass: "!bg-orange-800"
                        }}
                        className="rounded"
                    >
                        {images.map((src, idx) => (
                            <SwiperSlide key={idx}>
                                <img
                                    src={src}
                                    alt={`Slide ${idx + 1}`}
                                    className="w-full h-[350px] object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Project Details */}
                <div className="px-2">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-snug">
                        The dancing house prague
                    </h2>
                    <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                        Indico is a different kind of architecture practice. Founded by LoganCee in 1991,
                        we’re an employee-owned firm pursuing a democratic design process that values everyone’s input.
                    </p>
                    <ul className="text-sm text-gray-800 space-y-3">
                        <li>
                            <span className="font-semibold text-gray-600">ARCHITECTS</span>
                            <span className="ml-2 text-gray-700">: José Carpio, Valentin Lacoste, Kyle Frederick</span>
                        </li>
                        <li>
                            <span className="font-semibold text-gray-600">LOCATION</span>
                            <span className="ml-2 text-gray-700">: 962 Fifth Avenue, 3rd Floor New York.</span>
                        </li>
                        <li>
                            <span className="font-semibold text-gray-600">CATEGORY</span>
                            <span className="ml-2 text-gray-700">: Architecture, Interior.</span>
                        </li>
                        <li>
                            <span className="font-semibold text-gray-600">AREA</span>
                            <span className="ml-2 text-gray-700">: 119.0.563</span>
                        </li>
                        <li>
                            <span className="font-semibold text-gray-600">PROJECT YEAR</span>
                            <span className="ml-2 text-gray-700">: 2019/2020</span>
                        </li>
                        <li>
                            <span className="font-semibold text-gray-600">MANUFACTURES</span>
                            <span className="ml-2 text-gray-700">: AlexaTheme construction company.</span>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
