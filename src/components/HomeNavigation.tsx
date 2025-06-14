
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Code, Award, FolderOpen, MessageCircle } from 'lucide-react';

const HomeNavigation = () => {
  const navItems = [
    { path: '/about', icon: User, label: 'About', position: 'top-6 left-6' },
    { path: '/projects', icon: FolderOpen, label: 'Projects', position: 'top-6 right-32' },
    { path: '/skills', icon: Code, label: 'Skills', position: 'bottom-32 left-6' },
    { path: '/certifications', icon: Award, label: 'Certifications', position: 'bottom-6 left-32' },
    { path: '/contact', icon: MessageCircle, label: 'Contact', position: 'top-32 right-6' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`group absolute ${item.position} pointer-events-auto p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110`}
        >
          <item.icon className="w-6 h-6 text-white group-hover:text-blue-300 transition-colors" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity mt-16 whitespace-nowrap bg-black/50 px-2 py-1 rounded">
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default HomeNavigation;
