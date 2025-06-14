import React from 'react';
import { Code, Database, Cloud, Server, Palette, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import BulbHolder from '../components/BulbHolder';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "TypeScript", level: 85 },
        { name: "Go", level: 70 },
        { name: "C++", level: 75 }
      ]
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Google Cloud", level: 80 },
        { name: "Azure", level: 75 },
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 80 },
        { name: "Terraform", level: 75 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "MySQL", level: 80 },
        { name: "Elasticsearch", level: 70 },
        { name: "DynamoDB", level: 75 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Server,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Jenkins", level: 80 },
        { name: "GitLab CI", level: 85 },
        { name: "Nginx", level: 75 },
        { name: "Apache Kafka", level: 70 },
        { name: "Prometheus", level: 75 },
        { name: "Grafana", level: 80 }
      ]
    },
    {
      title: "Frontend",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "React", level: 90 },
        { name: "Vue.js", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "SASS", level: 75 }
      ]
    },
    {
      title: "Backend",
      icon: Zap,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "Django", level: 80 },
        { name: "FastAPI", level: 75 },
        { name: "GraphQL", level: 70 },
        { name: "REST APIs", level: 90 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      <BulbHolder />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-6`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
