
import React from 'react';
import { Github, Linkedin, Mail, Trophy, Code } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
    { icon: Trophy, href: 'https://unstop.com/u/yourusername', label: 'Unstop' },
    { icon: Code, href: 'https://leetcode.com/yourusername', label: 'LeetCode' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-20 flex flex-col space-y-4">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <link.icon className="w-5 h-5 text-white group-hover:text-blue-300 transition-colors" />
          <span className="absolute right-14 top-1/2 transform -translate-y-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded whitespace-nowrap">
            {link.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
