// src/components/Footer.js
import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/marcelo-colum/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/marcelo.colum.1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-600"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/marcelocolum/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-pink-500"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="text-sm">© 2024 MCJD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
