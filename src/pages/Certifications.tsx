
import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import ThemeToggle from '../components/ThemeToggle';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "SAA-C03-12345",
      status: "Active",
      description: "Validates expertise in architecting and deploying secure and robust applications on AWS technologies.",
      color: "from-orange-500 to-red-500",
      link: "#"
    },
    {
      title: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-PCA-67890",
      status: "Active",
      description: "Demonstrates ability to design, develop, and manage robust, secure, scalable, and dynamic solutions on Google Cloud.",
      color: "from-blue-500 to-green-500",
      link: "#"
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2023",
      credentialId: "AZ-900-54321",
      status: "Active",
      description: "Foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
      color: "from-blue-600 to-cyan-500",
      link: "#"
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "2023",
      credentialId: "DCA-98765",
      status: "Active",
      description: "Validates skills in containerization, Docker platform administration, and container orchestration.",
      color: "from-cyan-500 to-blue-500",
      link: "#"
    },
    {
      title: "Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2024",
      credentialId: "CKA-13579",
      status: "In Progress",
      description: "Demonstrates skills required to be a successful Kubernetes Administrator in industry today.",
      color: "from-purple-500 to-indigo-500",
      link: "#"
    }
  ];

  const upcomingCerts = [
    {
      title: "AWS Certified DevOps Engineer - Professional",
      target: "Q2 2024",
      description: "Advanced certification for DevOps engineering on AWS"
    },
    {
      title: "Certified Jenkins Engineer",
      target: "Q3 2024",
      description: "CI/CD pipeline expertise with Jenkins"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-900 dark:to-teal-900">
      <Navigation />
      <ThemeToggle />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional certifications in cloud computing and technology
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mt-6"></div>
          </div>

          {/* Current Certifications */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Current Certifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`h-24 bg-gradient-to-r ${cert.color} flex items-center justify-center`}>
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>Earned: {cert.date}</span>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-medium">ID:</span> {cert.credentialId}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span 
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            cert.status === 'Active' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                          }`}
                        >
                          {cert.status}
                        </span>
                      </div>
                    </div>
                    
                    <a
                      href={cert.link}
                      className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Verify Credential</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Certifications */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Upcoming Goals
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingCerts.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border-2 border-dashed border-gray-300 dark:border-gray-600"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                      <Award className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Target: {cert.target}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                    {certifications.filter(c => c.status === 'Active').length}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Active Certs</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    3
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Cloud Platforms</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    2024
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Latest Year</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                    2
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">In Progress</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
