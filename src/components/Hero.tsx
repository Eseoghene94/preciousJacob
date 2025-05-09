import React, { useEffect, useRef } from 'react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const profileRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.1 });
    
    if (profileRef.current) {
      observer.observe(profileRef.current);
    }
    
    return () => {
      if (profileRef.current) {
        observer.unobserve(profileRef.current);
      }
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16">
      <div className="absolute inset-0 z-0">
        <div 
          className={`absolute inset-0 opacity-10 ${darkMode ? 'bg-gradient-to-br from-purple-700 via-teal-500 to-gray-800' : 'bg-gradient-to-br from-purple-400 via-teal-300 to-gray-200'}`}
        ></div>
        {darkMode ? (
          <div className="absolute top-20 right-20 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl opacity-20"></div>
        ) : (
          <div className="absolute top-20 right-20 w-72 h-72 bg-teal-400 rounded-full filter blur-3xl opacity-20"></div>
        )}
        {darkMode ? (
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-20"></div>
        ) : (
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl opacity-20"></div>
        )}
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">
                Precious Jacob
              </span>
            </h1>
            <div className="h-1 w-20 md:w-32 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto md:mx-0"></div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 dark:text-gray-300">
              UI/UX Designer & Visual Artist
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
              Crafting beautiful and intuitive digital experiences. Transforming complex problems into elegant solutions with a focus on user-centered design.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4 justify-center md:justify-start">
              <a 
                href="#portfolio" 
                className="px-8 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-full bg-transparent border-2 border-teal-500 text-teal-600 dark:text-teal-400 font-medium hover:bg-teal-500 hover:text-white dark:hover:text-white transition-all"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div 
            ref={profileRef}
            className="w-full md:w-1/2 flex justify-center opacity-0 translate-y-12 transition-all duration-1000 ease-out"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-teal-500 animate-pulse"></div>
              <img
                src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Precious Jacob"
                className="relative w-full h-full object-cover rounded-full p-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;