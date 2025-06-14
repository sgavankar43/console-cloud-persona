
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Code, Award, FolderOpen } from 'lucide-react';

const Navigation = ({ isHomePage = false }: { isHomePage?: boolean }) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: User, label: 'About' },
    { path: '/projects', icon: FolderOpen, label: 'Projects' },
    { path: '/skills', icon: Code, label: 'Skills' },
    { path: '/certifications', icon: Award, label: 'Certifications' },
  ];

  if (isHomePage) {
    return (
      <div className="fixed inset-0 pointer-events-none z-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex space-x-8 pointer-events-auto">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group relative p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <item.icon className="w-6 h-6 text-white group-hover:text-blue-300 transition-colors" />
                <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
