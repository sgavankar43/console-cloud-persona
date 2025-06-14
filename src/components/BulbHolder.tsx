
import React, { useState, useEffect } from 'react';
import { Lightbulb } from 'lucide-react';

const BulbHolder = () => {
  const [isDark, setIsDark] = useState(false);
  const [isHeld, setIsHeld] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = theme === 'dark' || (!theme && prefersDark);
    
    setIsDark(shouldBeDark);
    setIsHeld(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    setPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
    
    const holderElement = document.querySelector('.bulb-holder');
    if (!holderElement) return;
    
    const holderRect = holderElement.getBoundingClientRect();
    const distance = Math.sqrt(
      Math.pow(e.clientX - (holderRect.left + holderRect.width / 2), 2) +
      Math.pow(e.clientY - (holderRect.top + holderRect.height / 2), 2)
    );
    
    // If close enough to holder, snap to it
    if (distance < 60) {
      if (!isHeld && !isAnimating) {
        setIsAnimating(true);
        setIsHeld(true);
        setTimeout(() => {
          setIsDark(true);
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
          setIsAnimating(false);
        }, 300);
      }
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      
      const holderElement = document.querySelector('.bulb-holder');
      if (!holderElement) return;
      
      const holderRect = holderElement.getBoundingClientRect();
      const currentPosition = isDragging ? position : { x: 0, y: 0 };
      const distance = Math.sqrt(
        Math.pow(currentPosition.x - (holderRect.left + holderRect.width / 2), 2) +
        Math.pow(currentPosition.y - (holderRect.top + holderRect.height / 2), 2)
      );
      
      // If not close to holder, drop the bulb
      if (distance >= 60 && isHeld && !isAnimating) {
        setIsAnimating(true);
        setIsHeld(false);
        setTimeout(() => {
          setIsDark(false);
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
          setIsAnimating(false);
        }, 300);
      }
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, isHeld, isAnimating, position]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        {/* Bulb Holder */}
        <div className="bulb-holder relative w-16 h-12 bg-gray-300 dark:bg-gray-700 rounded-t-lg border-2 border-gray-400 dark:border-gray-600 shadow-lg">
          {/* Holder grip */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-400 dark:bg-gray-600 rounded"></div>
          <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-gray-500 dark:bg-gray-500 rounded"></div>
        </div>

        {/* Lightbulb */}
        <div 
          className={`absolute cursor-grab transition-all duration-300 ${
            isHeld ? 'left-1/2 top-8 transform -translate-x-1/2' : 'left-1/2 top-16 transform -translate-x-1/2 translate-y-4'
          } ${isAnimating ? 'animate-bounce' : ''} ${isDragging ? 'cursor-grabbing z-50 pointer-events-none' : ''}`}
          onMouseDown={handleMouseDown}
          style={isDragging ? { 
            position: 'fixed',
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
            zIndex: 9999
          } : {}}
        >
          <div className="relative pointer-events-auto">
            <Lightbulb 
              className={`w-8 h-8 transition-all duration-300 ${
                isDark 
                  ? 'text-yellow-400 drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]' 
                  : 'text-gray-400'
              }`}
              fill={isDark ? "currentColor" : "none"}
            />
          </div>
        </div>

        {/* Glow effect when lit */}
        {isDark && (
          <div className="absolute left-1/2 top-8 transform -translate-x-1/2 w-12 h-12 bg-yellow-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
        )}
      </div>
    </div>
  );
};

export default BulbHolder;
