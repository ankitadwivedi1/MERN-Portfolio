import React from 'react';
import { Code, Database, Server, Globe, Github as Git, Cpu } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'MongoDB', icon: Database, color: 'text-green-600' },
    { name: 'Express.js', icon: Server, color: 'text-gray-600' },
    { name: 'React', icon: Code, color: 'text-blue-600' },
    { name: 'Node.js', icon: Cpu, color: 'text-green-600' },
    { name: 'Git', icon: Git, color: 'text-orange-600' },
    { name: 'REST APIs', icon: Globe, color: 'text-purple-600' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Full Stack Developer & Freelancer
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Full Stack Developer with <strong>2 years of hands-on experience</strong> in 
              building modern web applications using the MERN stack. My journey in web development 
              started with a curiosity for creating digital solutions that make a difference.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              As a <strong>freelancer</strong>, I've had the opportunity to work with diverse clients, 
              delivering custom web applications that meet their unique business needs. I specialize 
              in creating responsive, user-friendly interfaces and robust backend systems.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm always eager to learn new technologies and stay updated with the latest industry 
              trends. My goal is to write clean, efficient code and create seamless user experiences.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Technical Skills</h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    <skill.icon className={`h-6 w-6 ${skill.color} group-hover:scale-110 transition-transform`} />
                    <span className="font-medium text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Experience Highlights</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  2+ years of MERN stack development
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Multiple successful freelance projects
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Strong focus on responsive design and UX
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Experience with RESTful API development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;