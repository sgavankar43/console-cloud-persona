import React from 'react';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import BulbHolder from '../components/BulbHolder';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "2024",
      status: "Completed",
      credentialId: "AWS-ASA-123456",
      description: "Demonstrates knowledge of designing distributed systems on AWS platform with focus on scalability, reliability, and cost optimization.",
      skills: ["AWS", "Cloud Architecture", "EC2", "S3", "RDS", "Lambda"],
      image: "/placeholder.svg",
      verificationUrl: "#"
    },
    {
      id: 2,
      title: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "2023",
      status: "Completed",
      credentialId: "GCP-PCA-789012",
      description: "Validates ability to design, develop, and manage robust, secure, scalable, and dynamic solutions on Google Cloud Platform.",
      skills: ["GCP", "Kubernetes", "BigQuery", "Cloud Storage", "Compute Engine"],
      image: "/placeholder.svg",
      verificationUrl: "#"
    },
    {
      id: 3,
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      status: "Completed",
      credentialId: "CKA-345678",
      description: "Demonstrates skills in managing Kubernetes clusters, including installation, configuration, and troubleshooting.",
      skills: ["Kubernetes", "Docker", "Container Orchestration", "DevOps"],
      image: "/placeholder.svg",
      verificationUrl: "#"
    },
    {
      id: 4,
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "In Progress",
      status: "In Progress",
      credentialId: "",
      description: "Foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
      skills: ["Azure", "Cloud Computing", "Virtual Machines", "Storage"],
      image: "/placeholder.svg",
      verificationUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      <BulbHolder />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional certifications that validate my expertise in cloud computing and related technologies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                        <Award className="w-6 h-6 text-orange-600 dark:text-orange-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {cert.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${
                        cert.status === 'Completed' 
                          ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300'
                          : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300'
                      }`}>
                        {cert.status === 'Completed' ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <Calendar className="w-4 h-4" />
                        )}
                        <span>{cert.status}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                    
                    {cert.verificationUrl && cert.status === 'Completed' && (
                      <a
                        href={cert.verificationUrl}
                        className="flex items-center space-x-1 text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Verify</span>
                      </a>
                    )}
                  </div>

                  {cert.credentialId && (
                    <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                      Credential ID: {cert.credentialId}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
