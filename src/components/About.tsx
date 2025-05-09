import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const statRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.1 });
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    if (statRef.current) {
      observer.observe(statRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12">
          <div 
            ref={aboutRef}
            className="w-full md:w-1/2 opacity-0 translate-y-12 transition-all duration-1000 ease-out"
          >
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              I'm a passionate UI/UX Designer with over 5 years of experience creating visually appealing and user-centered digital experiences. My expertise lies in transforming complex challenges into intuitive, accessible designs that delight users.
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              With a background in customer service, I bring a unique perspective to design that focuses on understanding user needs, empathy, and clear communication. I believe great design happens at the intersection of aesthetics, functionality, and business objectives.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              When I'm not designing, you can find me exploring new creative tools, attending design workshops, or volunteering with local design communities to mentor aspiring designers.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 font-medium">UI Design</span>
              <span className="px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 font-medium">UX Research</span>
              <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium">Wireframing</span>
              <span className="px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-medium">Prototyping</span>
              <span className="px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 font-medium">Visual Design</span>
            </div>
          </div>
          
          <div 
            ref={statRef}
            className="w-full md:w-1/2 grid grid-cols-2 gap-6 opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-300"
          >
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">5+</div>
              <div className="text-lg text-gray-700 dark:text-gray-300">Years Experience</div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">50+</div>
              <div className="text-lg text-gray-700 dark:text-gray-300">Projects Completed</div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">20+</div>
              <div className="text-lg text-gray-700 dark:text-gray-300">Happy Clients</div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">3</div>
              <div className="text-lg text-gray-700 dark:text-gray-300">Design Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;