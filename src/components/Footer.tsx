import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div>
            <a href="#" className="text-2xl font-bold text-purple-500 dark:text-teal-400">
              Precious<span className="text-teal-500 dark:text-purple-400">.Design</span>
            </a>
            <p className="mt-2 text-sm">
              Creating beautiful digital experiences that delight users.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors">About</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-teal-400 transition-colors">Skills</a></li>
                <li><a href="#portfolio" className="text-gray-400 hover:text-teal-400 transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-teal-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">UI Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">UX Research</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Wireframing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Prototyping</a></li>
                <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Design Systems</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Precious Jacob. All rights reserved.
          </p>
          <div className="text-sm">
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors mr-6">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;