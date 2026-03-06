const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing products, orders, and analytics. Built with React and Recharts.",
            tags: ["React", "Tailwind", "Recharts"],
            link: "#",
            color: "from-blue-500 to-cyan-400"
        },
        {
            title: "Social Media App",
            description: "A fully functional social media platform with real-time messaging, posts, and likes.",
            tags: ["React", "Firebase", "Redux"],
            link: "#",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Task Management Tool",
            description: "A productivity app to organize tasks with drag-and-drop functionality.",
            tags: ["React", "DnD", "Context API"],
            link: "#",
            color: "from-orange-400 to-red-500"
        },
        {
            title: "Weather Forecast",
            description: "Real-time weather application using OpenWeatherMap API with location detection.",
            tags: ["React", "API", "Geolocation"],
            link: "#",
            color: "from-green-400 to-emerald-600"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Featured Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative bg-slate-800 rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition duration-300 border border-slate-700 shadow-xl">
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`}></div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                                <p className="text-slate-400 mb-6">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a href={project.link} className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                                    View Project
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="#" className="inline-block px-8 py-3 rounded-full border border-slate-600 text-slate-300 font-semibold hover:bg-slate-800 hover:text-white transition duration-300">
                        Show More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
