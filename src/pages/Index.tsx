
import React, { useEffect, useRef } from 'react';
import AnimatedAvatar from '../components/AnimatedAvatar';
import Navigation from '../components/Navigation';
import ThemeToggle from '../components/ThemeToggle';
import CursorFollower from '../components/CursorFollower';
import About from './About';

const Index = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallax = document.querySelector('.parallax-bg') as HTMLElement;
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-950 dark:to-black relative overflow-hidden">
      <CursorFollower />
      <ThemeToggle />
      
      {/* Animated background */}
      <div className="parallax-bg absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in">
            Welcome
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            CS Undergraduate Student
          </p>
          <p className="text-lg text-blue-300 animate-fade-in" style={{ animationDelay: '1s' }}>
            Passionate about Cloud Computing
          </p>
        </div>

        <div className="mb-12 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <AnimatedAvatar />
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '2s' }}>
          <button
            onClick={scrollToAbout}
            className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 mb-8"
          >
            Learn More About Me
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <Navigation isHomePage={true} />

      {/* About section */}
      <div ref={aboutRef}>
        <About />
      </div>
    </div>
  );
};

export default Index;
