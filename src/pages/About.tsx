
import React from 'react';
import { Download, MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react';
import Navigation from '../components/Navigation';
import ThemeToggle from '../components/ThemeToggle';

const About = ({ isStandalone = false }: { isStandalone?: boolean }) => {
  const handleResumeDownload = () => {
    // This would typically trigger a download of your resume
    console.log('Resume download triggered');
    // You can implement actual download logic here
  };

  const content = (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Image and Resume */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative mb-8">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for your actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold">CS</div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
            </div>

            <button
              onClick={handleResumeDownload}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Download className="w-5 h-5" />
              <span className="font-semibold">Download Resume</span>
            </button>
          </div>

          {/* Right side - About content */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Hello, I'm a CS Student! 👋
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm currently pursuing my Computer Science degree with a strong passion for 
                cloud computing technologies. I love building scalable applications and 
                exploring the latest in cloud infrastructure, DevOps, and distributed systems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                My journey in computer science has led me to develop expertise in various 
                programming languages, cloud platforms, and modern development frameworks. 
                I'm always eager to learn new technologies and apply them to solve real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring the latest tech trends, 
                contributing to open-source projects, or working on personal projects 
                that challenge my skills and creativity.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span>Your Location</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <span>your.email@example.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-6">
                <a href="#" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a href="#" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return isStandalone ? (
    <div>
      <Navigation />
      <ThemeToggle />
      <div className="pt-16">
        {content}
      </div>
    </div>
  ) : (
    content
  );
};

export default About;
