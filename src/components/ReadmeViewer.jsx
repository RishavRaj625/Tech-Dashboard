import React, { useState, useEffect } from 'react';

const CodeBlock = ({ code, language = 'html' }) => {
  const [copied, setCopied] = useState(false);
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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative rounded-xl overflow-hidden backdrop-blur-xl border transition-all duration-300 ${
      isDarkMode 
        ? 'bg-black/40 border-white/10' 
        : 'bg-white/40 border-black/10'
    }`}>
      <div className={`flex items-center justify-between px-4 py-3 border-b ${
        isDarkMode 
          ? 'bg-white/5 border-white/10' 
          : 'bg-black/5 border-black/10'
      }`}>
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <span className={`text-sm font-mono font-medium ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {language.toUpperCase()}
          </span>
        </div>
        <button
          onClick={copyToClipboard}
          className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
            copied 
              ? 'bg-green-500/80 text-white shadow-lg shadow-green-500/25' 
              : isDarkMode
                ? 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                : 'bg-black/10 text-gray-700 hover:bg-black/20 border border-black/20'
          }`}
        >
          {copied ? '✓ Copied!' : '📋 Copy'}
        </button>
      </div>
      <pre className="p-6 overflow-x-auto">
        <code className={`text-sm font-mono leading-relaxed ${
          isDarkMode ? 'text-gray-300' : 'text-gray-800'
        }`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

const ReadmeViewer = ({ readme }) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
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

  if (!readme) {
    return (
      <div 
        className="relative overflow-hidden rounded-2xl backdrop-blur-xl border transition-all duration-300"
        onMouseMove={handleMouseMove}
      >
        {/* Glassmorphism background */}
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-white/5 border-white/10' 
            : 'bg-white/60 border-white/30'
        } rounded-2xl border`} />
        
        {/* Cursor following gradient */}
        <div 
          className="absolute inset-0 opacity-40 rounded-2xl transition-all duration-300"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, ${
              isDarkMode 
                ? 'rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.15)' 
                : 'rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2)'
            }, transparent 70%)`
          }}
        />
        
        <div className="relative z-10 p-12 text-center">
          <div className="text-8xl mb-6 animate-float">📚</div>
          <h2 className={`text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent`}>
            Welcome to Tech Dashboard
          </h2>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Select a technology from the containers above to view its documentation, examples, and code snippets.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: '📖', text: 'Study comprehensive guides', delay: '0ms' },
              { icon: '💻', text: 'Copy code examples', delay: '200ms' },
              { icon: '🚀', text: 'Quick revision notes', delay: '400ms' }
            ].map((item, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl backdrop-blur-xl border transition-all duration-500 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-white/10 border-white/20 hover:bg-white/20' 
                    : 'bg-white/40 border-white/40 hover:bg-white/60'
                }`}
                style={{ animationDelay: item.delay }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className={`text-sm font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-float delay-1000"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-float delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-pink-400 rounded-full animate-float delay-3000"></div>
      </div>
    );
  }

  return (
    <div 
      className="relative overflow-hidden rounded-2xl backdrop-blur-xl border transition-all duration-300"
      onMouseMove={handleMouseMove}
    >
      {/* Glassmorphism background */}
      <div className={`absolute inset-0 ${
        isDarkMode 
          ? 'bg-white/5 border-white/10' 
          : 'bg-white/60 border-white/30'
      } rounded-2xl border`} />
      
      {/* Cursor following gradient */}
      <div 
        className="absolute inset-0 opacity-30 rounded-2xl transition-all duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, ${
            isDarkMode 
              ? 'rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2)' 
              : 'rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15)'
          }, transparent 70%)`
        }}
      />

      {/* Header */}
      <div className="relative z-10">
        <div className={`p-8 border-b ${
          isDarkMode ? 'border-white/10' : 'border-black/10'
        }`}>
          <div 
            className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 via-purple-600/80 to-blue-600/80 rounded-t-2xl"
            style={{
              background: `linear-gradient(135deg, 
                rgba(99, 102, 241, ${isDarkMode ? '0.6' : '0.8'}) 0%, 
                rgba(168, 85, 247, ${isDarkMode ? '0.6' : '0.8'}) 50%, 
                rgba(59, 130, 246, ${isDarkMode ? '0.6' : '0.8'}) 100%)`
            }}
          />
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
              {readme.title}
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">
              {readme.description}
            </p>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 p-8">
          {readme.sections.map((section, index) => (
            <div key={index} className="mb-12 last:mb-0 group">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-2xl backdrop-blur-xl flex items-center justify-center text-lg font-bold mr-4 transition-all duration-300 group-hover:scale-110 ${
                  isDarkMode
                    ? 'bg-gradient-to-br from-indigo-500/80 to-purple-500/80 text-white border border-white/20'
                    : 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25'
                }`}>
                  {index + 1}
                </div>
                <h2 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {section.title}
                </h2>
              </div>
              
              <p className={`text-lg mb-6 leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {section.content}
              </p>
              
              <CodeBlock code={section.code} language="html" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-3 h-3 bg-blue-400/50 rounded-full animate-float delay-1000"></div>
      <div className="absolute bottom-32 left-12 w-2 h-2 bg-purple-400/50 rounded-full animate-float delay-2000"></div>
      <div className="absolute top-40 left-20 w-1 h-1 bg-pink-400/50 rounded-full animate-float delay-3000"></div>
    </div>
  );
};

// Add custom animations
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(180deg); }
  }
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
`;
document.head.appendChild(style);

export default ReadmeViewer;