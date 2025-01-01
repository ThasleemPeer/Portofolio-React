import React, { useState } from "react";
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NAVIGATION_LINKS } from '../constants';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50">
      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center justify-between bg-black/30 px-4 py-3 backdrop-blur-lg">
        <a href="#">
          <img src={logo} alt="Logo" width={90} />
        </a>
        <ul className="flex gap-6">
          {NAVIGATION_LINKS.map((item, index) => (
            <li key={index}>
              <a
                className="text-sm text-white hover:text-yellow-400"
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden bg-black/30 px-4 py-3 backdrop-blur-lg">
        <div className="flex items-center justify-between">
          <a href="#">
            <img src={logo} alt="Logo" width={90} />
          </a>
          <button
            className="focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6 text-white" />
            ) : (
              <FaBars className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <ul className="mt-4 flex flex-col gap-4">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  className="block text-lg text-white hover:text-yellow-400"
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
