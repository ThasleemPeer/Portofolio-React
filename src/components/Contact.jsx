import React from 'react';
import { SOCIAL_MEDIA_LINKS } from '../constants';

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4"
    >
      <h2 className="mb-4 text-center text-4xl">Contact</h2> {/* Removed top margin */}
      <div className="flex gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-400 transition duration-300"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
