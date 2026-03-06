const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">About Me</span>
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800 rounded-lg p-6 leading-relaxed text-slate-300 shadow-xl">
                                <p className="mb-4">
                                    Hello! I'm Balaji, a passionate developer based in India. I enjoy creating things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
                                </p>
                                <p>
                                    Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition duration-300">
                            <h3 className="text-4xl font-bold text-cyan-400 mb-2">3+</h3>
                            <p className="text-slate-400">Years Experience</p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition duration-300">
                            <h3 className="text-4xl font-bold text-blue-500 mb-2">50+</h3>
                            <p className="text-slate-400">Projects Completed</p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition duration-300">
                            <h3 className="text-4xl font-bold text-purple-500 mb-2">10+</h3>
                            <p className="text-slate-400">Happy Clients</p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-pink-500 transition duration-300">
                            <h3 className="text-4xl font-bold text-pink-500 mb-2">24/7</h3>
                            <p className="text-slate-400">Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
