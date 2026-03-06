const Skills = () => {
    const skills = [
        { name: "React", level: 90, color: "bg-cyan-400" },
        { name: "JavaScript", level: 85, color: "bg-yellow-400" },
        { name: "Tailwind CSS", level: 95, color: "bg-teal-400" },
        { name: "Node.js", level: 80, color: "bg-green-500" },
        { name: "Python", level: 75, color: "bg-blue-500" },
        { name: "SQL", level: 70, color: "bg-purple-500" },
    ];

    return (
        <section id="skills" className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">My Skills</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {skills.map((skill) => (
                        <div key={skill.name} className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                            <div className="flex justify-between mb-2">
                                <span className="text-slate-300 font-semibold">{skill.name}</span>
                                <span className="text-slate-400">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-2.5">
                                <div
                                    className={`h-2.5 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
