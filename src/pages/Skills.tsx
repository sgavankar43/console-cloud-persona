
import React from 'react';
import { Code, Cloud, Database, Server, Globe, Cpu } from 'lucide-react';
import Navigation from '../components/Navigation';
import ThemeToggle from '../components/ThemeToggle';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90, color: "bg-blue-500" },
        { name: "JavaScript", level: 85, color: "bg-yellow-500" },
        { name: "Java", level: 80, color: "bg-red-500" },
        { name: "C++", level: 75, color: "bg-purple-500" },
        { name: "TypeScript", level: 80, color: "bg-blue-600" },
      ]
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 85, color: "bg-orange-500" },
        { name: "Google Cloud", level: 75, color: "bg-green-500" },
        { name: "Azure", level: 70, color: "bg-blue-500" },
        { name: "Docker", level: 90, color: "bg-cyan-500" },
        { name: "Kubernetes", level: 80, color: "bg-indigo-500" },
      ]
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 85, color: "bg-blue-600" },
        { name: "MongoDB", level: 80, color: "bg-green-600" },
        { name: "Redis", level: 75, color: "bg-red-600" },
        { name: "MySQL", level: 80, color: "bg-orange-600" },
      ]
    },
    {
      title: "Backend Technologies",
      icon: Server,
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-500" },
        { name: "Express.js", level: 80, color: "bg-gray-600" },
        { name: "Django", level: 75, color: "bg-green-700" },
        { name: "FastAPI", level: 80, color: "bg-teal-500" },
      ]
    },
    {
      title: "Frontend Technologies",
      icon: Globe,
      skills: [
        { name: "React", level: 85, color: "bg-blue-400" },
        { name: "Vue.js", level: 70, color: "bg-green-400" },
        { name: "HTML/CSS", level: 90, color: "bg-orange-400" },
        { name: "Tailwind CSS", level: 85, color: "bg-cyan-400" },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Cpu,
      skills: [
        { name: "Git", level: 90, color: "bg-orange-500" },
        { name: "Jenkins", level: 75, color: "bg-blue-700" },
        { name: "Terraform", level: 80, color: "bg-purple-600" },
        { name: "Linux", level: 85, color: "bg-yellow-600" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
      <Navigation />
      <ThemeToggle />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Skills
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technical expertise in cloud computing and software development
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={categoryIndex}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400 text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional info */}
          <div className="mt-16 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Always Learning
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Technology evolves rapidly, and I'm committed to continuous learning. 
                Currently exploring serverless architectures, machine learning in the cloud, 
                and advanced container orchestration techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
