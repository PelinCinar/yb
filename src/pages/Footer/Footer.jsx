import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import LinkedIn and Instagram icons

const Footer = () => {
  return (
    <footer className="bg-[#1e2121] text-white py-6"> {/* Paddingi biraz azalttım */}
      <div className="container mx-auto flex justify-between items-center px-5">
        
        <p className="text-sm text-white">© 2024 Your Company. All rights reserved.</p>

        {/* Linkler ortada */}
        <div className="flex space-x-4">
          <a href="/" className="text-white hover:text-gray-400">Home</a>
          <a href="/about" className="text-white hover:text-gray-400">About</a>
          <a href="/contact" className="text-white hover:text-gray-400">Contact</a>
        </div>

        {/* Iconlar sağda hizalandı */}
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
