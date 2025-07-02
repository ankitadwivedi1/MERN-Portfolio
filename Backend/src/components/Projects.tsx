import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce application with user authentication, product catalog, shopping cart, and secure payment integration. Built with React, Node.js, Express, and MongoDB.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      liveUrl: 'https://your-ecommerce-demo.com',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and project tracking. Features drag-and-drop functionality and responsive design.',
      technologies: ['React', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
      githubUrl: 'https://github.com/yourusername/task-manager',
      liveUrl: 'https://your-taskmanager-demo.com',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024'
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media analytics dashboard with data visualization, user engagement metrics, and automated reporting features. Built for digital marketing agencies.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
      githubUrl: 'https://github.com/yourusername/social-dashboard',
      liveUrl: 'https://your-dashboard-demo.com',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development using the MERN stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm text-gray-600">
                  <Calendar className="h-3 w-3" />
                  <span>{project.date}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center space-x-1 mb-2">
                    <Tag className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">Technologies:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors font-medium"
          >
            <Github className="h-5 w-5" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;