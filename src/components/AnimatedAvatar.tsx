
import React, { useEffect, useState } from 'react';

const AnimatedAvatar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('avatar')?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        setMousePosition({
          x: (e.clientX - centerX) / 10,
          y: (e.clientY - centerY) / 10,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      <div
        id="avatar"
        className={`relative w-48 h-48 transition-all duration-300 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(${isHovered ? 1.1 : 1})`,
        }}
      >
        {/* Animated rings */}
        <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-2 border-purple-500/30 animate-spin" style={{ animationDirection: 'reverse' }}></div>
        <div className="absolute inset-4 rounded-full border-2 border-cyan-500/30 animate-pulse"></div>
        
        {/* Avatar container */}
        <div className="absolute inset-6 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 p-1 shadow-2xl">
          <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
            {/* Animated character */}
            <div className="relative w-24 h-24">
              {/* Head */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-full border-2 border-yellow-400">
                {/* Eyes */}
                <div className="absolute top-3 left-2 w-2 h-2 bg-black rounded-full animate-pulse"></div>
                <div className="absolute top-3 right-2 w-2 h-2 bg-black rounded-full animate-pulse"></div>
                {/* Smile */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-black rounded-full"></div>
              </div>
              
              {/* Body */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-lg">
                {/* Arms */}
                <div className="absolute -left-2 top-2 w-4 h-1 bg-yellow-200 rounded-full rotate-12 animate-bounce"></div>
                <div className="absolute -right-2 top-2 w-4 h-1 bg-yellow-200 rounded-full -rotate-12 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              {/* Legs */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-1">
                <div className="w-2 h-4 bg-blue-800 rounded-full animate-pulse"></div>
                <div className="w-2 h-4 bg-blue-800 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute -top-4 -left-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute -top-2 -right-6 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute -bottom-4 -right-2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-2 -left-6 w-1 h-1 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.7s' }}></div>
      </div>
    </div>
  );
};

export default AnimatedAvatar;
