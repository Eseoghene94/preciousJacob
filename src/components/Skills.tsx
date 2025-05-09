import React, { useEffect, useRef } from "react";

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: "UI Design", level: 95, color: "from-purple-600 to-pink-500" },
  { name: "UX Research", level: 85, color: "from-teal-500 to-blue-500" },
  { name: "Figma", level: 90, color: "from-purple-500 to-teal-400" },
  {
    name: "Adobe Creative Suite",
    level: 85,
    color: "from-red-500 to-amber-500",
  },
  { name: "Prototyping", level: 90, color: "from-blue-600 to-purple-600" },
  { name: "Wireframing", level: 95, color: "from-teal-400 to-green-500" },
  { name: "User Testing", level: 80, color: "from-amber-500 to-orange-600" },
  {
    name: "Information Architecture",
    level: 85,
    color: "from-indigo-500 to-blue-500",
  },
];

const softSkills = [
  { name: "Communication", icon: "🗣️" },
  { name: "Problem Solving", icon: "🧩" },
  { name: "Teamwork", icon: "👥" },
  { name: "Adaptability", icon: "🔄" },
  { name: "Time Management", icon: "⏱️" },
  { name: "Attention to Detail", icon: "🔍" },
];

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const softSkillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            if (entry.target === skillsRef.current) {
              const bars = document.querySelectorAll(".skill-bar");
              bars.forEach((bar, index) => {
                setTimeout(() => {
                  bar.classList.add("skill-bar-fill");
                }, index * 150);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    if (softSkillsRef.current) {
      observer.observe(softSkillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
      if (softSkillsRef.current) {
        observer.unobserve(softSkillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto"></div>
          <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            I've developed a diverse set of skills to create comprehensive
            design solutions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div
            ref={skillsRef}
            className="w-full md:w-2/3 opacity-0 transition-opacity duration-1000"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`skill-bar h-full bg-gradient-to-r ${skill.color} w-0`}
                      style={{ width: "0%" }}
                      data-width={`${skill.level}%`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={softSkillsRef}
            className="w-full md:w-1/3 opacity-0 transition-opacity duration-1000 delay-500"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center space-x-4"
                >
                  <div className="text-2xl">{skill.icon}</div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-purple-600 to-teal-500 p-6 rounded-lg text-white">
              <h4 className="text-xl font-bold mb-2">Design Philosophy</h4>
              <p>
                I believe good design solves problems, great design anticipates
                them. My approach combines aesthetics with functionality, always
                putting the user at the center of the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
