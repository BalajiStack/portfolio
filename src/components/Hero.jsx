const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <div className="relative mb-8">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-400/50">
                        {/* Replace with actual image later */}
                        <div className="w-full h-full bg-slate-700 flex items-center justify-center text-4xl">
                            👋
                        </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-slate-800 rounded-full p-2 border border-slate-600">
                        <span className="text-2xl">💻</span>
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Balaji</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl">
                    Full Stack Developer | UI/UX Enthusiast | Tech Explorer
                </h2>

                <p className="text-slate-500 mb-10 max-w-xl text-lg">
                    I build exceptional digital experiences that are fast, accessible, beautiful, and responsive.
                </p>

                <div className="flex gap-4">
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:-translate-y-1 transition duration-300"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-full border border-slate-600 text-slate-300 font-semibold hover:bg-slate-800 hover:text-white transition duration-300"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
