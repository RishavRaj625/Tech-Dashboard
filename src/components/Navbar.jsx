import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Set dark mode by default on component mount
    document.documentElement.classList.add('dark');

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    };

    const navbar = document.querySelector('.navbar-container');
    navbar?.addEventListener('mousemove', handleMouseMove);

    return () => {
      navbar?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleTitleClick = () => {
    window.location.reload();
  };

  return (
    <nav className={`navbar-container relative overflow-hidden backdrop-blur-xl border-b transition-all duration-300 ${
      isDarkMode 
        ? 'bg-black/20 border-white/10 text-white' 
        : 'bg-white/20 border-black/10 text-gray-900'
    }`}>
      {/* Animated background gradient that follows cursor */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, ${
            isDarkMode 
              ? 'rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.15)' 
              : 'rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15)'
          }, transparent 70%)`
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-xl backdrop-blur-xl flex items-center justify-center transition-all duration-300 ${
              isDarkMode 
                ? 'bg-white/10 border border-white/20' 
                : 'bg-black/10 border border-black/20'
            }`}>
              <span className="text-xl">🚀</span>
            </div>
            <h1 
              onClick={handleTitleClick}
              className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              Tech Dashboard
            </h1>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-xl transition-all duration-300 ${
              isDarkMode 
                ? 'bg-white/10 border border-white/20' 
                : 'bg-black/10 border border-black/20'
            }`}>
              <span className="text-sm font-medium">Learn</span>
              <span className={isDarkMode ? 'text-blue-300' : 'text-blue-600'}>•</span>
              <span className="text-sm font-medium">Practice</span>
              <span className={isDarkMode ? 'text-purple-300' : 'text-purple-600'}>•</span>
              <span className="text-sm font-medium">Master</span>
            </div>
            
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className={`relative w-12 h-12 rounded-full backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 ${
                isDarkMode 
                  ? 'bg-white/10 border border-white/20 hover:bg-white/20' 
                  : 'bg-black/10 border border-black/20 hover:bg-black/20'
              }`}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 text-lg">
                {isDarkMode ? '☀️' : '🌙'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;