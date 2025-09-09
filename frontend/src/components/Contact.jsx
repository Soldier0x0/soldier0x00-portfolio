import React, { useState } from 'react';
import { useAnalytics } from '../hooks/useAnalytics';

const Contact = () => {
  const { trackEvent } = useAnalytics();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText('cybersoldier0x00@protonmail.com');
      setCopiedEmail(true);
      trackEvent('email_copied', { source: 'contact_section' });
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      console.log('Clipboard API not available');
    }
  };

  const handleContactClick = (platform) => {
    trackEvent('contact_click', { platform, source: 'contact_section' });
  };

  const primaryContacts = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'cybersoldier0x00@protonmail.com',
      description: 'Secure encrypted communication',
      action: 'Copy Email',
      color: 'green',
      isPrimary: true,
      onClick: handleEmailCopy,
      href: 'mailto:cybersoldier0x00@protonmail.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: 'LinkedIn',
      value: 'Connect professionally',
      description: 'Career networking & opportunities',
      action: 'View Profile',
      color: 'blue',
      isPrimary: true,
      href: 'https://linkedin.com/in/sai-harsha-vardhan/'
    }
  ];

  const socialLinks = [
    {
      platform: 'Twitter',
      username: '@soldier0x00',
      href: 'https://x.com/soldier0x00',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: 'text-gray-400 hover:text-white'
    },
    {
      platform: 'Medium',
      username: 'Technical Articles',
      href: 'https://soldier0x00.medium.com/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
      ),
      color: 'text-gray-400 hover:text-white'
    },
    {
      platform: 'TryHackMe',
      username: 'soldier0x00',
      href: 'https://tryhackme.com/p/soldier0x00',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10.75 16.82C10.75 18.58 9.32 20.01 7.56 20.01C5.8 20.01 4.37 18.58 4.37 16.82C4.37 15.06 5.8 13.63 7.56 13.63C9.32 13.63 10.75 15.06 10.75 16.82ZM19.63 16.82C19.63 18.58 18.2 20.01 16.44 20.01C14.68 20.01 13.25 18.58 13.25 16.82C13.25 15.06 14.68 13.63 16.44 13.63C18.2 13.63 19.63 15.06 19.63 16.82ZM7.56 11.41C5.8 11.41 4.37 9.98 4.37 8.22C4.37 6.46 5.8 5.03 7.56 5.03C9.32 5.03 10.75 6.46 10.75 8.22C10.75 9.98 9.32 11.41 7.56 11.41ZM16.44 11.41C14.68 11.41 13.25 9.98 13.25 8.22C13.25 6.46 14.68 5.03 16.44 5.03C18.2 5.03 19.63 6.46 19.63 8.22C19.63 9.98 18.2 11.41 16.44 11.41Z"/>
        </svg>
      ),
      color: 'text-gray-400 hover:text-green-400'
    },
    {
      platform: 'Instagram',
      username: '@harsha_soldier0x00',
      href: 'https://www.instagram.com/harsha_soldier0x00',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'text-gray-400 hover:text-pink-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-transparent to-purple-500/3"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/3 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-green-400/20 rounded-full border border-cyan-400/30 mb-6">
              <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 mx-auto mb-8"></div>
            
            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on <span className="text-cyan-400 font-semibold">cybersecurity projects</span>, 
              share <span className="text-green-400 font-semibold">threat intelligence</span>, or discuss the 
              <span className="text-purple-400 font-semibold"> future of AI in security</span>?
            </p>
            
            <p className="text-gray-400 text-base mt-4">
              Let's build something secure together.
            </p>
          </div>

          {/* Primary Contact Methods */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {primaryContacts.map((contact, index) => {
              const colorClasses = {
                green: 'from-green-500/10 to-emerald-500/10 border-green-400/30 hover:border-green-400/60',
                blue: 'from-blue-500/10 to-cyan-500/10 border-blue-400/30 hover:border-blue-400/60'
              };

              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colorClasses[contact.color]} border-2 rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl backdrop-blur-sm group`}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${contact.color === 'green' ? 'from-green-500/20 to-emerald-500/20' : 'from-blue-500/20 to-cyan-500/20'} rounded-xl flex items-center justify-center ${contact.color === 'green' ? 'text-green-400' : 'text-blue-400'} group-hover:scale-110 transition-transform duration-300`}>
                      {contact.icon}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {contact.title}
                      </h3>
                      <p className="text-gray-300 mb-1 break-all text-sm sm:text-base">
                        {contact.value}
                      </p>
                      <p className="text-gray-400 text-sm mb-6">
                        {contact.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        {contact.onClick ? (
                          <button
                            onClick={contact.onClick}
                            className={`flex items-center justify-center px-6 py-3 bg-gradient-to-r ${contact.color === 'green' ? 'from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 text-green-400 border-green-400/30' : 'from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 text-blue-400 border-blue-400/30'} border rounded-lg transition-all duration-300 hover:scale-105 font-medium text-sm`}
                          >
                            {copiedEmail && contact.title === 'Email' ? (
                              <>
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Copied!
                              </>
                            ) : (
                              <>
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                {contact.action}
                              </>
                            )}
                          </button>
                        ) : null}
                        
                        {contact.href && (
                          <a
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => handleContactClick(contact.title)}
                            className="flex items-center justify-center px-6 py-3 border border-gray-600 hover:border-gray-500 rounded-lg transition-all duration-300 hover:scale-105 text-gray-300 hover:text-white font-medium text-sm"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Open
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-8">Follow My Journey</h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleContactClick(social.platform)}
                  className={`flex items-center space-x-3 px-6 py-4 bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700/50 hover:border-gray-600 rounded-xl transition-all duration-300 hover:scale-105 ${social.color} backdrop-blur-sm`}
                >
                  {social.icon}
                  <div className="text-left">
                    <div className="text-sm font-medium text-white">{social.platform}</div>
                    <div className="text-xs text-gray-400">{social.username}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Professional CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-2">Looking for collaboration?</h3>
              <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
                I'm always interested in discussing cybersecurity projects, research collaborations, or speaking opportunities.
              </p>
              <a
                href="mailto:cybersoldier0x00@protonmail.com?subject=Collaboration%20Opportunity"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;