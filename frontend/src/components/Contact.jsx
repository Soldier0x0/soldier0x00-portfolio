import React, { useState } from 'react';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText('cybersoldier0x00@protonmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.log('Clipboard API not available');
    }
  };

  const primaryContacts = [
    {
      title: 'Email',
      value: 'cybersoldier0x00@protonmail.com',
      description: 'Secure encrypted communication',
      action: 'Copy Email',
      color: 'green',
      onClick: handleEmailCopy,
      href: 'mailto:cybersoldier0x00@protonmail.com'
    },
    {
      title: 'LinkedIn',
      value: 'Connect professionally',
      description: 'Career networking & opportunities',
      action: 'View Profile',
      color: 'blue',
      href: 'https://linkedin.com/in/sai-harsha-vardhan/'
    }
  ];

  const socialLinks = [
    {
      platform: 'Twitter',
      username: '@soldier0x00',
      href: 'https://x.com/soldier0x00'
    },
    {
      platform: 'Medium',
      username: 'Technical Articles',
      href: 'https://soldier0x00.medium.com/'
    },
    {
      platform: 'TryHackMe',
      username: 'soldier0x00',
      href: 'https://tryhackme.com/p/soldier0x00'
    },
    {
      platform: 'Instagram',
      username: '@harsha_soldier0x00',
      href: 'https://www.instagram.com/harsha_soldier0x00'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-transparent to-purple-500/3"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
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
              const colorClasses = contact.color === 'green' 
                ? 'from-green-500/10 to-emerald-500/10 border-green-400/30 hover:border-green-400/60'
                : 'from-blue-500/10 to-cyan-500/10 border-blue-400/30 hover:border-blue-400/60';

              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colorClasses} border-2 rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl backdrop-blur-sm group`}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${contact.color === 'green' ? 'from-green-500/20 to-emerald-500/20 text-green-400' : 'from-blue-500/20 to-cyan-500/20 text-blue-400'} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {contact.color === 'green' ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      )}
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
                  className="flex items-center space-x-3 px-6 py-4 bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700/50 hover:border-gray-600 rounded-xl transition-all duration-300 hover:scale-105 text-gray-400 hover:text-white backdrop-blur-sm"
                >
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