import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import TechContainer from './TechContainer';
import ReadmeViewer from './ReadmeViewer';
import { htmlReadme } from './readme-files/html-readme';
import { reactReadme } from './readme-files/react-readme';
import { jsReadme } from './readme-files/js-readme';

const Dashboard = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'SQL', 'Python'];

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
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100
    });
  };

  // Fixed toggle handler - this is the key change!
  const handleTechSelection = (tech) => {
    if (tech === selectedTech) {
      // If clicking the same tech that's already selected, deselect it
      setSelectedTech(null);
    } else {
      // Otherwise, select the new tech
      setSelectedTech(tech);
    }
  };
  
  // Function to get readme content for each tech
  const getReadmeContent = (tech) => {
    switch(tech) {
      case 'HTML':
        return htmlReadme;
      case 'CSS':
        // return cssReadme; // Will be added later
        return null;
      case 'JavaScript':
        return jsReadme;
        // return null;
      case 'React':
         return reactReadme; // Will be added later
      case 'SQL':
        // return sqlReadme; // Will be added later
        return null;
      case 'Python':
        // return pythonReadme; // Will be added later
        return null;
      default:
        return null;
    }
  };

  return (
    <div 
      className={`min-h-screen relative overflow-hidden transition-all duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20' 
          : 'bg-gradient-to-br from-blue-50 via-purple-50/50 to-pink-50/30'
      }`}
      onMouseMove={handleMouseMove}
    >
      {/* Animated background with cursor following effect */}
      <div 
        className="fixed inset-0 pointer-events-none transition-all duration-700"
        style={{
          background: `
            radial-gradient(1200px circle at ${mousePosition.x}% ${mousePosition.y}%, ${
              isDarkMode 
                ? 'rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.05), transparent 50%' 
                : 'rgba(59, 130, 246, 0.08), rgba(147, 51, 234, 0.05), transparent 50%'
            }),
            ${isDarkMode 
              ? 'linear-gradient(45deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 50%, rgba(15, 23, 42, 0.8) 100%)'
              : 'linear-gradient(45deg, rgba(248, 250, 252, 0.8) 0%, rgba(241, 245, 249, 0.6) 50%, rgba(248, 250, 252, 0.8) 100%)'
            }
          `
        }}
      />

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-float opacity-30 ${
              isDarkMode ? 'bg-blue-400' : 'bg-purple-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <Navbar />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tech Containers Grid */}
        <div className="mb-8">
          {/* Section Header with glassmorphism */}
          <div className={`text-center mb-8 p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
            isDarkMode 
              ? 'bg-white/5 border-white/10' 
              : 'bg-white/30 border-white/20'
          }`}>
            <h2 className={`text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse`}>
              Choose a Technology to Learn
            </h2>
            <p className={`text-lg ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Select any technology below to explore comprehensive documentation and examples
            </p>
          </div>

          {/* Technology Grid - Updated with the correct handler */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <TechContainer
                key={tech}
                tech={tech}
                isActive={selectedTech === tech}
                onClick={handleTechSelection} // Changed from onClick={() => setSelectedTech(tech)}
              />
            ))}
          </div>
        </div>

        {/* Readme Viewer */}
        <div className="mb-8">
          <ReadmeViewer 
            readme={selectedTech ? getReadmeContent(selectedTech) : null} 
          />
        </div>

        {/* Status Message for Upcoming Technologies with glassmorphism */}
        {selectedTech && !getReadmeContent(selectedTech) && (
          <div className={`relative overflow-hidden rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
            isDarkMode 
              ? 'bg-blue-500/10 border-blue-400/20' 
              : 'bg-blue-50/80 border-blue-200/50'
          }`}>
            {/* Gradient overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400" />
            
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full backdrop-blur-xl ${
                  isDarkMode 
                    ? 'bg-blue-500/20 border border-blue-400/30' 
                    : 'bg-blue-100/80 border border-blue-200'
                }`}>
                  <span className="text-2xl">🚧</span>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-1 ${
                    isDarkMode ? 'text-blue-300' : 'text-blue-700'
                  }`}>
                    Coming Soon!
                  </h3>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-blue-200' : 'text-blue-600'
                  }`}>
                    <strong>{selectedTech} documentation</strong> is being prepared. 
                    HTML documentation is currently available for study.
                  </p>
                </div>
              </div>
            </div>

            {/* Animated background effect */}
            <div className={`absolute inset-0 opacity-20 ${
              isDarkMode ? 'bg-blue-400/10' : 'bg-blue-400/5'
            } animate-pulse`} />
          </div>
        )}
      </div>

      {/* Corner decorative elements */}
      <div className="fixed top-20 right-20 w-32 h-32 pointer-events-none">
        <div className={`w-full h-full rounded-full opacity-20 animate-pulse ${
          isDarkMode 
            ? 'bg-gradient-to-br from-blue-400/20 to-purple-400/20' 
            : 'bg-gradient-to-br from-blue-300/30 to-purple-300/30'
        }`} />
      </div>
      
      <div className="fixed bottom-20 left-20 w-24 h-24 pointer-events-none">
        <div className={`w-full h-full rounded-full opacity-30 animate-bounce ${
          isDarkMode 
            ? 'bg-gradient-to-br from-purple-400/20 to-pink-400/20' 
            : 'bg-gradient-to-br from-purple-300/30 to-pink-300/30'
        }`} />
      </div>
    </div>
  );
};

// Add custom animations if not already present
if (!document.querySelector('#dashboard-animations')) {
  const style = document.createElement('style');
  style.id = 'dashboard-animations';
  style.textContent = `
    @keyframes float {
      0%, 100% { 
        transform: translateY(0px) rotate(0deg); 
        opacity: 0.3;
      }
      50% { 
        transform: translateY(-20px) rotate(180deg); 
        opacity: 0.6;
      }
    }
    .animate-float {
      animation: float 4s ease-in-out infinite;
    }
  `;
  document.head.appendChild(style);
}


export default Dashboard;
