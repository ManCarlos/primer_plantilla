"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination,Autoplay } from "swiper/modules";

export default function ServicesCarousel() {
    const services = [
        {
            icon: "flaticon-factory",
            title: "Refurbishments",
            desc: "We are committed a sustainable future fostering a collaborative spirit.",
        },
        {
            icon: "flaticon-gear",
            title: "Building Renovation",
            desc: "We are committed a sustainable future fostering a collaborative spirit.",
        },
        {
            icon: "flaticon-control-system",
            title: "Architectural Plans",
            desc: "We are committed a sustainable future fostering a collaborative spirit.",
        },
        {
            icon: "flaticon-3d-printer",
            title: "General Building",
            desc: "We are committed a sustainable future fostering a collaborative spirit.",
        },
        {
            icon: "flaticon-industrial-robot",
            title: "Building Construction",
            desc: "We are committed a sustainable future fostering a collaborative spirit.",
        },
    ];

    const testimonials = [
        {
            name: "José Carpio",
            role: "Director",
            image: "/img/testi-1.jpg",
            stars: 5,
            quote:
                "Thank you for guiding us through the construction process, understanding, and always ready to accommodate our needs. We love our new space and know that it was built by the very best!",
        },{
            name: "Valentin Lacoste",
            role: "Director",
            image: "/img/testi-2.jpg",
            stars: 5,
            quote:
                "Thank you for guiding us through the construction process, understanding, and always ready to accommodate our needs. We love our new space and know that it was built by the very best!",
        },{
            name: "Kyle Frederick",
            role: "Director",
            image: "/img/testi-3.jpg",
            stars: 5,
            quote:
                "Thank you for guiding us through the construction process, understanding, and always ready to accommodate our needs. We love our new space and know that it was built by the very best!",
        },
    ];

    useEffect(() => {
        const prev = document.querySelector(".swiper-button-prev");
        const next = document.querySelector(".swiper-button-next");

        [prev, next].forEach((btn) => {
            if (!btn) return;
            btn.classList.add(
                "absolute", "top-1/2", "-translate-y-1/2", "z-10",
                "w-10", "h-10", "flex", "items-center", "justify-center",
                "bg-white", "rounded-full", "shadow-md",
                "text-gray-700", "hover:text-orange-500",
                "transition-colors", "duration-200"
            );
        });

        if (prev) prev.classList.add("-left-10");
        if (next) next.classList.add("-right-10");
    }, []);

    return (
        <main className=" bg-white">
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
            {/* Services */}
            <section>
                <div className="w-full bg-red-50 py-12" data-aos="fade-left">
                    <div className="max-w-7xl mx-auto px-4 relative">
                        <Swiper
                            modules={[Navigation,Autoplay]}
                            navigation
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            spaceBetween={0}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 4 },
                            }}
                        >
                            {services.map((service, index) => (
                                <SwiperSlide key={index}>
                                    <div className="h-full p-8 flex flex-col items-center justify-center text-center bg-gray-50 text-gray-900 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-orange-500 hover:text-white group">
                                        <i className={`${service.icon} text-5xl mb-4 text-orange-500 transition-colors duration-300 ease-in-out group-hover:text-white`}></i>
                                        <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                                        <p className="text-sm mb-4 text-gray-600 transition-colors duration-300 ease-in-out group-hover:text-white">
                                            {service.desc}
                                        </p>
                                        <a href="#" className="font-semibold text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-white">
                                            READ MORE
                                        </a>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-red-50 py-16 px-4">
                <div className="max-w-5xl mx-auto text-center" data-aos="fade-right">
                    <p className="text-sm font-bold uppercase text-gray-600 relative inline-block mb-2">
                        TESTIMONIAL
                        <span className="block w-4 h-0.5 bg-orange-500 mx-auto mt-1"></span>
                    </p>
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
                        What people says
                    </h2>

                    <Swiper
                        modules={[Pagination,Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        loop={true}
                        slidesPerView={1}
                    >
                        {testimonials.map((t, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="relative bg-white shadow-md p-8 rounded-md text-left max-w-4xl mx-auto">
                                    <div className="border-l-4 border-orange-500 pl-4">
                                        <div className="flex items-center gap-4 mb-4">
                                            <img
                                                src={t.image}
                                                alt={t.name}
                                                className="w-16 h-16 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="font-bold text-gray-800">{t.name}</p>
                                                <p className="text-xs text-gray-500 uppercase">{t.role}</p>
                                                <div className="flex text-orange-400 mt-1">
                                                    {Array.from({ length: t.stars }).map((_, i) => (
                                                        <i key={i} className="flaticon-star text-sm"></i>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 italic text-sm mb-4 leading-relaxed">
                                            “{t.quote}”
                                        </p>
                                        <i className="flaticon-left-quote text-orange-400 text-4xl absolute bottom-4 right-4"></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </main>
    );
}
