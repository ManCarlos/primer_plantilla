"use client";

import {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

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


  const slides = [
    {
      image: "/img/slider-1.jpg",
      title: "Build Your Dream",
      subtitle: "We create architecture that inspires",
      position: "left", // Slide desde izquierda
    },
    {
      image: "/img/slider-2.jpg",
      title: "Designed for Life",
      subtitle: "Architecture that speaks volumes",
      position: "center", // Slide desde abajo (centro)
    },
    {
      image: "/img/slider-3.jpg",
      title: "Future of Building",
      subtitle: "Modern, Innovative & Elegant",
      position: "right", // Slide desde derecha
    },
  ];

  return (
      <main>
        <section className="relative w-full h-[45vh]">
          <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="w-full h-full"
          >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full overflow-hidden">
                    {/* Imagen con zoom */}
                    <img
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover scale-100 transform transition-transform duration-[6000ms] hover:scale-105"
                    />

                    {/* Overlay negro */}
                    <div className="absolute inset-0 bg-black/50 z-10"></div>

                    {/* Contenido */}
                    <div className="relative z-20 flex items-center h-full px-6 md:px-16">
                      <div
                          className={`max-w-2xl text-white space-y-4 transition-all duration-700 ease-out
                    ${
                              activeIndex === index
                                  ? "opacity-100 translate-x-0"
                                  : "opacity-0 translate-x-8"
                          }
                    ${
                              slide.position === "left"
                                  ? "ml-[25%] text-left"
                                  : slide.position === "right"
                                      ? "mr-[25%] ml-auto text-right"
                                      : "mx-auto text-center"
                          }
                    ${
                              activeIndex === index
                                  ? slide.position === "left"
                                      ? "animate-slide-in-left"
                                      : slide.position === "right"
                                          ? "animate-slide-in-right"
                                          : "animate-fade-in-up"
                                  : ""
                          }
                  `}
                      >
                        <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
                        <p className="text-lg md:text-xl">{slide.subtitle}</p>
                        <a
                            href="#"
                            className="inline-block bg-orange-500 px-6 py-3 rounded text-white font-semibold hover:bg-orange-600 transition"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
            ))}
          </Swiper>
        </section>

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

        <section >
          <div className="w-full bg-white py-12 shadow-xl"  data-aos="fade-left">
            <div className="max-w-7xl mx-auto px-4 relative">
              <Swiper
                  modules={[Navigation,Autoplay]}
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
        <section
            className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url('/img/cta-bg.jpg')`,
            }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
          <div className="relative text-center text-white" data-aos="fade-up">
            <p className="text-lg">EXPLORE THE FEATURES</p>
            <h1 className="text-4xl font-bold">The best constructions
              company since 1985</h1>
          </div>
        </section>
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
        {/* Testimonials */}
        <section className="bg-white py-16 px-4">

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
