import React from 'react';
import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/yourusername',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/yourprofile',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: 'mailto:your.email@example.com',
      label: 'Email',
      color: 'hover:text-red-400'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-white font-bold text-xl hover:text-blue-400 transition-colors mx-auto md:mx-0"
            >
              <Code className="h-8 w-8" />
              <span>Portfolio</span>
            </button>
            <p className="mt-2 text-gray-400 text-sm">
              Full Stack Developer & Freelancer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-gray-800 rounded-lg text-gray-400 ${social.color} transition-colors hover:bg-gray-700`}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Full Stack Developer Portfolio. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>using React & TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;