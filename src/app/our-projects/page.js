"use client";
export default function OurProjects() {
    const projects = [
        {
            title: "Cathedral of brasilia brasilia",
            category: "ARCHITECTURE",
            image: "/img/project-1.jpg",
        },
        {
            title: "Modern Art Center",
            category: "ART & DESIGN",
            image: "/img/project-2.jpg",
        },
        {
            title: "Cultural Pavilion",
            category: "PUBLIC SPACE",
            image: "/img/project-3.jpg",
        },
        {
            title: "Business Tower",
            category: "COMMERCIAL",
            image: "/img/project-4.jpg",
        },
        {
            title: "Skyscraper Residence",
            category: "RESIDENTIAL",
            image: "/img/project-5.jpg",
        },
        {
            title: "Geometric Facade",
            category: "INNOVATION",
            image: "/img/project-6.jpg",
        },
    ];
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section
                className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
                style={{backgroundImage: `url('/img/page-header.jpg')`}}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
                <div className="relative text-center text-white" data-aos="fade-up">
                    <h1 className="text-4xl font-bold">Projects</h1>
                    <p className="text-lg">Explore our latest works</p>
                </div>
            </section>
            {/* Projects Grid */}
            <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="relative group overflow-hidden shadow-md rounded" data-aos="fade-up">
                        <img src={project.image} alt={project.title} className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"/>
                        <div
                            className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/90 transition-all duration-300 flex flex-col justify-end p-6"
                        >
                            <div
                                className="text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
               <span className="text-xs font-semibold tracking-wide">
               {project.category}
               </span>
                                <h3 className="text-lg font-bold leading-tight">
                                    {project.title}
                                </h3>
                            </div>
                            <div
                                className="absolute top-4 right-4 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                <i className="flaticon-fullscreen"></i>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}