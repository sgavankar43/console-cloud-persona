
import React, { useState, useEffect } from 'react';
import { Lightbulb } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [isPlugged, setIsPlugged] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = theme === 'dark' || (!theme && prefersDark);
    
    setIsDark(shouldBeDark);
    setIsPlugged(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (isDark) {
      // Switch to light mode - drop the bulb
      setIsPlugged(false);
      setTimeout(() => {
        setIsDark(false);
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        setIsAnimating(false);
      }, 300);
    } else {
      // Switch to dark mode - plug in the bulb
      setIsPlugged(true);
      setTimeout(() => {
        setIsDark(true);
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        {/* Plug/Socket */}
        <div className="relative w-16 h-20 bg-gray-300 dark:bg-gray-700 rounded-lg border-2 border-gray-400 dark:border-gray-600 shadow-lg">
          {/* Socket holes */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <div className="w-2 h-3 bg-gray-800 dark:bg-gray-900 rounded-sm"></div>
            <div className="w-2 h-3 bg-gray-800 dark:bg-gray-900 rounded-sm"></div>
          </div>
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-gray-800 dark:bg-gray-900 rounded-full"></div>
        </div>

        {/* Lightbulb */}
        <div 
          className={`absolute left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-300 ${
            isPlugged ? 'top-0 -translate-y-2' : 'top-16 translate-y-2'
          } ${isAnimating ? 'animate-bounce' : ''}`}
          onClick={toggleTheme}
        >
          <div className="relative">
            <Lightbulb 
              className={`w-8 h-8 transition-all duration-300 ${
                isDark 
                  ? 'text-yellow-400 drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]' 
                  : 'text-gray-400'
              }`}
              fill={isDark ? "currentColor" : "none"}
            />
            {/* Cord */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-600 dark:bg-gray-400 h-4"></div>
            {/* Plug prongs */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex space-x-1">
              <div className="w-0.5 h-2 bg-gray-600 dark:bg-gray-400"></div>
              <div className="w-0.5 h-2 bg-gray-600 dark:bg-gray-400"></div>
            </div>
          </div>
        </div>

        {/* Glow effect when lit */}
        {isDark && (
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-2 w-12 h-12 bg-yellow-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
