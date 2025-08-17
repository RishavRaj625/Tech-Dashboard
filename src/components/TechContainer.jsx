import React, { useState, useEffect } from 'react';

const TechContainer = ({ tech, isActive, onClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  const getIcon = (techName) => {
    const icons = {
      'HTML': '🌐',
      'CSS': '🎨',
      'JavaScript': '⚡',
      'React': '⚛️',
      'SQL': '🗄️',
      'Python': '🐍'
    };
    return icons[techName] || '📄';
  };

  const getGradientColors = (techName) => {
    const colors = {
      'HTML': { 
        light: 'from-orange-400/80 via-red-400/80 to-pink-400/80',
        dark: 'from-orange-500/60 via-red-500/60 to-pink-500/60'
      },
      'CSS': { 
        light: 'from-blue-400/80 via-indigo-400/80 to-purple-400/80',
        dark: 'from-blue-500/60 via-indigo-500/60 to-purple-500/60'
      },
      'JavaScript': { 
        light: 'from-yellow-400/80 via-orange-400/80 to-red-400/80',
        dark: 'from-yellow-500/60 via-orange-500/60 to-red-500/60'
      },
      'React': { 
        light: 'from-cyan-400/80 via-blue-400/80 to-indigo-400/80',
        dark: 'from-cyan-500/60 via-blue-500/60 to-indigo-500/60'
      },
      'SQL': { 
        light: 'from-green-400/80 via-teal-400/80 to-cyan-400/80',
        dark: 'from-green-500/60 via-teal-500/60 to-cyan-500/60'
      },
      'Python': { 
        light: 'from-green-400/80 via-blue-400/80 to-indigo-400/80',
        dark: 'from-green-500/60 via-blue-500/60 to-indigo-500/60'
      }
    };
    const colorSet = colors[techName] || { 
      light: 'from-gray-400/80 to-gray-500/80', 
      dark: 'from-gray-500/60 to-gray-600/60' 
    };
    return isDarkMode ? colorSet.dark : colorSet.light;
  };

  const handleClick = () => {
    // If this tech is already active, clicking it again will deactivate it
    if (isActive) {
      onClick(null); // Pass null to indicate deselection
    } else {
      onClick(tech); // Pass tech name to select it
    }
  };

  return (
    <div
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
        isActive 
          ? 'shadow-2xl shadow-blue-500/25' 
          : 'hover:shadow-xl hover:shadow-purple-500/20'
      }`}
    >
      {/* Glassmorphism background */}
      <div className={`absolute inset-0 backdrop-blur-xl border transition-all duration-300 rounded-2xl ${
        isDarkMode
          ? 'bg-white/10 border-white/20'
          : 'bg-white/40 border-white/30'
      }`} />
      
      {/* Animated gradient overlay that follows cursor */}
      <div 
        className={`absolute inset-0 opacity-0 transition-all duration-300 rounded-2xl ${
          isHovered || isActive ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}% ${mousePosition.y}%, ${
            isActive 
              ? 'rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3)'
              : 'rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2)'
          }, transparent 70%)`
        }}
      />

      {/* Active state gradient background */}
      {isActive && (
        <div className={`absolute inset-0 bg-gradient-to-br ${getGradientColors(tech)} rounded-2xl`} />
      )}

      {/* Content */}
      <div className="relative z-10 p-8">
        <div className="text-center">
          {/* Icon with floating animation */}
          <div className={`text-5xl mb-4 transition-all duration-300 ${
            isHovered ? 'animate-bounce' : ''
          } ${isActive ? 'drop-shadow-lg' : ''}`}>
            {getIcon(tech)}
          </div>
          
          <h3 className={`text-xl font-bold mb-2 transition-all duration-300 ${
            isActive 
              ? 'text-white drop-shadow-md' 
              : isDarkMode 
                ? 'text-white' 
                : 'text-gray-900'
          }`}>
            {tech}
          </h3>
          
          <p className={`text-sm transition-all duration-300 ${
            isActive 
              ? 'text-white/90' 
              : isDarkMode 
                ? 'text-gray-300' 
                : 'text-gray-600'
          }`}>
            {isActive ? 'Click to hide documentation' : 'Click to view documentation'}
          </p>

          {/* Floating particles effect on hover */}
          {isHovered && (
            <>
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
              <div className="absolute top-8 left-8 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" />
            </>
          )}
        </div>

        {/* Active indicator */}
        {isActive && (
          <div className="absolute top-4 right-4 flex space-x-1">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse delay-75" />
            <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse delay-150" />
          </div>
        )}

        {/* Hover glow effect */}
        <div className={`absolute inset-0 rounded-2xl transition-all duration-300 pointer-events-none ${
          isHovered 
            ? `bg-gradient-to-r ${getGradientColors(tech)} opacity-20 blur-xl` 
            : 'opacity-0'
        }`} />
      </div>
    </div>
  );
};

export default TechContainer;