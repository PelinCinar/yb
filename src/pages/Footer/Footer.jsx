import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1e2121] text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        {/* Ortada telif hakkı yazısı */}
        <p className="text-sm text-white mb-4">© 2024 Your Company. All rights reserved.</p>

        {/* Ortada linkler ve ikonlar */}
        <div className="flex flex-col items-center">
          {/* Linkler */}
          <div className="flex justify-center space-x-4 mb-4">
            <a href="/" className="text-white hover:text-gray-400">Home</a>
            <a href="/about" className="text-white hover:text-gray-400">About</a>
            <a href="/contact" className="text-white hover:text-gray-400">Contact</a>
          </div>

          {/* İkonlar linklerin altında */}
          <div className="flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
