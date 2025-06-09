import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaTwitter, FaMedium, FaCode } from "react-icons/fa";

function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 bg-black bg-opacity-80 text-white 
                      shadow-lg rounded-full backdrop-blur-md px-3 sm:px-6 py-2 sm:py-3 z-50 w-fit">
      <nav className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
        {/* Navigation Links */}
        <ul className="flex justify-center space-x-3 sm:space-x-6">
          {["About", "Projects", "Work", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()} 
                smooth={true} 
                duration={50} 
                offset={-100}
                className="font-bold text-xs sm:text-sm lg:text-xl hover:text-red-500 transition cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Divider - hidden on mobile, shown on larger screens */}
        <div className="hidden sm:block h-6 w-px bg-gray-500"></div>

        {/* Social Links - hidden on mobile */}
        <div className="hidden sm:flex space-x-3">
          <a href="https://github.com/khushalmishra11" target="_blank" rel="noopener noreferrer" 
             className="hover:text-red-500 transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/khushalmishra11/" target="_blank" rel="noopener noreferrer"
             className="hover:text-red-500 transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://x.com/khushal_mishra_" target="_blank" rel="noopener noreferrer"
             className="hover:text-red-500 transition-colors">
            <FaTwitter size={20} />
          </a>
          <a href="https://leetcode.com/u/khushalmishra11/" target="_blank" rel="noopener noreferrer"
             className="hover:text-red-500 transition-colors">
            <FaCode size={20} />
          </a>
          <a href="https://medium.com/@khushalmishra11" target="_blank" rel="noopener noreferrer"
             className="hover:text-red-500 transition-colors">
            <FaMedium size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
