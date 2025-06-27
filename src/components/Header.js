import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <header className="bg-indigo-600 dark:bg-indigo-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="ToolKitHub Logo" className="h-10" />
          <span className="text-2xl font-bold">ToolKitHub</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-6">
            <Link to="/text-tools" className="hover:text-indigo-200 transition">Text Tools</Link>
            <Link to="/dev-tools" className="hover:text-indigo-200 transition">Dev Tools</Link>
            <Link to="/calculators" className="hover:text-indigo-200 transition">Calculators</Link>
            <Link to="/fun-tools" className="hover:text-indigo-200 transition">Fun Tools</Link>
          </nav>

          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-indigo-700 transition"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-indigo-700 dark:bg-indigo-900 pb-4 px-4">
          <nav className="flex flex-col space-y-3">
            <Link 
              to="/text-tools" 
              className="hover:text-indigo-200 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Text Tools
            </Link>
            <Link 
              to="/dev-tools" 
              className="hover:text-indigo-200 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dev Tools
            </Link>
            <Link 
              to="/calculators" 
              className="hover:text-indigo-200 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Calculators
            </Link>
            <Link 
              to="/fun-tools" 
              className="hover:text-indigo-200 transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Fun Tools
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;