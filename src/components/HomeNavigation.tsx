
import React from 'react';
import { Link } from 'react-router-dom';

const HomeNavigation = () => {
  const navItems = [
    { path: '/about', label: 'About', position: 'top-6 left-6' },
    { path: '/projects', label: 'Projects', position: 'top-6 right-32' },
    { path: '/skills', label: 'Skills', position: 'bottom-32 left-6' },
    { path: '/certifications', label: 'Certifications', position: 'bottom-6 left-32' },
    { path: '/contact', label: 'Contact', position: 'top-32 right-6' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`group absolute ${item.position} pointer-events-auto px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110`}
        >
          <span className="text-white group-hover:text-blue-300 transition-colors text-sm font-medium">
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default HomeNavigation;
