import React, { useEffect, useRef } from 'react';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

const experience: TimelineItem[] = [
  {
    year: "2022 - Present",
    title: "Senior UI/UX Designer",
    company: "Creative Solutions Inc.",
    description: "Leading design strategy for enterprise clients. Directed a team of 3 designers on multiple high-profile projects. Introduced design system that improved design consistency by 40%."
  },
  {
    year: "2020 - 2022",
    title: "UI Designer",
    company: "Digital Innovations",
    description: "Created UI designs for web and mobile applications. Collaborated with development teams to ensure design implementation accuracy. Conducted usability testing and incorporated feedback into design iterations."
  },
  {
    year: "2018 - 2020",
    title: "Customer Service & Design Specialist",
    company: "TechConnect",
    description: "Provided exceptional customer service while developing visual assets and UI elements. Redesigned customer-facing materials, improving customer satisfaction by 25%."
  }
];

const education: TimelineItem[] = [
  {
    year: "2021 - 2022",
    title: "UX Design Certification",
    company: "Google",
    description: "Specialized training in user experience design processes including user research, wireframing, prototyping, and usability testing."
  },
  {
    year: "2016 - 2018",
    title: "Associate Degree in Graphic Design",
    company: "Institute of Design",
    description: "Focus on digital design, typography, color theory, and composition. Graduated with honors."
  }
];

const Experience: React.FC = () => {
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          
          if (entry.target === experienceRef.current) {
            const items = document.querySelectorAll('.experience-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('translate-x-0', 'opacity-100');
              }, index * 200);
            });
          }
          
          if (entry.target === educationRef.current) {
            const items = document.querySelectorAll('.education-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('translate-x-0', 'opacity-100');
              }, index * 200);
            });
          }
        }
      });
    }, { threshold: 0.1 });
    
    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }
    
    if (educationRef.current) {
      observer.observe(educationRef.current);
    }
    
    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto"></div>
          <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            My professional journey and educational background that shaped my design expertise.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Professional Experience</h3>
            <div 
              ref={experienceRef}
              className="relative pl-8 opacity-0 transition-opacity duration-1000"
            >
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-teal-500 to-purple-600"></div>
              
              {experience.map((item, index) => (
                <div 
                  key={index}
                  className="experience-item relative mb-12 pl-8 opacity-0 translate-x-8 transition-all duration-1000"
                >
                  {/* Dot on the line */}
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-purple-600 dark:border-purple-500 -translate-x-1/2"></div>
                  
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                    <span className="inline-block px-3 py-1 text-sm text-white bg-gradient-to-r from-purple-600 to-teal-500 rounded-full mb-4">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">{item.title}</h4>
                    <p className="text-purple-600 dark:text-teal-400 font-medium mb-4">{item.company}</p>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">Education & Certifications</h3>
            <div 
              ref={educationRef}
              className="relative pl-8 opacity-0 transition-opacity duration-1000"
            >
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-purple-600 to-teal-500"></div>
              
              {education.map((item, index) => (
                <div 
                  key={index}
                  className="education-item relative mb-12 pl-8 opacity-0 translate-x-8 transition-all duration-1000"
                >
                  {/* Dot on the line */}
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-teal-500 dark:border-teal-400 -translate-x-1/2"></div>
                  
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                    <span className="inline-block px-3 py-1 text-sm text-white bg-gradient-to-r from-teal-500 to-purple-600 rounded-full mb-4">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">{item.title}</h4>
                    <p className="text-teal-600 dark:text-purple-400 font-medium mb-4">{item.company}</p>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
              
              <div className="education-item relative mb-12 pl-8 opacity-0 translate-x-8 transition-all duration-1000">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-teal-500 dark:border-teal-400 -translate-x-1/2"></div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Additional Certifications</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mr-3"></span>
                      Adobe Certified Professional
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 dark:bg-teal-400 rounded-full mr-3"></span>
                      Professional Scrum Master I
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mr-3"></span>
                      Interaction Design Foundation Member
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;