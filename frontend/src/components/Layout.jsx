import React from 'react';
import Navigation from './Navigation';
import SecurityAlert from './SecurityAlert';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white transition-colors duration-500">
      <SecurityAlert />
      <Navigation />
      
      {/* Main content */}
      <main className="relative">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-black border-t border-green-400/30 py-6 sm:py-8 retro-section transition-colors duration-500">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-xs sm:text-sm mb-2 md:mb-0 font-mono transition-colors duration-500 text-center md:text-left">
              © 2025 soldier0x00. Built with React & Neural Networks.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6">
              <a
                href="https://soldier0x00.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors font-mono tracking-wider text-xs sm:text-sm min-h-[44px] flex items-center"
              >
                MEDIUM.dll
              </a>
              <a
                href="https://linkedin.com/in/sai-harsha-vardhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors font-mono tracking-wider text-xs sm:text-sm min-h-[44px] flex items-center"
              >
                LINKEDIN.exe
              </a>
              <a
                href="https://tryhackme.com/p/soldier0x00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors font-mono tracking-wider text-xs sm:text-sm min-h-[44px] flex items-center"
              >
                TRYHACKME.sys
              </a>
              <a
                href="https://www.instagram.com/harsha_soldier0x00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors font-mono tracking-wider text-xs sm:text-sm min-h-[44px] flex items-center"
              >
                INSTAGRAM.dll
              </a>
              <a
                href="https://x.com/soldier0x00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors font-mono tracking-wider text-xs sm:text-sm min-h-[44px] flex items-center"
              >
                TWITTER.exe
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;