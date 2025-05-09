import React, { useState, useEffect, useRef } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Redesign",
    category: "UI Design",
    description: "A complete redesign of an e-commerce platform focusing on improving conversion rates and user experience.",
    image: "https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "Finance App",
    category: "Mobile App",
    description: "A financial management app designed with simplicity and clarity in mind, making complex financial data accessible.",
    image: "https://images.pexels.com/photos/6289075/pexels-photo-6289075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Healthcare Dashboard",
    category: "Dashboard",
    description: "An intuitive dashboard for healthcare professionals to monitor patient data and streamline workflows.",
    image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    title: "Travel Booking Platform",
    category: "Web Design",
    description: "A comprehensive travel booking platform with an emphasis on inspiring visual design and seamless booking flow.",
    image: "https://images.pexels.com/photos/5054541/pexels-photo-5054541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    title: "Food Delivery App",
    category: "Mobile App",
    description: "A food delivery app redesign focusing on improving order flow and restaurant discovery.",
    image: "https://images.pexels.com/photos/5408919/pexels-photo-5408919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    title: "Fitness Tracker",
    category: "UI Design",
    description: "A fitness tracking application designed to motivate users through gamification and visual progress tracking.",
    image: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const portfolioRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          
          const projectElements = document.querySelectorAll('.project-item');
          projectElements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add('translate-y-0', 'opacity-100');
            }, index * 100);
          });
        }
      });
    }, { threshold: 0.1 });
    
    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }
    
    return () => {
      if (portfolioRef.current) {
        observer.unobserve(portfolioRef.current);
      }
    };
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto"></div>
          <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Explore some of my recent design projects showcasing my skills and passion for creating beautiful, user-friendly interfaces.
          </p>
        </div>
        
        <div className="flex justify-center mb-12 flex-wrap gap-4">
          <button 
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full transition-all ${filter === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('UI Design')}
            className={`px-6 py-2 rounded-full transition-all ${filter === 'UI Design' ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
          >
            UI Design
          </button>
          <button 
            onClick={() => setFilter('Mobile App')}
            className={`px-6 py-2 rounded-full transition-all ${filter === 'Mobile App' ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
          >
            Mobile App
          </button>
          <button 
            onClick={() => setFilter('Web Design')}
            className={`px-6 py-2 rounded-full transition-all ${filter === 'Web Design' ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
          >
            Web Design
          </button>
          <button 
            onClick={() => setFilter('Dashboard')}
            className={`px-6 py-2 rounded-full transition-all ${filter === 'Dashboard' ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
          >
            Dashboard
          </button>
        </div>
        
        <div 
          ref={portfolioRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 transition-opacity duration-1000"
        >
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="project-item bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform opacity-0 translate-y-12"
            >
              <div className="relative overflow-hidden group h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="text-xs text-purple-300 font-semibold uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-xl text-white font-bold mt-1">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">{project.category}</span>
                  <button className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-full bg-transparent border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-medium hover:bg-purple-600 hover:text-white transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;