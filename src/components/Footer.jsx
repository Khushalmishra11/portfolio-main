import React from "react";
import { FaInstagram, FaLinkedin, FaTiktok, FaGithub, FaTwitter, FaCode } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from "react-scroll";  // Import Link from react-scroll

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 relative">
        <div className="text-center space-y-8 sm:space-y-4">
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 sm:pt-0">
            <a href="https://github.com/khushalmishra11/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/khushalmishra11/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="https://x.com/khushal_mishra_" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://leetcode.com/u/khushalmishra11" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
              <FaCode size={24} />
            </a>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex justify-center space-x-6 text-sm">
              {["About", "Projects", "Work", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()} // Scroll to the corresponding section
                    smooth={true} // Enable smooth scroll
                    duration={100} // Scroll duration in milliseconds
                    offset={-50} // Adjust the offset to account for the fixed navbar
                    className="hover:text-red-500 transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright & Tech Stack */}
          <p className="text-xs text-gray-400 pb-6 sm:pb-0">
            © {new Date().getFullYear()} Khushal Mishra. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
