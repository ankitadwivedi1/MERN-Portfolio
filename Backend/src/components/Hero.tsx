import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Download, Code, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  
  const texts = ['Full Stack Developer', 'MERN Stack Expert', 'Freelancer', 'Problem Solver'];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const text = texts[textIndex];
    let index = 0;
    setCurrentText('');
    
    const typeInterval = setInterval(() => {
      setCurrentText(text.slice(0, index + 1));
      index++;
      if (index >= text.length) {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [textIndex]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const FloatingElement = ({ delay = 0, children, className = '' }) => (
    <div 
      className={`animate-float ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: '6s',
        animationIterationCount: 'infinite'
      }}
    >
      {children}
    </div>
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement delay={0} className="absolute top-20 left-10 text-blue-200">
          <Code className="h-8 w-8" />
        </FloatingElement>
        <FloatingElement delay={1} className="absolute top-40 right-20 text-purple-200">
          <Sparkles className="h-6 w-6" />
        </FloatingElement>
        <FloatingElement delay={2} className="absolute bottom-40 left-20 text-blue-300">
          <div className="w-4 h-4 bg-blue-300 rounded-full"></div>
        </FloatingElement>
        <FloatingElement delay={3} className="absolute bottom-20 right-10 text-purple-300">
          <div className="w-6 h-6 bg-purple-300 rounded-full"></div>
        </FloatingElement>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className={`w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg transform transition-all duration-1000 hover:scale-110 hover:rotate-3 ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-45'}`}>
              <span className="animate-pulse">FD</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I am a{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative">
                <span className="inline-block min-w-[300px] text-left">
                  {currentText}
                  <span className="animate-blink">|</span>
                </span>
              </span>
            </h1>
            
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
                and a <strong className="text-gray-800">Freelancer</strong>. I have been working on the{' '}
                <span className="font-semibold text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text">MERN stack</span> for around{' '}
                <strong className="text-gray-800">2 years</strong>.
              </p>
              <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
                Check my <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-blue-600 hover:text-blue-700 font-semibold underline hover:no-underline transition-all">About section</button> to know more about me, 
                my <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="text-blue-600 hover:text-blue-700 font-semibold underline hover:no-underline transition-all">Projects</button> to see my work, 
                and <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-blue-600 hover:text-blue-700 font-semibold underline hover:no-underline transition-all">Contact</button> to reach out.
              </p>
            </div>
          </div>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 group"
            >
              <span className="flex items-center space-x-2">
                <span>Send me a message</span>
                <Sparkles className="h-4 w-4 group-hover:animate-spin" />
              </span>
            </button>
            
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-110 hover:rotate-3 group"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5 group-hover:animate-pulse" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-110 hover:rotate-3 group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5 group-hover:animate-pulse" />
              </a>
              <button className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-110 hover:rotate-3 group" aria-label="Download Resume">
                <Download className="h-5 w-5 group-hover:animate-bounce" />
              </button>
            </div>
          </div>

          <button
            onClick={scrollToAbout}
            className={`animate-bounce text-gray-400 hover:text-gray-600 transition-all duration-300 hover:scale-125 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ animationDelay: '1s' }}
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;