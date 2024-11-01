import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import LinkedIn and Instagram icons

const Footer = () => {
  return (
    <footer className="bg-[#1e2121] text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="/" className="text-white hover:text-gray-400 mx-2">Home</a>
          <a href="/about" className="text-white hover:text-gray-400 mx-2">About</a>
          <a href="/contact" className="text-white hover:text-gray-400 mx-2">Contact</a>
        </div>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        
        {/* Icons container */}
        <div className="flex justify-center mt-4">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 mx-4">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 mx-4">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
