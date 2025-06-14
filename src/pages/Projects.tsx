
import React from 'react';
import { ExternalLink, Github, Cloud, Server, Database } from 'lucide-react';
import Navigation from '../components/Navigation';
import ThemeToggle from '../components/ThemeToggle';

const Projects = () => {
  const projects = [
    {
      title: "Cloud Infrastructure Automation",
      description: "Automated cloud infrastructure deployment using Terraform and AWS services. Features auto-scaling, load balancing, and monitoring.",
      technologies: ["AWS", "Terraform", "Docker", "Kubernetes"],
      icon: Cloud,
      github: "#",
      demo: "#",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Microservices Architecture",
      description: "Scalable microservices application with API Gateway, service discovery, and distributed tracing.",
      technologies: ["Node.js", "Docker", "MongoDB", "Redis"],
      icon: Server,
      github: "#",
      demo: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud Database Migration Tool",
      description: "Tool for migrating databases to cloud platforms with zero downtime and data validation.",
      technologies: ["Python", "PostgreSQL", "AWS RDS", "Lambda"],
      icon: Database,
      github: "#",
      demo: "#",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <Navigation />
      <ThemeToggle />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore my cloud computing and software development projects
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                >
                  <div className={`h-32 bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Want to see more?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Check out my GitHub for more projects and contributions
              </p>
              <a
                href="#"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Github className="w-5 h-5" />
                <span>Visit My GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
