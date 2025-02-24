import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { IoLogoLinkedin } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#000] to-[#928686] text-white py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Footer Content */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-6">Stay Connected</h3>
          <p className="text-lg mb-6">Follow us on social media for the latest updates</p>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-8 text-3xl mb-8">
            {/* Social Icon 1: Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[hsl(102,80%,60%)] transition-all duration-500 transform hover:scale-110 hover:shadow-lg"
              aria-label="Facebook"
            >
              <FaFacebookSquare />
            </a>
            {/* Social Icon 2: Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#000] transition-all duration-500 transform hover:scale-110 hover:shadow-lg"
              aria-label="Twitter"
            >
            <FaTwitter />
            </a>
            {/* Social Icon 3: Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white    hover:text-[#010101] transition-all duration-500 transform hover:scale-110 hover:shadow-lg"
              aria-label="Instagram"
            >
             <CiInstagram />
            </a>
            {/* Social Icon 4: LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#010101] transition-all duration-500 transform hover:scale-110 hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <IoLogoLinkedin />
            </a>
          </div>

          {/* Footer Bottom */}
          <div className="text-sm">
            <p>&copy; 2025 Binyameen's Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
