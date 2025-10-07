'use client';

import React from 'react';

interface ContactSectionProps {
  linkedinUrl: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ linkedinUrl }) => {
  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let&apos;s Connect
          </span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-12">
          Interested in collaboration? Let&apos;s discuss your next project, app or DevOps challenge!
        </p>
        
        <div className="flex justify-center space-x-8">
          <a
            href={linkedinUrl}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;