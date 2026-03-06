const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Get In Touch</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-12">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="bg-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700">
                        <form className="space-y-6 text-left">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-slate-300 mb-2 font-medium">Name</label>
                                    <input type="text" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-slate-300 mb-2 font-medium">Email</label>
                                    <input type="email" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-slate-300 mb-2 font-medium">Subject</label>
                                <input type="text" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Project Inquiry" />
                            </div>
                            <div>
                                <label className="block text-slate-300 mb-2 font-medium">Message</label>
                                <textarea rows="4" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" placeholder="Hello..."></textarea>
                            </div>
                            <button type="button" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-1 transition duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="mt-16 flex justify-center space-x-8">
                        {/* Social Links placeholders */}
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
                    </div>
                </div>
            </div>

            <footer className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500">
                <p>© {new Date().getFullYear()} Balaji. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
