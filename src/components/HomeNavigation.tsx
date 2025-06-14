
import React from 'react';
import { Link } from 'react-router-dom';

const HomeNavigation = () => {
  const headerItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/certifications', label: 'Certifications' },
  ];

  const footerItems = [
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {/* Header Navigation */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 pointer-events-auto">
        <div className="flex space-x-6">
          {headerItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="group px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <span className="text-white group-hover:text-blue-300 transition-colors text-sm font-medium">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="absolute bottom-6 left-6 pointer-events-auto">
        <div className="flex space-x-4">
          {footerItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="group px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <span className="text-white group-hover:text-blue-300 transition-colors text-sm font-medium">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeNavigation;
