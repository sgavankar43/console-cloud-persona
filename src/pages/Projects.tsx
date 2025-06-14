import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Navigation from '../components/Navigation';
import BulbHolder from '../components/BulbHolder';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Cloud Infrastructure Manager",
      description: "A comprehensive dashboard for managing cloud resources across multiple providers with cost optimization features.",
      technologies: ["React", "Node.js", "AWS", "Docker", "MongoDB"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "DevOps Pipeline Automation",
      description: "Automated CI/CD pipeline with monitoring, testing, and deployment to multiple environments.",
      technologies: ["Jenkins", "Kubernetes", "Terraform", "Python", "GitLab"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Microservices API Gateway",
      description: "Scalable API gateway with load balancing, rate limiting, and service discovery.",
      technologies: ["Go", "Redis", "PostgreSQL", "Consul", "Nginx"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Real-time Analytics Dashboard",
      description: "Live data visualization dashboard for monitoring application metrics and user behavior.",
      technologies: ["Vue.js", "D3.js", "Apache Kafka", "InfluxDB", "Grafana"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      <BulbHolder />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Projects
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in cloud computing, 
              web development, and software engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  project.featured ? 'ring-2 ring-purple-500 dark:ring-purple-400' : ''
                }`}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-1 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
